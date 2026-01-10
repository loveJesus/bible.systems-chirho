# For God so loved the world, that He gave His only begotten Son,
# that all who believe in Him should not perish but have everlasting life. — John 3:16

# Bible.Systems Complete Roadmap

> This document tracks every task required to reach feature parity with Logos-level Bible study software.
> Checked items are complete. Unchecked items are pending.

---

## Current State Summary

| Category | Complete | In Progress | Planned | Total |
|----------|----------|-------------|---------|-------|
| Infrastructure | 8 | 2 | 12 | 22 |
| Bible Content | 1 | 1 | 8 | 10 |
| Original Languages | 2 | 1 | 10 | 13 |
| Cross-References | 1 | 0 | 5 | 6 |
| Search & Study | 0 | 1 | 14 | 15 |
| API & Integration | 2 | 0 | 10 | 12 |
| Publisher Portal | 0 | 0 | 15 | 15 |
| UI/UX | 6 | 1 | 12 | 19 |
| Desktop App | 0 | 0 | 5 | 5 |
| **TOTAL** | **20** | **6** | **91** | **117** |

---

## Phase 1: Foundation (Current Priority)

### 1.1 Database Infrastructure

- [ ] **Create D1 Catalog Database** (`catalog-chirho`)
  - [ ] Run `bunx wrangler d1 create catalog-chirho`
  - [ ] Apply migration `migrations-chirho/0001_catalog_schema_chirho.sql`
  - [ ] Add binding to `wrangler.toml`

- [ ] **Create D1 Resource Shards** (16 initial)
  - [ ] Run `bunx wrangler d1 create bible-res-00-chirho` through `bible-res-0f-chirho`
  - [ ] Apply migration `migrations-chirho/0002_resource_schema_chirho.sql` to each
  - [ ] Add all 16 bindings to `wrangler.toml`
  - [ ] Implement shard router (`src/lib/db_chirho/router-chirho.ts`)

- [ ] **Create App Database** (`app-chirho`)
  - [ ] Run `bunx wrangler d1 create app-chirho`
  - [ ] Apply feedback migration `migrations-chirho/0001_create_feedback_table_chirho.sql`
  - [ ] Migrate feedback from KV to D1

### 1.2 Bible Content Import

- [ ] **Import Full KJV from SWORD**
  - [ ] Update `scripts/sword-importer-chirho.ts` for full Bible import
  - [ ] Extract all 66 books (31,102 verses)
  - [ ] Include Strong's numbers for each word
  - [ ] Include morphology data
  - [ ] Store in D1 shards (not TypeScript file)

