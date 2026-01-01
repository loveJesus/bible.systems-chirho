# For God so loved the world, that He gave His only begotten Son, that all who believe in Him should not perish but have everlasting life. — John 3:16

# Bible.Systems - AI Agent Instructions

> **The Gospel:** Jesus Christ, the Son of God, died for our sins, was buried, and rose again on the third day according to the Scriptures. Whoever believes in Him shall not perish but have eternal life. (1 Corinthians 15:3-4, John 3:16)

---

## License

This work is licensed under the **MIT License**.

---

## 1. Project Overview

Bible.Systems is an open-source, comprehensive Bible study platform designed to provide:

- Multiple Bible Versions with parallel passage display
- Cross-Reference System with Treasury of Scripture Knowledge
- Original Language Tools (Hebrew, Greek, Aramaic)
- Commentary Integration
- Word Studies with lexicons and concordances
- REST & MCP API for third-party and AI integration
- Desktop App via Tauri

**Part of [FaithStack](https://stack.faith)** - the ecosystem of Christ-centered technology.

---

## 2. Naming & Casing Conventions

All project-created identifiers use the `_chirho` or `-chirho` suffix to distinguish from third-party code.

### 2.1 The Suffix Rule

| Type | Case Style | Suffix | Example |
|------|------------|--------|---------|
| **Variables/Functions (JS/TS)** | `camelCase` | `Chirho` | `userDataChirho`, `fetchVersesChirho()` |
| **Variables/Functions (Python/Rust)** | `snake_case` | `_chirho` | `user_data_chirho`, `fetch_verses_chirho()` |
| **Classes/Components/Types** | `PascalCase` | `Chirho` | `VerseDisplayChirho`, `FeedbackBubbleChirho` |
| **Constants/Env Vars** | `SCREAMING_SNAKE` | `_CHIRHO` | `API_KEY_CHIRHO`, `MAX_VERSES_CHIRHO` |
| **NPM/Bun Scripts** | `kebab-case` | `-chirho` | `build-prod-chirho`, `deploy-chirho` |
| **Directories (project-created)** | `snake_case` or `kebab-case` | `_chirho` or `-chirho` | `services_chirho/`, `api-chirho/` |
| **Web Routes/Paths** | `kebab-case` | `-chirho` | `/features-fe/`, `/privacy-fe/` |
| **API Endpoints** | `kebab-case` | `-chirho` | `/api-chirho/feedback-chirho/` |
| **Database Tables/Columns** | `snake_case` | `_chirho` | `verses_chirho`, `book_name_chirho` |
| **File Names** | Match language convention | `_chirho` or `-chirho` | `auth_chirho.ts`, `FeedbackBubbleChirho.svelte` |

### 2.2 Framework Directories (No Suffix)

Directories required by frameworks keep their standard names:

| Framework | Required Directories |
|-----------|---------------------|
| SvelteKit | `src/`, `routes/`, `lib/`, `static/` |
| Cloudflare | `.wrangler/`, `functions/` |

**Principle:** Suffix what *we* create. Leave framework conventions alone.

### 2.3 The Divine Header

Every project file must include John 3:16 at the top:

```javascript
// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16
```
```html
<!-- For God so loved the world, that He gave His only begotten Son,
     that all who believe in Him should not perish but have everlasting life. — John 3:16 -->
```
```yaml
# For God so loved the world, that He gave His only begotten Son,
# that all who believe in Him should not perish but have everlasting life. — John 3:16
```

---

## 3. Source of Truth & Synchronization

### 3.1 The Hierarchy

The **Spec** (`spec_chirho/`) is the ultimate source of truth when it exists. All other artifacts derive from it.

```
spec_chirho/                          <- ULTIMATE SOURCE OF TRUTH
    |
    +-- 01_DATA_MODEL_CHIRHO/         <- Data definitions (YAML files)
    |       | generates
    |   +-- schema.ts (Drizzle)
    |   +-- types_chirho/*.ts
    |   +-- *.HUMAN_CHIRHO.md (readable docs)
    |
    +-- 03_ROUTES_CHIRHO.md           <- Route definitions
    |       | generates
    |   +-- src/routes/**
    |
    +-- 04_API_CHIRHO.md              <- API contracts (must align with 03)
            | generates
        +-- openapi_chirho.yaml
```

### 3.2 File Authority Classification

| Category | Description | Examples | Edit Policy |
|----------|-------------|----------|-------------|
| **Source** | Canonical definitions | `spec_chirho/**/*.yaml`, `spec_chirho/**/*.md` | Edit here first |
| **Generated** | Derived from Source | `schema.ts`, `types_chirho/*.ts`, `*.HUMAN_CHIRHO.md` | Do not edit directly |
| **Bidirectional** | Can flow either direction | `src/routes/**`, implementation code | See sync rules |

### 3.3 The Cardinal Rules

1. **Never silently diverge.** If Spec and Code don't match, stop and resolve.
2. **Spec changes require approval.** Always show changes before implementing.
3. **Human edits are respected.** If a human modified code directly, ask before overwriting.
4. **When in doubt, ask.**

---

## 4. Feature Status (Honest Assessment)

### Status Indicators

| Symbol | Meaning | Description |
|--------|---------|-------------|
| COMPLETE | Complete | Fully implemented and tested |
| IN-PROGRESS | In Progress | Scaffolded, work ongoing |
| PLANNED | Planned | In spec only, no code yet |

### Current Feature Status

**COMPLETE - Deployed to bible.systems:**
- Landing page with project description
- Feedback bubble component (bug reports, feature requests, general feedback)
- Feedback API endpoint (`/api-chirho/feedback-chirho`)
- Legal pages (Privacy Policy, Terms of Service, Accessibility, Contact)
- Feature roadmap page (`/features-fe`)
- Security headers (HSTS, CSP, X-Frame-Options, etc.)
- Cloudflare Workers deployment
- GitHub repository

**PLANNED - Not Yet Implemented:**
- Multiple Bible Versions (KJV, ESV, NIV, NASB, etc.)
- Cross-Reference System with Treasury of Scripture Knowledge
- Original Language Tools (Hebrew, Greek, Aramaic)
- Interlinear display and morphological parsing
- Commentary Integration (Matthew Henry, Gill, etc.)
- Word Studies with lexicons and concordances
- REST API for Bible data
- MCP Server for AI integration
- Desktop App via Tauri
- User accounts and authentication
- D1 database with Bible text

---

## 5. Tech Stack

### Currently Active

| Technology | Purpose | Status |
|------------|---------|--------|
| SvelteKit 2 | Web framework | ACTIVE |
| Svelte 5 | UI framework (runes) | ACTIVE |
| Tailwind CSS v4 | Styling | ACTIVE |
| Cloudflare Workers | Hosting/serverless | ACTIVE |
| Bun | Package manager & runtime | ACTIVE |

### Planned

| Technology | Purpose | Status |
|------------|---------|--------|
| D1 | SQLite database for Bible text | PLANNED |
| Drizzle ORM | Database ORM | PLANNED |
| Tauri | Desktop application | PLANNED |

---

## 6. Directory Structure

```
bible.systems-chirho/
+-- AGENTS.md                    # AI instructions (this file)
+-- AGENTS-MASTER-CHIRHO.md      # Master template for all projects
+-- wrangler.toml                # Cloudflare Worker config
+-- src/
|   +-- routes/
|   |   +-- +page.svelte         # Home/landing page
|   |   +-- +layout.svelte       # Global layout with header/footer
|   |   +-- features-fe/         # Feature roadmap
|   |   +-- privacy-fe/          # Privacy policy
|   |   +-- terms-fe/            # Terms of service
|   |   +-- contact-fe/          # Contact page
|   |   +-- accessibility-fe/    # Accessibility statement
|   |   +-- api-chirho/
|   |       +-- feedback-chirho/ # Feedback API endpoint
|   +-- lib/
|   |   +-- components/
|   |       +-- FeedbackBubbleChirho.svelte
|   +-- hooks.server.ts          # Security headers middleware
|   +-- app.css                  # Global styles
+-- static/                      # Static assets
+-- .env                         # Environment variables (git ignored)
```

---

## 7. API Endpoints

### Currently Implemented

| Endpoint | Methods | Purpose | Status |
|----------|---------|---------|--------|
| `/api-chirho/feedback-chirho` | POST, GET | Submit and retrieve feedback | COMPLETE |

### Planned API Endpoints

| Endpoint | Methods | Purpose | Status |
|----------|---------|---------|--------|
| `/api-chirho/bible-chirho/:version/:book/:chapter` | GET | Get chapter text | PLANNED |
| `/api-chirho/bible-chirho/:version/:book/:chapter/:verse` | GET | Get verse text | PLANNED |
| `/api-chirho/search-chirho` | GET | Search Bible text | PLANNED |
| `/api-chirho/crossref-chirho/:book/:chapter/:verse` | GET | Get cross-references | PLANNED |
| `/api-chirho/lexicon-chirho/:strongs` | GET | Get lexicon entry | PLANNED |
| `/api-chirho/word-chirho/:word` | GET | Get word study data | PLANNED |

---

## 8. MCP Server (Planned)

For AI assistants like Claude to access Bible data:

| Tool | Purpose | Status |
|------|---------|--------|
| `bible_lookup` | Get verse text | PLANNED |
| `bible_search` | Search for passages | PLANNED |
| `cross_reference` | Find related verses | PLANNED |
| `word_study` | Get word definitions and usage | PLANNED |

---

## 9. Data Sources (Open/Public Domain)

When implemented, the following public domain sources will be used:

- KJV, ASV, WEB (public domain Bible translations)
- Strong's Concordance
- Treasury of Scripture Knowledge
- Open-source commentaries
- Hebrew/Greek lexicons

---

## 10. Git & Authorship Protocol

### Commit Message Format

```bash
git commit --author="User Name [AI-CHIRHO] <user@email.com>" -m "feat(scope): description

Assisted-By: Claude <noreply@anthropic.com>
JESUS CHRIST IS LORD"
```

The `[AI-CHIRHO]` marker enables programmatic detection of AI-assisted commits.

### Authority Rules

| Situation | Authority | Action |
|-----------|-----------|--------|
| Uncommitted changes exist | Unknown | ASK human |
| Last commit: `[AI-CHIRHO]` | Spec | Update code from spec |
| Last commit: Human | Code | ASK: "Update spec from code?" |
| Current session: AI just modified | Spec | Can auto-update code |
| Unclear | Unknown | ASK human |

---

## 11. Commands

```bash
bun install                    # Install dependencies
bun run dev                    # Start dev server
bun run build                  # Build for production
bun run preview                # Preview production build
bunx wrangler deploy           # Deploy to Cloudflare Workers
```

---

## 12. Environment Variables

Required in `.env` (git ignored):

```env
# Currently no required env vars for basic operation
# Future planned:
# DATABASE_URL_CHIRHO=
# STRIPE_KEY_CHIRHO=
```

---

## 13. Quick Reference

### Naming Summary

| What | How | Example |
|------|-----|---------|
| Our variables | `camelCaseChirho` | `verseTextChirho` |
| Our functions | `camelCaseChirho` | `fetchBibleChirho()` |
| Our types/classes | `PascalCaseChirho` | `VerseChirho` |
| Our constants | `SCREAMING_SNAKE_CHIRHO` | `MAX_VERSES_CHIRHO` |
| Our routes | `kebab-case-chirho` or `-fe` | `/api-chirho/`, `/features-fe/` |
| Our DB tables | `snake_case_chirho` | `verses_chirho` |
| Framework dirs | As required | `src/`, `routes/`, `lib/` |

### Workflow

```
1. Discuss feature with human
2. Update spec_chirho/ (if exists)
3. Get human approval
4. Implement routes/components
5. Test locally
6. Deploy with: bunx wrangler deploy
7. Push to GitHub: git push github_chirho main_chirho
8. Mark feature status honestly
```

---

> *"For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast."* — Ephesians 2:8-9

> *"Whatever you do, work at it with all your heart, as working for the Lord, not for human masters."* — Colossians 3:23

---

**JESUS CHRIST IS LORD**
