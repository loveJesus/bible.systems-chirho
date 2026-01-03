# For God so loved the world, that He gave His only begotten Son,
# that all who believe in Him should not perish but have everlasting life. — John 3:16

# CURRENT_SPRINT_CHIRHO.md

> This is the **living state document** for Bible.Systems. Any AI agent can read this
> file to understand the current work in progress and continue immediately.

---

## Active Task

Expanding Bible content and improving user experience.

## Recent Completions

- [x] FaithStack Master Spec v2.0 integration (27 sections in AGENTS.md)
- [x] Testing infrastructure (Vitest + Playwright) - 54 tests passing
- [x] Turnstile CAPTCHA protection
- [x] Bible reader with KJV data (6 books, 11 chapters)
- [x] Feedback bubble component
- [x] Security headers
- [x] Legal pages (Privacy, Terms, Accessibility, Contact)
- [x] D1 database integration for feedback storage
- [x] Cross-reference system with TSK data
- [x] Cross-reference UI in Bible reader

## In Progress

1. Expanding Bible content (currently 6 books, 11 chapters)
2. Component improvements

## Next Priorities

1. Add more Bible chapters (expand from 11 to full books)
2. Multiple Bible version support (ESV, NIV, NASB)
3. Original language tools (Hebrew/Greek)
4. Search functionality

## Blockers

None currently.

## Context for Next Session

### Recent Changes (2024-01)
- **D1 Database**: Created `feedback-db-chirho` database with `feedback_chirho` table
  - Binding: `FEEDBACK_DB_CHIRHO`
  - Schema: `migrations-chirho/0001_create_feedback_table_chirho.sql`
- **Cross-References API**: `/api-chirho/cross-references-chirho`
  - Query: `?book=Gen&chapter=1&verse=1`
  - Stats: `?stats=true`
- **Cross-Reference Data**: `src/lib/data_chirho/cross_references_chirho.ts`
  - Sample TSK data for key verses
  - Helper functions: `getCrossReferencesChirho`, `formatReferenceChirho`, etc.
- **Bible Reader Update**: Click chain icon to view cross-references

### Key Files
- KJV data: `src/lib/data_chirho/bible_kjv_chirho.ts`
- Cross-refs: `src/lib/data_chirho/cross_references_chirho.ts`
- API endpoints: `/api-chirho/bible-chirho/`, `/api-chirho/feedback-chirho/`, `/api-chirho/cross-references-chirho/`
- Tests: 54 passing (37 validation/Bible + 17 cross-reference)

### Deployment
- Deployed to bible.systems via Cloudflare Workers
- D1 database active

## Reference

- **AGENTS.md** — Permanent rules and conventions
- **spec_chirho/** — Source of truth for specifications
- **FaithStack Master Gist** — `https://gist.github.com/loveJesus/c93fbd61bc1dd6d898ef89c4b6981694`

---

**JESUS CHRIST IS LORD**