- [ ] **Import Additional Public Domain Bibles**
  - [ ] ASV (American Standard Version)
  - [ ] WEB (World English Bible)
  - [ ] YLT (Young's Literal Translation)
  - [ ] Darby Translation

- [ ] **Import Original Language Texts**
  - [ ] WLC (Westminster Leningrad Codex - Hebrew)
  - [ ] MorphGNT (Greek NT with morphology)
  - [ ] LXX (Septuagint)

### 1.3 API Migration

- [ ] **Update Bible API to use D1**
  - [ ] `/api-chirho/bible-chirho/:version_chirho/:book_chirho/:chapter_chirho`
  - [ ] `/api-chirho/bible-chirho/:version_chirho/:book_chirho/:chapter_chirho/:verse_chirho`
  - [ ] Add caching layer (KV)
  - [ ] Add rate limiting

- [ ] **Remove TypeScript Bible Data File**
  - [ ] Delete `src/lib/data_chirho/bible_kjv_chirho.ts` after D1 migration
  - [ ] Update all imports to use API/D1

---

## Phase 2: Original Language Tools

### 2.1 Lexicon Data

- [x] **Strong's Number Types** (`src/lib/types_chirho/comprehensive-schema-chirho.ts`)
- [x] **Louw-Nida Semantic Domains** (`src/lib/types_chirho/louw-nida-chirho.ts`)
- [ ] **Import Strong's Hebrew Dictionary** (H1-H8674)
  - [ ] Extract from SWORD `StrongsHebrew` module
  - [ ] Store in D1 lexicon tables
- [ ] **Import Strong's Greek Dictionary** (G1-G5624)
  - [ ] Extract from SWORD `StrongsGreek` module
  - [ ] Store in D1 lexicon tables
- [ ] **Import Brown-Driver-Briggs Hebrew Lexicon**
  - [ ] Extract from SWORD `BDBGlosses_Strongs` module
- [ ] **Import Thayer's Greek Lexicon**
  - [ ] Find public domain source
  - [ ] Parse and import to D1

### 2.2 Morphology System

- [x] **Morphology Type Definitions** (`src/lib/types_chirho/comprehensive-schema-chirho.ts`)
- [ ] **Import Robinson Morphology Codes**
  - [ ] Extract from SWORD `Robinson` module
  - [ ] Create lookup tables
- [ ] **Import OSHM Hebrew Morphology**
  - [ ] Extract from SWORD `OSHM` module
- [ ] **Morphology Parser Service**
  - [ ] Parse Robinson codes to human-readable
  - [ ] Parse Hebrew morphology codes
  - [ ] API endpoint `/api-chirho/morphology-chirho/:code_chirho`

### 2.3 Interlinear Display

- [x] **Interlinear Type Definitions** (`src/lib/types_chirho/interlinear-chirho.ts`)
- [x] **InterlinearViewChirho Component** (`src/lib/components/InterlinearViewChirho.svelte`)
- [x] **Sample Interlinear Page** (`src/routes/interlinear-chirho/`)
- [ ] **Full Interlinear Data Import**
  - [ ] Word-by-word alignment for entire NT
  - [ ] Word-by-word alignment for entire OT
- [ ] **Interlinear API Endpoint**
  - [ ] `/api-chirho/interlinear-chirho/:book_chirho/:chapter_chirho/:verse_chirho`
- [ ] **Reverse Interlinear Mode**
  - [ ] English text with Greek/Hebrew below

---

## Phase 3: Cross-References & Study

### 3.1 Cross-Reference System

- [x] **TSK Data Types** (partial in `src/lib/data_chirho/cross_references_chirho.ts`)
- [ ] **Import Full TSK Database** (340,000+ references)
  - [ ] Extract from SWORD `TSK` module
  - [ ] Parse all cross-reference types
  - [ ] Store in D1 with provenance tracking
- [ ] **Cross-Reference API**
  - [ ] `/api-chirho/crossref-chirho/:book_chirho/:chapter_chirho/:verse_chirho`
  - [ ] Include source attribution
  - [ ] Include confidence scores
- [ ] **Cross-Reference Network Visualization**
  - [ ] D3.js or similar graph visualization
  - [ ] Interactive exploration
- [ ] **NT-OT Quotation Mapping**
  - [ ] Import UBS Greek NT quotation data
  - [ ] Track direct quotes vs allusions

### 3.2 Commentary Integration

- [ ] **Import Matthew Henry Complete Commentary**
  - [ ] Extract from SWORD `MHC` module
- [ ] **Import Matthew Henry Concise**
- [ ] **Import Jamieson-Fausset-Brown**
  - [ ] Extract from SWORD `JFB` module
- [ ] **Import John Gill's Exposition**
- [ ] **Import Adam Clarke**
  - [ ] Extract from SWORD `Clarke` module
- [ ] **Commentary API**
  - [ ] `/api-chirho/commentary-chirho/:commentary_chirho/:book_chirho/:chapter_chirho`
- [ ] **Commentary Display Component**
  - [ ] Verse-by-verse commentary view
  - [ ] Multiple commentaries comparison

### 3.3 Word Study Tools

- [ ] **Word Occurrence Search**
  - [ ] Find all verses containing Strong's number
  - [ ] `/api-chirho/word-chirho/strongs-chirho/:strongs_chirho`
- [ ] **Lemma Search**
  - [ ] Search by dictionary form
  - [ ] `/api-chirho/word-chirho/lemma-chirho/:lemma_chirho`
- [ ] **Semantic Domain Search**
  - [ ] Search by Louw-Nida domain
  - [ ] `/api-chirho/word-chirho/domain-chirho/:domain_chirho`
- [ ] **Word Frequency Statistics**
  - [ ] Frequency by book
  - [ ] Frequency charts

---

## Phase 4: Advanced Search

### 4.1 Text Search

- [ ] **Full-Text Search Index**
  - [ ] Index all Bible versions
  - [ ] Support multiple languages
- [ ] **Search API**
  - [ ] `/api-chirho/search-chirho?q=query&version=kjv`
  - [ ] Phrase search
  - [ ] Boolean operators (AND, OR, NOT)
  - [ ] Wildcard support

### 4.2 Morphological Search (Logos-Level)

- [ ] **Morphological Query Parser**
  - [ ] Parse queries like "genitive nouns within 3 words of verb"
  - [ ] DSL specification and implementation
- [ ] **Morphological Search API**
  - [ ] `/api-chirho/search-chirho/morph-chirho`
  - [ ] POST body with query DSL
- [ ] **Proximity Search**
  - [ ] "word A within N words of word B"
- [ ] **Same Verse/Clause Constraints**
- [ ] **Part of Speech Filtering**
- [ ] **Case/Gender/Number Filtering**
- [ ] **Tense/Voice/Mood Filtering**
- [ ] **Hebrew Stem Filtering** (qal, niphal, piel, etc.)

---

## Phase 5: Publisher Portal

### 5.1 Publisher Account System

- [ ] **Publisher Registration**
  - [ ] `/api-chirho/publisher-chirho/register-chirho`
  - [ ] Organization verification workflow
- [ ] **Publisher Authentication**
  - [ ] OAuth or API key system
  - [ ] Session management
- [ ] **Publisher Dashboard UI**
  - [ ] `/publisher-fe/dashboard-chirho`

### 5.2 Resource Management

- [ ] **Resource Upload**
  - [ ] OSIS XML support
  - [ ] USFM/USX support
  - [ ] SWORD module support
  - [ ] Markdown (commentaries)
- [ ] **Resource Validation**
  - [ ] Format verification
  - [ ] Verse reference validation
  - [ ] Malware scanning
- [ ] **Resource Review Workflow**
  - [ ] Pending review queue
  - [ ] Approval/rejection system

### 5.3 Licensing & Pricing

- [ ] **License Configuration UI**
  - [ ] Public domain, CC, freemium, subscription, per-use
- [ ] **Pricing Tier Setup**
  - [ ] Free tier limits
  - [ ] Paid tier configuration
- [ ] **Usage Limits Configuration**
  - [ ] Rate limits per tier
  - [ ] AI training permissions

### 5.4 Payment Integration

- [ ] **Stripe Connect Integration**
  - [ ] Publisher Stripe account linking
  - [ ] Revenue split configuration (70/30)
- [ ] **Usage Metering**
  - [ ] Track API calls per resource
  - [ ] Track verse retrievals
- [ ] **Payout System**
  - [ ] Monthly payout calculation
  - [ ] Payout history

### 5.5 Analytics

- [ ] **Publisher Analytics Dashboard**
  - [ ] API calls over time
  - [ ] Revenue tracking
  - [ ] Top verses/chapters accessed
- [ ] **Usage Reports**
  - [ ] Downloadable CSV exports

---

## Phase 6: API & Integration

### 6.1 REST API

- [x] **Feedback API** (`/api-chirho/feedback-chirho`)
- [x] **Bible API** (partial, using TS file)
- [ ] **Complete Bible API** (using D1)
  - [ ] GET `/api-chirho/bible-chirho/:version_chirho`
  - [ ] GET `/api-chirho/bible-chirho/:version_chirho/:book_chirho`
  - [ ] GET `/api-chirho/bible-chirho/:version_chirho/:book_chirho/:chapter_chirho`
  - [ ] GET `/api-chirho/bible-chirho/:version_chirho/:book_chirho/:chapter_chirho/:verse_chirho`
- [ ] **Lexicon API**
  - [ ] GET `/api-chirho/lexicon-chirho/:strongs_chirho`
- [ ] **Morphology API**
  - [ ] GET `/api-chirho/morphology-chirho/:word_chirho`
- [ ] **Commentary API**
  - [ ] GET `/api-chirho/commentary-chirho/:id_chirho/:book_chirho/:chapter_chirho`
- [ ] **Search API**
  - [ ] GET `/api-chirho/search-chirho`
  - [ ] POST `/api-chirho/search-chirho/morph-chirho`
- [ ] **API Documentation**
  - [ ] OpenAPI/Swagger spec
  - [ ] Interactive documentation page

### 6.2 MCP Server (AI Integration)

- [ ] **MCP Server Setup**
  - [ ] `bible_lookup` tool
  - [ ] `bible_search` tool
  - [ ] `cross_reference` tool
  - [ ] `word_study` tool
  - [ ] `commentary_lookup` tool
- [ ] **MCP Authentication**
  - [ ] API key validation
  - [ ] Rate limiting for AI access
- [ ] **MCP Documentation**
  - [ ] Tool descriptions
  - [ ] Usage examples

### 6.3 Webhooks

- [ ] **Webhook System**
  - [ ] New resource published
  - [ ] Publisher events
  - [ ] Usage threshold alerts

---

## Phase 7: User Interface

### 7.1 Bible Reader

- [x] **Basic Bible Reader** (`/read-chirho/`)
- [x] **Chapter Navigation**
- [x] **Book Selection**
- [x] **Verse Copying**
- [x] **Social Sharing**
- [ ] **Multiple Version Display**
  - [ ] Side-by-side parallel view (2-4 versions)
- [ ] **Red Letter Display** (words of Christ)
- [ ] **Paragraph vs Verse-by-Verse Toggle**
- [ ] **Poetry/Prose Formatting**
- [ ] **Section Headings** (toggleable)
- [ ] **Verse Audio Playback**

### 7.2 Study Tools UI

- [ ] **Lexicon Popup**
  - [ ] Click word to see Strong's definition
- [ ] **Morphology Popup**
  - [ ] Full parsing display
- [ ] **Cross-Reference Panel**
  - [ ] Show related verses
  - [ ] Quick navigation
- [ ] **Commentary Sidebar**
  - [ ] Show commentary for current passage
- [ ] **Word Study Panel**
  - [ ] All occurrences
  - [ ] Usage charts

### 7.3 Visualization

- [ ] **Word Frequency Heatmap**
  - [ ] Word usage across books
- [ ] **Cross-Reference Network Graph**
  - [ ] Interactive D3.js visualization
- [ ] **Translation Comparison Chart**
  - [ ] How different versions translate same word
- [ ] **Bible Timeline**
  - [ ] Events with verse links
- [ ] **Bible Maps**
  - [ ] Interactive place locations

### 7.4 User Accounts (Future)

- [ ] **User Registration/Login**
- [ ] **Personal Notes**
  - [ ] Verse-level notes
  - [ ] Chapter-level notes
- [ ] **Highlights**
  - [ ] Multiple colors
  - [ ] Tags
- [ ] **Bookmarks**
- [ ] **Reading Plans**
  - [ ] Daily reading schedule
  - [ ] Progress tracking
- [ ] **User Settings**
  - [ ] Preferred version
  - [ ] Display preferences

---

## Phase 8: Desktop App (Tauri)

- [ ] **Tauri Project Setup**
  - [ ] Initialize Tauri with SvelteKit
- [ ] **Offline Bible Storage**
  - [ ] SQLite for local Bible data
  - [ ] Sync with server
- [ ] **Desktop-Specific Features**
  - [ ] System tray
  - [ ] Global shortcuts
  - [ ] Multi-window support
- [ ] **Auto-Updates**
- [ ] **Platform Builds**
  - [ ] Windows installer
  - [ ] macOS DMG
  - [ ] Linux AppImage

---

## Phase 9: Testing & Quality

### 9.1 Testing

- [x] **Vitest Unit Tests** (68 passing)
- [x] **Playwright E2E Tests**
- [ ] **API Integration Tests**
  - [ ] Test all API endpoints
  - [ ] Test rate limiting
- [ ] **Database Tests**
  - [ ] D1 query tests
  - [ ] Shard routing tests
- [ ] **Load Testing**
  - [ ] API performance benchmarks
  - [ ] Concurrent user simulation

### 9.2 Documentation

- [x] **AGENTS.md** (AI agent instructions)
- [x] **Spec files** (`spec_chirho/`)
- [ ] **API Documentation** (OpenAPI)
- [ ] **Developer Guide**
  - [ ] Setup instructions
  - [ ] Contributing guide
- [ ] **User Documentation**
  - [ ] Feature guides
  - [ ] FAQ

### 9.3 Compliance

- [x] **Privacy Policy**
- [x] **Terms of Service**
- [x] **Accessibility Statement**
- [ ] **WCAG 2.1 AA Audit**
  - [ ] Full accessibility review
- [ ] **Security Audit**
  - [ ] Penetration testing
  - [ ] OWASP checklist

---

## Infrastructure Complete ✓

- [x] SvelteKit 2 setup
- [x] Svelte 5 with runes
- [x] Tailwind CSS v4
- [x] Cloudflare Workers deployment
- [x] Security headers (hooks.server.ts)
- [x] Turnstile CAPTCHA integration
- [x] GitHub repository
- [x] Feedback system (KV storage)

---

## Files Scaffolded (Need Implementation)

| File | Description | Status |
|------|-------------|--------|
| `drizzle-chirho/schema-catalog-chirho.ts` | Catalog DB Drizzle schema | SCAFFOLDED |
| `drizzle-chirho/schema-resource-chirho.ts` | Resource DB Drizzle schema | SCAFFOLDED |
| `migrations-chirho/0001_catalog_schema_chirho.sql` | Catalog SQL migration | SCAFFOLDED |
| `migrations-chirho/0002_resource_schema_chirho.sql` | Resource SQL migration | SCAFFOLDED |
| `src/lib/types_chirho/louw-nida-chirho.ts` | 93 Louw-Nida domains | COMPLETE |
| `src/lib/types_chirho/interlinear-chirho.ts` | Interlinear types | COMPLETE |
| `src/lib/types_chirho/comprehensive-schema-chirho.ts` | Full data model types | COMPLETE |
| `src/lib/data_chirho/strongs-louw-nida-mapping-chirho.ts` | 25+ word mappings | PARTIAL |

---

## SWORD Modules Installed (Ready for Import)

| Module | Type | Status |
|--------|------|--------|
| KJV | Bible | Ready - NOT IMPORTED TO D1 |
| ASV | Bible | Ready - NOT IMPORTED |
| MorphGNT | Greek NT | Ready - NOT IMPORTED |
| LXX | Septuagint | Ready - NOT IMPORTED |
| WLC | Hebrew OT | Ready - NOT IMPORTED |
| SpaRV1909 | Spanish Bible | Ready - NOT IMPORTED |
| StrongsGreek | Lexicon | Ready - NOT IMPORTED |
| StrongsHebrew | Lexicon | Ready - NOT IMPORTED |
| BDBGlosses_Strongs | Hebrew Lexicon | Ready - NOT IMPORTED |
| TSK | Cross-References | Ready - NOT IMPORTED |
| MHC | Commentary | Ready - NOT IMPORTED |
| JFB | Commentary | Ready - NOT IMPORTED |
| Robinson | Morphology | Ready - NOT IMPORTED |

---

## Immediate Next Steps (Recommended Order)

1. **Create D1 Databases**
   - Catalog + 16 resource shards + app DB

2. **Import Full KJV to D1**
   - Use SWORD/diatheke to extract
   - Store in resource shards

3. **Update Bible API to Use D1**
   - Replace TypeScript file with D1 queries

4. **Update Homepage Messaging**
   - Be honest about current development state

5. **Import Lexicons**
   - Strong's Hebrew + Greek

6. **Build Interlinear Data**
   - Full word-level alignment

7. **Import TSK Cross-References**
   - 340,000+ references

---

> *"Trust in the LORD with all your heart, and lean not on your own understanding."* — Proverbs 3:5

**JESUS CHRIST IS LORD**
