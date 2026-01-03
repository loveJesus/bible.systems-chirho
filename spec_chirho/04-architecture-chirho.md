# For God so loved the world, that He gave His only begotten Son,
# that all who believe in Him should not perish but have everlasting life. — John 3:16

# Bible.Systems Architecture Specification

## 1. System Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           BIBLE.SYSTEMS ARCHITECTURE                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌───────────┐ │
│  │   Web App    │    │  Desktop App │    │   MCP Server │    │ REST API  │ │
│  │  (SvelteKit) │    │   (Tauri)    │    │  (AI Access) │    │           │ │
│  └──────┬───────┘    └──────┬───────┘    └──────┬───────┘    └─────┬─────┘ │
│         │                   │                   │                  │        │
│         └───────────────────┴───────────────────┴──────────────────┘        │
│                                     │                                        │
│                    ┌────────────────┴────────────────┐                      │
│                    │         API Gateway             │                      │
│                    │   (Cloudflare Workers Edge)     │                      │
│                    └────────────────┬────────────────┘                      │
│                                     │                                        │
│         ┌───────────────────────────┼───────────────────────────┐           │
│         │                           │                           │           │
│  ┌──────┴──────┐           ┌────────┴────────┐        ┌────────┴────────┐  │
│  │   App DB    │           │  Resource DBs   │        │    R2 Storage   │  │
│  │  (D1 SQLite)│           │ (64× D1 Shards) │        │  (Large Files)  │  │
│  │             │           │                 │        │                 │  │
│  │ - Users     │           │ - Bible Text    │        │ - Audio Bibles  │  │
│  │ - Sessions  │           │ - Cross-refs    │        │ - Images        │  │
│  │ - Notes     │           │ - Lexicons      │        │ - Commentary    │  │
│  │ - Bookmarks │           │ - Morphology    │        │   (large text)  │  │
│  └─────────────┘           │ - Commentaries  │        └─────────────────┘  │
│                            └─────────────────┘                              │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 2. Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              DATA IMPORT PIPELINE                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐  │
│  │   SWORD     │    │   OSIS/XML  │    │   SQLite    │    │   Custom    │  │
│  │   Modules   │    │    Files    │    │   Exports   │    │    JSON     │  │
│  └──────┬──────┘    └──────┬──────┘    └──────┬──────┘    └──────┬──────┘  │
│         │                  │                  │                  │          │
│         └──────────────────┴──────────────────┴──────────────────┘          │
│                                     │                                        │
│                    ┌────────────────┴────────────────┐                      │
│                    │        Import Scripts           │                      │
│                    │   (scripts-chirho/import-*.ts)  │                      │
│                    └────────────────┬────────────────┘                      │
│                                     │                                        │
│                    ┌────────────────┴────────────────┐                      │
│                    │        Normalization Layer      │                      │
│                    │   - Verse ID standardization    │                      │
│                    │   - Morphology code mapping     │                      │
│                    │   - Cross-ref deduplication     │                      │
│                    └────────────────┬────────────────┘                      │
│                                     │                                        │
│                    ┌────────────────┴────────────────┐                      │
│                    │        Shard Router             │                      │
│                    │   SHA-256 hash → 6-bit index    │                      │
│                    └────────────────┬────────────────┘                      │
│                                     │                                        │
│         ┌───────────┬───────────┬───┴───┬───────────┬───────────┐          │
│         ▼           ▼           ▼       ▼           ▼           ▼          │
│    ┌────────┐  ┌────────┐  ┌────────┐  ...    ┌────────┐  ┌────────┐       │
│    │ DB 00  │  │ DB 01  │  │ DB 02  │         │ DB 3E  │  │ DB 3F  │       │
│    └────────┘  └────────┘  └────────┘         └────────┘  └────────┘       │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 3. Database Sharding Architecture (Dynamic Allocation)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    DYNAMIC D1 SHARDING WITH CATALOG DB                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   New Resource Import: "mhenry" (Matthew Henry Commentary, ~10 MB)          │
│                                                                              │
│   ┌─────────────────────────────────────────────────────────────┐           │
│   │                    CATALOG_DB_CHIRHO                         │           │
│   │         "Which shard has space for 10 MB?"                  │           │
│   └──────────────────────────┬──────────────────────────────────┘           │
│                              │                                              │
│   ┌──────────────────────────▼──────────────────────────────────┐           │
│   │              Query Shard Sizes                               │           │
│   │   SELECT shard_index_chirho, SUM(size_estimate_chirho)      │           │
│   │   FROM resource_locations_chirho                             │           │
│   │   GROUP BY shard_index_chirho                                │           │
│   └──────────────────────────┬──────────────────────────────────┘           │
│                              │                                              │
│   ┌──────────────────────────▼──────────────────────────────────┐           │
│   │              Find Least-Full Shard                           │           │
│   │   Shard 00: 2.1 GB                                          │           │
│   │   Shard 01: 1.8 GB  ← Least full!                           │           │
│   │   Shard 02: 3.2 GB                                          │           │
│   │   ...                                                       │           │
│   └──────────────────────────┬──────────────────────────────────┘           │
│                              │                                              │
│   ┌──────────────────────────▼──────────────────────────────────┐           │
│   │              Record Location + Route                         │           │
│   │   INSERT INTO resource_locations_chirho                      │           │
│   │     (resource_id, shard_index, size_estimate)               │           │
│   │     VALUES ('mhenry', 1, 10485760)                          │           │
│   │                                                             │           │
│   │   → Route to RES_01_CHIRHO                                  │           │
│   └─────────────────────────────────────────────────────────────┘           │
│                                                                              │
│   ┌─────────────────────────────────────────────────────────────┐           │
│   │               Current Shard Layout (16 initial)              │           │
│   ├─────────────────────────────────────────────────────────────┤           │
│   │   00 ████████░░ 2.1GB    08 ██████░░░░ 1.5GB               │           │
│   │   01 ██████░░░░ 1.8GB    09 ████████░░ 2.0GB               │           │
│   │   02 ██████████ 3.2GB    0A ██████░░░░ 1.6GB               │           │
│   │   03 ████░░░░░░ 1.0GB    0B ██████████ 2.8GB               │           │
│   │   04 ████████░░ 2.2GB    0C ████░░░░░░ 0.9GB               │           │
│   │   05 ██████░░░░ 1.7GB    0D ██████░░░░ 1.4GB               │           │
│   │   06 ██████████ 2.9GB    0E ████████░░ 2.3GB               │           │
│   │   07 ████░░░░░░ 1.1GB    0F ██████░░░░ 1.7GB               │           │
│   └─────────────────────────────────────────────────────────────┘           │
│                                                                              │
│   When all shards > 8GB: Create new shard (10, 11, 12...)                   │
│                                                                              │
│   Each shard contains same schema:                                          │
│   - verses_chirho, word_instances_chirho, cross_refs_chirho                 │
│   - lexicon_entries_chirho, commentary_refs_chirho                          │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 4. Word Instance Data Model

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         WORD INSTANCE RELATIONSHIPS                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   ┌─────────────────────────────────────────────────────────────┐           │
│   │                     word_instances_chirho                    │           │
│   ├─────────────────────────────────────────────────────────────┤           │
│   │  id_chirho: "kjv:gen:1:1:1"                                 │           │
│   │  verse_id_chirho: "kjv:gen:1:1"                             │           │
│   │  position_chirho: 1                                          │           │
│   │  text_chirho: "In"                                          │           │
│   │  lemma_chirho: "in"                                         │           │
│   │  original_text_chirho: "בְּרֵאשִׁית"                          │           │
│   │  strongs_chirho: "H7225"                                    │           │
│   │  morphology_json_chirho: {...}                              │           │
│   │  louw_nida_chirho: "67.65"                                  │           │
│   └──────────────────────────┬──────────────────────────────────┘           │
│                              │                                              │
│          ┌───────────────────┼───────────────────┐                         │
│          ▼                   ▼                   ▼                         │
│   ┌──────────────┐   ┌──────────────┐   ┌──────────────┐                   │
│   │ strongs_     │   │ semantic_    │   │ morphology   │                   │
│   │ entries_     │   │ domains_     │   │ (parsed)     │                   │
│   │ chirho       │   │ chirho       │   │              │                   │
│   ├──────────────┤   ├──────────────┤   ├──────────────┤                   │
│   │ H7225        │   │ 67.65        │   │ pos: noun    │                   │
│   │ רֵאשִׁית       │   │ Time:        │   │ gender: fem  │                   │
│   │ "beginning"  │   │ Beginning    │   │ number: sing │                   │
│   │ usage: 51x   │   │              │   │ state: const │                   │
│   └──────────────┘   └──────────────┘   └──────────────┘                   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 5. Cross-Reference Network

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       CROSS-REFERENCE PROVENANCE MODEL                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│                          ┌─────────────┐                                    │
│                          │  Gen 1:1    │                                    │
│                          │  "In the    │                                    │
│                          │  beginning" │                                    │
│                          └──────┬──────┘                                    │
│                                 │                                           │
│           ┌─────────────────────┼─────────────────────┐                    │
│           │                     │                     │                    │
│           ▼                     ▼                     ▼                    │
│    ┌─────────────┐       ┌─────────────┐       ┌─────────────┐            │
│    │   Jhn 1:1   │       │   Heb 1:10  │       │   Col 1:16  │            │
│    │             │       │             │       │             │            │
│    │ source: TSK │       │ source: TSK │       │ source: NT  │            │
│    │ type: theme │       │ type: quote │       │ quotation   │            │
│    │ conf: 0.95  │       │ conf: 0.90  │       │ type: allu  │            │
│    │             │       │             │       │ conf: 0.85  │            │
│    │ attribution:│       │ attribution:│       │             │            │
│    │  - TSK      │       │  - TSK      │       │ attribution:│            │
│    │  - M.Henry  │       │  - Gill     │       │  - UBS      │            │
│    └─────────────┘       └─────────────┘       └─────────────┘            │
│                                                                              │
│   Cross-Reference Types:                                                    │
│   ─────────────────────                                                     │
│   • direct_quote_chirho    NT quoting OT verbatim                          │
│   • allusion_chirho        Indirect reference/echo                          │
│   • parallel_chirho        Same event, different account                    │
│   • thematic_chirho        Same theme or concept                            │
│   • typological_chirho     Type/antitype relationship                       │
│   • contrast_chirho        Contrasting passages                             │
│                                                                              │
│   Sources:                                                                  │
│   ────────                                                                  │
│   • tsk_chirho             Treasury of Scripture Knowledge                  │
│   • ubs_chirho             UBS Greek New Testament                          │
│   • na28_chirho            Nestle-Aland 28th edition                        │
│   • commentary_chirho      From commentary analysis                         │
│   • user_chirho            User-submitted                                   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 6. Morphological Search Query Engine

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      MORPHOLOGICAL SEARCH ARCHITECTURE                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   Query: "Find θεός (theos) in genitive case followed by                    │
│           adjective within 3 words"                                         │
│                                                                              │
│   ┌─────────────────────────────────────────────────────────────┐           │
│   │                      Query Parser                            │           │
│   ├─────────────────────────────────────────────────────────────┤           │
│   │  {                                                          │           │
│   │    patternChirho: [                                         │           │
│   │      { lemmaChirho: "θεός", caseChirho: "genitive" },       │           │
│   │      { posChirho: "adjective" }                             │           │
│   │    ],                                                       │           │
│   │    withinChirho: 3,                                         │           │
│   │    orderedChirho: true                                      │           │
│   │  }                                                          │           │
│   └──────────────────────────┬──────────────────────────────────┘           │
│                              │                                              │
│   ┌──────────────────────────▼──────────────────────────────────┐           │
│   │                    Index Lookup                              │           │
│   │  1. Find all θεός in genitive (idx_lemma + morphology)      │           │
│   │  2. For each match, scan ±3 word positions                   │           │
│   │  3. Filter for adjective POS                                 │           │
│   └──────────────────────────┬──────────────────────────────────┘           │
│                              │                                              │
│   ┌──────────────────────────▼──────────────────────────────────┐           │
│   │                    Results                                   │           │
│   ├─────────────────────────────────────────────────────────────┤           │
│   │  Rom 8:9   "τοῦ θεοῦ" + "πνεῦμα" (genitive + adj, dist=1)  │           │
│   │  1Co 3:16  "τοῦ θεοῦ" + "ἅγιον" (genitive + adj, dist=2)   │           │
│   │  Eph 2:8   "τοῦ θεοῦ" + "μέγα" (genitive + adj, dist=1)    │           │
│   │  ...                                                        │           │
│   └─────────────────────────────────────────────────────────────┘           │
│                                                                              │
│   Supported Query Patterns:                                                 │
│   ─────────────────────────                                                 │
│   • Lemma search (dictionary form)                                          │
│   • Surface form search (exact text)                                        │
│   • Part of speech filtering                                                │
│   • Case/gender/number filtering                                            │
│   • Tense/voice/mood filtering (verbs)                                      │
│   • Hebrew stem filtering (qal, piel, etc.)                                 │
│   • Proximity search (within N words)                                       │
│   • Ordered vs unordered matching                                           │
│   • Same verse/clause constraints                                           │
│   • Book/version filtering                                                  │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 7. API Request Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           API REQUEST LIFECYCLE                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   Client Request:                                                           │
│   GET /api-chirho/bible-chirho/kjv_chirho/gen_chirho/1_chirho               │
│                                                                              │
│   ┌─────────────────────────────────────────────────────────────┐           │
│   │  1. Edge Worker (Cloudflare)                                │           │
│   │     - Parse route parameters                                 │           │
│   │     - Validate version/book/chapter                          │           │
│   │     - Check cache (KV)                                       │           │
│   └──────────────────────────┬──────────────────────────────────┘           │
│                              │ Cache miss                                   │
│   ┌──────────────────────────▼──────────────────────────────────┐           │
│   │  2. Shard Router                                            │           │
│   │     - Generate resource key: "kjv:gen:1"                    │           │
│   │     - Hash key: SHA-256("kjv:gen:1")                        │           │
│   │     - Extract shard: bits[0:5] → 42 → RES_2A_CHIRHO         │           │
│   └──────────────────────────┬──────────────────────────────────┘           │
│                              │                                              │
│   ┌──────────────────────────▼──────────────────────────────────┐           │
│   │  3. D1 Query                                                 │           │
│   │     SELECT * FROM verses_chirho                             │           │
│   │     WHERE book_chirho = 'gen'                               │           │
│   │       AND chapter_chirho = 1                                │           │
│   │       AND version_chirho = 'kjv'                            │           │
│   │     ORDER BY verse_chirho                                   │           │
│   └──────────────────────────┬──────────────────────────────────┘           │
│                              │                                              │
│   ┌──────────────────────────▼──────────────────────────────────┐           │
│   │  4. Response Assembly                                        │           │
│   │     - Format verse data                                      │           │
│   │     - Include word-level data if requested                   │           │
│   │     - Add cross-reference counts                             │           │
│   │     - Cache response (KV, 1 hour TTL)                        │           │
│   └──────────────────────────┬──────────────────────────────────┘           │
│                              │                                              │
│   ┌──────────────────────────▼──────────────────────────────────┐           │
│   │  5. Response                                                 │           │
│   │     {                                                       │           │
│   │       "bookChirho": "Genesis",                              │           │
│   │       "chapterChirho": 1,                                   │           │
│   │       "versesChirho": [                                     │           │
│   │         { "verseChirho": 1, "textChirho": "In the..." },   │           │
│   │         ...                                                 │           │
│   │       ],                                                    │           │
│   │       "crossRefCountChirho": 47                             │           │
│   │     }                                                       │           │
│   └─────────────────────────────────────────────────────────────┘           │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 8. Import Tool Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         SWORD MODULE IMPORT PIPELINE                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   ┌─────────────────────────────────────────────────────────────┐           │
│   │                    installmgr                                │           │
│   │   - installmgr -init                                        │           │
│   │   - installmgr -sc  (list sources)                          │           │
│   │   - installmgr -ri CrossWire KJV  (install module)          │           │
│   └──────────────────────────┬──────────────────────────────────┘           │
│                              │                                              │
│   ┌──────────────────────────▼──────────────────────────────────┐           │
│   │                    diatheke                                  │           │
│   │   - diatheke -b KJV -f plain -k "Gen 1:1-50:26"             │           │
│   │   - diatheke -b KJV -o n -k "Gen 1:1"  (with Strong's)      │           │
│   └──────────────────────────┬──────────────────────────────────┘           │
│                              │                                              │
│   ┌──────────────────────────▼──────────────────────────────────┐           │
│   │              import-sword-chirho.ts                          │           │
│   ├─────────────────────────────────────────────────────────────┤           │
│   │  function importModuleChirho(moduleChirho: string) {        │           │
│   │    // 1. Get list of all books in module                    │           │
│   │    const booksChirho = getBooksFromModuleChirho(module);    │           │
│   │                                                             │           │
│   │    // 2. For each book, extract all chapters                │           │
│   │    for (const bookChirho of booksChirho) {                  │           │
│   │      const chaptersChirho = extractChaptersChirho(book);    │           │
│   │                                                             │           │
│   │      // 3. For each verse, parse and normalize              │           │
│   │      for (const verseChirho of chaptersChirho.verses) {     │           │
│   │        const normalizedChirho = normalizeVerseChirho(verse);│           │
│   │                                                             │           │
│   │        // 4. Calculate shard and insert                     │           │
│   │        const shardChirho = getShardIndexChirho(verse.id);   │           │
│   │        await insertToShardChirho(shard, normalized);        │           │
│   │      }                                                      │           │
│   │    }                                                        │           │
│   │  }                                                          │           │
│   └─────────────────────────────────────────────────────────────┘           │
│                                                                              │
│   Supported Import Sources:                                                 │
│   ─────────────────────────                                                 │
│   • SWORD modules (via diatheke)                                            │
│   • OSIS XML files                                                          │
│   • USX/USFM files                                                          │
│   • Unbound Bible SQLite exports                                            │
│   • Custom JSON format                                                       │
│   • TSK cross-reference database                                            │
│   • Strong's concordance files                                              │
│   • Morphology databases (Robinson, OSHB)                                   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 9. Feature Comparison Matrix

| Feature | Logos | Blue Letter Bible | Accordance | SWORD | Bible.Systems |
|---------|-------|-------------------|------------|-------|---------------|
| Multiple versions | ✓ | ✓ | ✓ | ✓ | PLANNED |
| Parallel display | ✓ | ✓ | ✓ | ✓ | PLANNED |
| Interlinear | ✓ | ✓ | ✓ | Partial | PLANNED |
| Morphology parsing | ✓ | ✓ | ✓ | Partial | PLANNED |
| Morph search | ✓ | ✗ | ✓ | ✗ | PLANNED |
| Semantic domains | ✓ | ✗ | ✓ | ✗ | PLANNED |
| Cross-refs | ✓ | ✓ | ✓ | ✓ | PARTIAL |
| Xref provenance | ✓ | ✗ | Partial | ✗ | PLANNED |
| Commentaries | ✓ | ✓ | ✓ | ✓ | PLANNED |
| Word studies | ✓ | ✓ | ✓ | Partial | PLANNED |
| Timeline | ✓ | ✗ | ✓ | ✗ | PLANNED |
| Maps | ✓ | ✓ | ✓ | ✗ | PLANNED |
| Sermon prep | ✓ | ✗ | ✓ | ✗ | PLANNED |
| REST API | ✗ | ✗ | ✗ | ✗ | PLANNED |
| MCP/AI access | ✗ | ✗ | ✗ | ✗ | PLANNED |
| Open source | ✗ | ✗ | ✗ | ✓ | ✓ |
| Web-based | ✗ | ✓ | ✗ | Partial | ✓ |
| Offline support | ✓ | ✗ | ✓ | ✓ | PLANNED |

## 10. Visualization Components

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        VISUALIZATION ARCHITECTURE                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   ┌─────────────────────────────────────────────────────────────┐           │
│   │              Word Frequency Heatmap                          │           │
│   ├─────────────────────────────────────────────────────────────┤           │
│   │                                                             │           │
│   │   Gen Exo Lev Num Deu Jos Jdg ... Rev                      │           │
│   │   ███ ██  █   ██  ███ █   ██      █                        │           │
│   │                                                             │           │
│   │   H7225 "beginning" frequency by book                       │           │
│   │   Darker = more occurrences                                 │           │
│   └─────────────────────────────────────────────────────────────┘           │
│                                                                              │
│   ┌─────────────────────────────────────────────────────────────┐           │
│   │              Cross-Reference Network Graph                   │           │
│   ├─────────────────────────────────────────────────────────────┤           │
│   │                                                             │           │
│   │              ┌────┐                                         │           │
│   │        ┌─────│Jn1 │─────┐                                  │           │
│   │        │     └────┘     │                                  │           │
│   │     ┌──┴──┐          ┌──┴──┐                              │           │
│   │     │Gen1 │──────────│Col1 │                              │           │
│   │     └──┬──┘          └──┬──┘                              │           │
│   │        │     ┌────┐     │                                  │           │
│   │        └─────│Heb1│─────┘                                  │           │
│   │              └────┘                                         │           │
│   │                                                             │           │
│   │   Node size = reference count                               │           │
│   │   Edge thickness = connection strength                      │           │
│   └─────────────────────────────────────────────────────────────┘           │
│                                                                              │
│   ┌─────────────────────────────────────────────────────────────┐           │
│   │              Translation Comparison Chart                    │           │
│   ├─────────────────────────────────────────────────────────────┤           │
│   │                                                             │           │
│   │   H26 "love" translations:                                  │           │
│   │   ┌─────────────────────────────────┐                      │           │
│   │   │ love     ████████████████ 80%   │                      │           │
│   │   │ charity  ████████ 15%           │                      │           │
│   │   │ beloved  ██ 3%                  │                      │           │
│   │   │ other    █ 2%                   │                      │           │
│   │   └─────────────────────────────────┘                      │           │
│   │                                                             │           │
│   └─────────────────────────────────────────────────────────────┘           │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

**JESUS CHRIST IS LORD**
