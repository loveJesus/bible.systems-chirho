# For God so loved the world, that He gave His only begotten Son, that all who believe in Him should not perish but have everlasting life. — John 3:16

# Bible.Systems - Comprehensive Bible Study Platform

> **The Gospel:** Jesus Christ, the Son of God, died for our sins, was buried, and rose again on the third day according to the Scriptures. Whoever believes in Him shall not perish but have eternal life. (1 Corinthians 15:3-4, John 3:16)

## Purpose

Bible.Systems is an open-source, comprehensive Bible study platform designed to rival and exceed Logos Bible Software. It provides:

- **Multiple Bible Versions** - Access to numerous translations
- **Cross-Reference System** - Deep linking between related passages
- **Original Language Tools** - Hebrew, Greek, and Aramaic support
- **Commentary Integration** - Historical and modern commentaries
- **Word Studies** - Lexicons, concordances, and word frequency
- **REST API** - For third-party integrations
- **MCP Server** - For AI assistant integration
- **Desktop App** - Offline-capable native application

## Part of FaithStack

This project is part of the [FaithStack](https://stack.faith) ecosystem of Christ-centered technology.

---

## Conventions

### Naming
- **Files & functions:** Use `_chirho` suffix (e.g., `verse_chirho.ts`, `searchBibleChirho()`)
- **Routes:** Use `-chirho` suffix (e.g., `/api/verses-chirho`, `/search-chirho`)
- **Variables:** Use `Chirho` suffix in camelCase (e.g., `versesChirho`, `bookNameChirho`)

### Runtime
- **Package manager:** Bun only (`bun`, `bunx`)
- **Deploy:** `bun run deploy-chirho`

---

## Core Features

### 1. Bible Text API
- Multiple versions (KJV, ESV, NIV, NASB, etc.)
- Verse-by-verse and passage retrieval
- Search across versions
- Parallel passage display

### 2. Cross-Reference System
- Treasury of Scripture Knowledge integration
- Topical cross-references
- Visual cross-reference explorer
- User-defined cross-references

### 3. Original Languages
- Hebrew (Old Testament)
- Greek (New Testament)
- Aramaic passages
- Interlinear display
- Morphological parsing
- Lexicon lookups (Strong's, BDB, BDAG)

### 4. Study Tools
- Commentaries (Matthew Henry, Gill, etc.)
- Word studies with etymology
- Concordance search
- Topic/theme finder
- Timeline integration

### 5. API Endpoints
```
GET  /api/bible-chirho/:version/:book/:chapter
GET  /api/bible-chirho/:version/:book/:chapter/:verse
GET  /api/search-chirho?q=query&version=KJV
GET  /api/crossref-chirho/:book/:chapter/:verse
GET  /api/lexicon-chirho/:strongs
GET  /api/word-chirho/:word
```

### 6. MCP Server
For AI assistants like Claude to access Bible data:
- `bible_lookup` - Get verse text
- `bible_search` - Search for passages
- `cross_reference` - Find related verses
- `word_study` - Get word definitions and usage

---

## Data Sources (Open/Public Domain)

- KJV, ASV, WEB (public domain)
- Strong's Concordance
- Treasury of Scripture Knowledge
- Open-source commentaries
- Hebrew/Greek lexicons

---

## Tech Stack

- **Frontend:** SvelteKit + Tailwind CSS
- **Backend:** Cloudflare Workers
- **Database:** D1 (SQLite) for Bible text
- **Search:** Full-text search with D1
- **Desktop:** Tauri (future)

---

## Directory Structure

```
bible.systems-chirho/
├── AGENTS.md
├── src/
│   ├── routes/
│   │   ├── +page.svelte          # Home/search
│   │   ├── [version]/
│   │   │   └── [book]/
│   │   │       └── [chapter]/
│   │   │           └── +page.svelte
│   │   └── api/
│   │       ├── bible-chirho/
│   │       ├── search-chirho/
│   │       ├── crossref-chirho/
│   │       └── lexicon-chirho/
│   └── lib/
│       ├── bible-chirho/         # Bible data utilities
│       ├── search-chirho/        # Search engine
│       └── components/           # UI components
├── static/
│   └── data/                     # Bible JSON/SQLite files
└── mcp-server-chirho/            # MCP server for AI integration
```

---

**JESUS CHRIST IS LORD**
