# For God so loved the world, that He gave His only begotten Son,
# that all who believe in Him should not perish but have everlasting life. — John 3:16

# CURRENT_SPRINT_CHIRHO.md

> This is the **living state document** for Bible.Systems. Any AI agent can read this
> file to understand the current work in progress and continue immediately.

---

## Active Task

Building Logos-level Bible study architecture with deep features.

## Recent Completions

- [x] **Major Architecture Expansion** (AGENTS.md now 29 sections):
  - Dynamic D1 sharding (16 databases, expandable)
  - SWORD/diatheke integration for Bible module import
  - Louw-Nida semantic domain system (93 domains)
  - Cross-reference provenance tracking
  - Advanced morphological search DSL
  - Publisher portal with Stripe Connect
  - Word-level data model with syntax trees

- [x] **New Specifications**:
  - `spec_chirho/04-architecture-chirho.md` - System diagrams, sharding, data models
  - `spec_chirho/05-publisher-licensing-chirho.md` - Publisher portal, licensing types

- [x] **Frontend Updates**:
  - Homepage: Logos-Level branding, stats bar, architecture preview
  - Features page: Categorized into Core, Architecture, Study Tools
  - stack.faith: Updated Bible.Systems entry
  - kingdominvest.ing: Updated Bible.Systems campaign

- [x] FaithStack Master Spec v2.0 integration
- [x] Testing infrastructure (Vitest + Playwright) - 54 tests passing
- [x] D1 database integration for feedback storage
- [x] Cross-reference system with TSK data + provenance
- [x] **Bible content expansion** (20 books, 35+ chapters):

  **Old Testament (6 books):**
  - Genesis 1-3 (Creation, Fall)
  - Exodus 20 (Ten Commandments - all 17 verses)
  - Deuteronomy 6 (Shema - 9 verses)
  - Psalms 1, 23, 51, 91, 100, 119 (Key worship psalms)
  - Proverbs 3 (Trust in the Lord)
  - Isaiah 53 (Suffering Servant)

  **Gospels & Acts (3 books):**
  - Matthew 5, 28 (Beatitudes, Great Commission - all 20 verses)
  - John 1, 3, 14, 15 (Prologue, Born Again, Way/Truth/Life, Vine)
  - Acts 2 (Pentecost - key verses)

  **Pauline Epistles (7 books):**
  - Romans 8 (complete - all 39 verses)
  - 1 Corinthians 13 (Love chapter)
  - Galatians 5 (Fruit of the Spirit)
  - Ephesians 2 (Grace through Faith)
  - Philippians 4 (Rejoice in the Lord)
  - Colossians 3 (Set mind on things above)
  - 2 Timothy 3 (All Scripture inspired)

  **General Epistles (3 books):**
  - Hebrews 11 (Hall of Faith - 20 key verses)
  - James 1 (Trials and Temptation)
  - 1 Peter 1-2 (Living Hope, Royal Priesthood)

  **Prophecy (1 book):**
  - Revelation 21-22 (New Heaven and Earth)

- [x] Component improvements (accessibility fixes - aria-label on button)

## In Progress

Architecture implementation phase.

## Next Priorities

1. **D1 Catalog Database** - Create catalog for shard allocation
2. **Morphological Search Engine** - Implement search DSL parser
3. **SWORD Module Importer** - diatheke integration for Bible texts
4. **Louw-Nida Domain Mapping** - 93 semantic domains
5. **Publisher Portal** - Stripe Connect integration
6. **Word-Level Data Model** - Morphology at every position

## Blockers

None currently.

## Context for Next Session

### Architecture Overview (2026-01)

**Dynamic D1 Sharding:**
- 16 databases initially, expandable as needed
- Catalog DB tracks resource → shard mapping
- Resources allocated to least-full shard (under 8GB)
- Add new shards when all are near capacity

**Key Specifications:**
- `spec_chirho/04-architecture-chirho.md` - System diagrams, sharding, data models
- `spec_chirho/05-publisher-licensing-chirho.md` - Publisher portal, license types

**Deep Features (Logos-level):**
- Morphological search DSL: `genitive nouns within 3 words of verb`
- Louw-Nida semantic domains: 93 categories
- Cross-reference provenance: source, tradition, confidence
- Word-level data: every position has morphology, syntax

**Publisher Portal:**
- License types: public_domain, creative_commons, freemium, subscription, per_use
- Stripe Connect integration (70/30 revenue split)
- API access pricing configurable per resource

### Key Files
- AGENTS.md: 29 sections with complete architecture
- KJV data: `src/lib/data_chirho/bible_kjv_chirho.ts` (20 books, ~94KB)
- Cross-refs: `src/lib/data_chirho/cross_references_chirho.ts`
- Architecture spec: `spec_chirho/04-architecture-chirho.md`
- Publisher spec: `spec_chirho/05-publisher-licensing-chirho.md`
- Tests: 54 passing

### Deployment
- bible.systems via Cloudflare Workers
- stack.faith entry updated
- kingdominvest.ing campaign updated

## Reference

- **AGENTS.md** — Permanent rules and conventions
- **spec_chirho/** — Source of truth for specifications
- **FaithStack Master Gist** — `https://gist.github.com/loveJesus/c93fbd61bc1dd6d898ef89c4b6981694`

---

**JESUS CHRIST IS LORD**
