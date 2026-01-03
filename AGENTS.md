# For God so loved the world, that He gave His only begotten Son, that all who believe in Him should not perish but have everlasting life. — John 3:16

# Bible.Systems - AI Agent Instructions (v2.0)

> **The Gospel:** Jesus Christ, the Son of God, died for our sins, was buried, and rose again on the third day according to the Scriptures. Whoever believes in Him shall not perish but have eternal life. (1 Corinthians 15:3-4, John 3:16)

> *"Whatever you do, work at it with all your heart, as working for the Lord."* — Colossians 3:23

---

## License

This work is licensed under the **MIT License**.

**Part of [FaithStack](https://stack.faith)** - the ecosystem of Christ-centered technology.

---

## 1. Prime Directive

You operate as a **spec-driven AI agent**. Your core responsibility involves implementing exactly what specifications require—no more, no less.

**Critical Rules:**
- Read `spec_chirho/` before writing code
- Never assume; ask if unclear
- Use `_chirho`, `-chirho`, or `Chirho` suffixes for ALL identifiers
- Use `bun` and `bunx` exclusively—**NEVER** `npm`, `npx`, `yarn`, `pnpm`
- Match existing code patterns and style
- Uncommitted changes require human confirmation
- Never place API keys in `wrangler.toml` or source code
- Use latest wrangler and adapter-cloudflare (NOT pages)

---

## 2. Project Overview

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

## 3. Comprehensive Identifier Suffixing

**CRITICAL:** Every identifier we create must include the chirho suffix in appropriate case.

### 3.1 Complete Suffix Rules

| Type | Case Style | Suffix | Example |
|------|------------|--------|---------|
| Variables/Functions/Properties/Parameters | `camelCase` | `Chirho` | `userDataChirho`, `fetchVersesChirho()` |
| Classes/Components/Types/Interfaces | `PascalCase` | `Chirho` | `VerseDisplayChirho`, `FeedbackBubbleChirho` |
| Constants/Env Vars | `SCREAMING_SNAKE` | `_CHIRHO` | `API_KEY_CHIRHO`, `MAX_VERSES_CHIRHO` |
| Directories (project-created) | `kebab-case` | `-chirho` | `spec_chirho/`, `tests-e2e-chirho/` |
| Files | `kebab-case` | `-chirho` | `validation-chirho.ts`, `bible-kjv-chirho.ts` |
| Web Routes (public pages) | `kebab-case` | `-fe` | `/privacy-fe`, `/features-fe` |
| API Endpoints | `kebab-case` | `-chirho` | `/api-chirho/feedback-chirho` |
| Database Tables/Columns | `snake_case` | `_chirho` | `verses_chirho`, `book_name_chirho` |
| CSS Classes | `kebab-case` | `-chirho` | `.hero-chirho`, `.button-chirho` |
| package.json Scripts | `kebab-case` | `-chirho` | `test-chirho`, `deploy-chirho` |
| KV Keys | `kebab-case:kebab-case` | `-chirho` | `feedback-chirho:uuid-chirho` |
| JSON API Response Props | `camelCase` | `Chirho` | `successChirho`, `dataChirho` |
| R2 Buckets | `kebab-case` | `-chirho` | `audit-logs-chirho` |
| Wrangler Bindings | `SCREAMING_SNAKE` | `_CHIRHO` | `DB_CHIRHO`, `FEEDBACK_KV_CHIRHO` |

### 3.2 Example Code

```typescript
// ✅ CORRECT - All identifiers properly suffixed

interface VerseChirho {
  idChirho: string;
  bookChirho: string;
  chapterChirho: number;
  verseChirho: number;
  textChirho: string;
}

const MAX_VERSES_CHIRHO = 176;

async function fetchVersesChirho(bookIdChirho: string): Promise<VerseChirho[]> {
  const versesChirho: VerseChirho[] = [];

  try {
    const responseChirho = await fetch(`/api-chirho/bible-chirho/${bookIdChirho}`);
    const dataChirho = await responseChirho.json();

    for (const verseChirho of dataChirho.versesChirho) {
      versesChirho.push(verseChirho);
    }

    return versesChirho.filter((vChirho) => vChirho.textChirho !== null);
  } catch (errorChirho) {
    console.error('Failed:', errorChirho);
    throw errorChirho;
  }
}
```

### 3.3 What NOT to Suffix

- Framework files: `+page.svelte`, `+server.ts`, `vite.config.ts`, `package.json`
- Framework directories: `src/`, `routes/`, `lib/`, `static/`, `node_modules/`
- Third-party imports: `import { redirect } from '@sveltejs/kit'`
- Framework functions: `json()`, `error()`, `redirect()`, `fetch()`
- Node/Bun globals: `console`, `process`, `crypto`, `Request`, `Response`
- HTML attributes: `class`, `id`, `href`, `src` (but values can include `-chirho`)

### 3.4 The Divine Header

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

## 4. Secrets Management

### 4.1 Never Put Secrets In:
- `wrangler.toml`
- Source code
- Git-tracked files
- Comments or documentation

### 4.2 Proper Secret Storage

**Local development (.env, git-ignored):**
```bash
TURNSTILE_SECRET_KEY_CHIRHO=1x0000000000000000000000000000000AA
# Future:
# STRIPE_SECRET_KEY_CHIRHO=sk_live_...
# DATABASE_URL_CHIRHO=...
```

**Production (via wrangler):**
```bash
bunx wrangler secret put TURNSTILE_SECRET_KEY_CHIRHO
bunx wrangler secret put STRIPE_SECRET_KEY_CHIRHO
```

**Documentation (.env.example, git-tracked, no values):**
```bash
TURNSTILE_SECRET_KEY_CHIRHO=
STRIPE_SECRET_KEY_CHIRHO=
```

### 4.3 Required .gitignore Entries
```
.env
.env.local
.env.*
*.env
.dev.vars
```

---

## 5. Source of Truth & Synchronization

### 5.1 The Hierarchy

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

### 5.2 File Authority Classification

| Category | Description | Examples | Edit Policy |
|----------|-------------|----------|-------------|
| **Source** | Canonical definitions | `spec_chirho/**/*.yaml`, `spec_chirho/**/*.md` | Edit here first |
| **Generated** | Derived from Source | `schema.ts`, `types_chirho/*.ts`, `*.HUMAN_CHIRHO.md` | Do not edit directly |
| **Bidirectional** | Can flow either direction | `src/routes/**`, implementation code | See sync rules |

### 5.3 The Cardinal Rules

1. **Never silently diverge.** If Spec and Code don't match, stop and resolve.
2. **Spec changes require approval.** Always show changes before implementing.
3. **Human edits are respected.** If a human modified code directly, ask before overwriting.
4. **When in doubt, ask.**

---

## 6. Required Footer

Every page footer must include:

```html
<footer class="footer-chirho">
  <nav class="footer-links-chirho">
    <a href="/privacy-fe">Privacy</a>
    <a href="/terms-fe">Terms</a>
    <a href="/accessibility-fe">Accessibility</a>
    <a href="/contact-fe">Contact</a>
  </nav>

  <p class="footer-faith-chirho">
    <a href="https://perffection.com">fe</a> |
    <a href="https://loveJesus.software">loveJesus</a> |
    <a href="http://jesusfilm.org/watch/jesus.html/english.html">☧</a>
  </p>

  <p class="footer-lord-chirho">JESUS CHRIST IS LORD</p>
</footer>
```

---

## 7. Design Guidelines

### 7.1 Avoid Overused Patterns

**DO NOT** use the tired, overused "left-aligned emoji followed by text" panel layout:

```html
<!-- ❌ AVOID THIS - Generic, overused, lazy -->
<div class="feature-card">
  <span class="emoji">📖</span>
  <h3>Read the Bible</h3>
  <p>Access multiple translations...</p>
</div>

<div class="feature-card">
  <span class="emoji">🔍</span>
  <h3>Search Scripture</h3>
  <p>Find any verse...</p>
</div>
```

This pattern is seen on every SaaS landing page and lacks originality.

### 7.2 Be Original & Fitting

Design should reflect the reverence and beauty befitting Scripture:

- **Use typography thoughtfully** — Consider serif fonts for Scripture text, clean sans-serif for UI
- **Embrace whitespace** — Let the Word breathe; don't crowd the text
- **Subtle, meaningful imagery** — Use MCP image generation tools (Imagen) for unique, project-specific visuals
- **CSS artistry** — Gradients, shadows, and animations that feel timeless rather than trendy
- **Iconography with purpose** — If using icons, prefer custom SVGs or meaningful symbols (☧, †) over generic emoji

### 7.3 MCP Tools for Visual Assets

Use available MCP image generation tools for original artwork:

```typescript
// Generate unique header images, backgrounds, or illustrations
// using mcp__imagen__imagen_t2i or similar tools

// Example: Generate a reverent, artistic background
// Prompt: "Ancient manuscript texture, warm parchment tones,
//          subtle Hebrew lettering watermark, elegant and timeless"
```

### 7.4 CSS Techniques to Embrace

```css
/* ✅ GOOD - Thoughtful, original styling */
.verse-text-chirho {
  font-family: 'Crimson Text', Georgia, serif;
  font-size: 1.25rem;
  line-height: 1.8;
  letter-spacing: 0.01em;
  color: var(--text-scripture-chirho);
}

.chapter-header-chirho {
  background: linear-gradient(
    135deg,
    var(--gold-warm-chirho) 0%,
    var(--gold-deep-chirho) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Subtle, reverent animations */
.verse-highlight-chirho {
  animation: gentle-glow-chirho 2s ease-in-out infinite alternate;
}
```

### 7.5 Design Principles for Bible.Systems

| Principle | Application |
|-----------|-------------|
| **Reverence** | Design choices honor the sacred nature of Scripture |
| **Clarity** | Nothing distracts from reading God's Word |
| **Timelessness** | Avoid trendy patterns that will look dated |
| **Accessibility** | High contrast, readable fonts, keyboard navigation |
| **Originality** | Stand apart from generic SaaS/startup aesthetics |

---

## 8. Feature Status (Honest Assessment)

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
- Feedback API endpoint (`/api-chirho/feedback-chirho`) with Turnstile CAPTCHA
- Bible reader with KJV data (Genesis 1-3, Psalms 1/23/119, Proverbs 3, Matthew 5, John 1/3, Romans 8)
- Bible API endpoints (`/api-chirho/bible-chirho/`)
- Verse copying and social sharing (Twitter, Facebook, Email)
- Keyboard navigation (arrow keys for chapters)
- Legal pages (Privacy Policy, Terms of Service, Accessibility, Contact)
- Feature roadmap page (`/features-fe`)
- Security headers (HSTS, CSP, X-Frame-Options, etc.)
- Cloudflare Workers deployment
- GitHub repository
- Unit tests (Vitest) and E2E tests (Playwright)

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

## 9. Tech Stack

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

## 10. Directory Structure

```
bible.systems-chirho/
+-- CLAUDE.md                    # Points to @AGENTS.md
+-- AGENTS.md                    # AI instructions (this file)
+-- .env                         # Secrets (git-ignored)
+-- .env.example                 # Template (git-tracked)
+-- wrangler.toml                # Cloudflare Worker config (NO SECRETS)
+-- vitest.config.ts             # Unit test configuration
+-- playwright.config.ts         # E2E test configuration
|
+-- spec_chirho/                 # THE SOURCE OF TRUTH
|   +-- 01-testing-chirho.md     # Testing guide
|   +-- 02-feedback-chirho.md    # Feedback systems
|   +-- 03-best-practices-chirho.md  # Best practices
|
+-- src/
|   +-- routes/
|   |   +-- +page.svelte         # Home/landing page
|   |   +-- +layout.svelte       # Global layout with header/footer
|   |   +-- read-chirho/         # Bible reader pages
|   |   +-- features-fe/         # Feature roadmap
|   |   +-- privacy-fe/          # Privacy policy
|   |   +-- terms-fe/            # Terms of service
|   |   +-- contact-fe/          # Contact page
|   |   +-- accessibility-fe/    # Accessibility statement
|   |   +-- api-chirho/
|   |       +-- feedback-chirho/ # Feedback API endpoint
|   |       +-- bible-chirho/    # Bible API endpoints
|   +-- lib/
|   |   +-- components/
|   |   |   +-- FeedbackBubbleChirho.svelte
|   |   +-- data_chirho/
|   |   |   +-- bible_kjv_chirho.ts      # KJV Bible data
|   |   |   +-- bible_kjv_chirho.test.ts # Bible data tests
|   |   +-- utils_chirho/
|   |       +-- validation_chirho.ts      # Validation utilities
|   |       +-- validation_chirho.test.ts # Validation tests
|   +-- hooks.server.ts          # Security headers middleware
|   +-- app.css                  # Global styles
+-- tests-e2e-chirho/            # E2E tests (Playwright)
|   +-- bible-reader.e2e.ts      # Bible reader E2E tests
|   +-- feedback.e2e.ts          # Feedback system E2E tests
+-- static/                      # Static assets
+-- .env                         # Environment variables (git ignored)
```

---

## 11. API Endpoints

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

## 12. MCP Server (Planned)

For AI assistants like Claude to access Bible data:

| Tool | Purpose | Status |
|------|---------|--------|
| `bible_lookup` | Get verse text | PLANNED |
| `bible_search` | Search for passages | PLANNED |
| `cross_reference` | Find related verses | PLANNED |
| `word_study` | Get word definitions and usage | PLANNED |

---

## 13. Data Sources (Open/Public Domain)

When implemented, the following public domain sources will be used:

- KJV, ASV, WEB (public domain Bible translations)
- Strong's Concordance
- Treasury of Scripture Knowledge
- Open-source commentaries
- Hebrew/Greek lexicons

---

## 14. Testing Strategy

### 14.1 Philosophy

- **Test before deploy**: Never deploy untested code
- **Fast feedback**: All tests must complete in under 30 seconds
- **Critical paths first**: Focus on core API handlers and user flows
- **Headless only**: E2E tests run headless for CI compatibility

### 14.2 Test Tools

| Tool | Purpose | Command |
|------|---------|---------|
| Vitest | Unit tests | `bun run test-chirho` |
| Playwright | E2E tests (headless) | `bun run test-e2e-chirho` |

### 14.3 Test File Conventions

| Type | Location | Naming | Example |
|------|----------|--------|---------|
| Unit tests | `src/**/*.test.ts` | `*.test.ts` | `validation_chirho.test.ts` |
| E2E tests | `tests-e2e-chirho/` | `*.e2e.ts` | `bible-reader.e2e.ts` |

### 14.4 What to Test

**Unit Tests (Vitest):**
- Validation utilities
- Data transformation functions
- Bible data integrity
- API request/response parsing

**E2E Tests (Playwright):**
- Critical user flows (Bible reading, feedback submission)
- API endpoint responses
- Navigation and routing
- Form validation and error states

### 14.5 Test Commands

```bash
bun run test-chirho          # Run unit tests once
bun run test-watch-chirho    # Run unit tests in watch mode
bun run test-e2e-chirho      # Run E2E tests (headless)
bun run test-all-chirho      # Run all tests
bun run deploy-chirho        # Test + build + deploy
```

### 14.6 Writing Tests

```typescript
// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

import { describe, it, expect } from 'vitest';

describe('featureNameChirho', () => {
  it('should do expected behavior', () => {
    const resultChirho = functionChirho();
    expect(resultChirho).toBe(expectedChirho);
  });
});
```

### 14.7 CI/CD Integration

The `deploy-chirho` script enforces test-before-deploy:

```bash
bun run deploy-chirho
# Equivalent to: bun run test-chirho && bun run build && bunx wrangler deploy
```

**Never bypass tests for deployment.**

---

## 15. Git & Authorship Protocol

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

## 16. Commands

```bash
# Development
bun install                    # Install dependencies
bun run dev                    # Start dev server
bun run build                  # Build for production
bun run preview                # Preview production build

# Testing
bun run test-chirho            # Run unit tests
bun run test-watch-chirho      # Run unit tests (watch mode)
bun run test-e2e-chirho        # Run E2E tests (headless)
bun run test-all-chirho        # Run all tests

# Deployment
bun run deploy-chirho          # Test + build + deploy (recommended)
bunx wrangler deploy           # Deploy only (skips tests)
```

---

## 17. Environment Variables

Required in `.env` (git ignored):

```env
# Currently no required env vars for basic operation
# Future planned:
# DATABASE_URL_CHIRHO=
# STRIPE_KEY_CHIRHO=
```

---

## 18. Quick Reference

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

## 19. Implementation Checklist

### Setup
- [x] CLAUDE.md points to @AGENTS.md
- [x] AGENTS.md customized from master
- [x] .env copied (git-ignored)
- [x] .gitignore includes .env files
- [x] spec_chirho/ directory created

### Secrets
- [x] NO secrets in wrangler.toml
- [x] Turnstile secret via `wrangler secret put`
- [ ] Stripe secrets configured (when needed)

### Identifiers
- [x] Variables use `Chirho` suffix
- [x] Functions use `Chirho` suffix
- [x] Constants use `_CHIRHO` suffix
- [x] Routes use `-chirho` or `-fe` suffix
- [x] package.json scripts use `-chirho` suffix

### Features
- [x] Feedback bubble on every page
- [x] Turnstile protection on forms
- [x] Footer with fe | loveJesus | ☧ links
- [x] Privacy/Terms/Contact/Accessibility pages
- [x] Bible reader with KJV data

### Testing
- [x] Vitest for unit tests
- [x] Playwright for E2E tests (headless)
- [x] deploy-chirho runs tests first
- [x] All tests pass in <30 seconds

### Deployment
- [x] Using adapter-cloudflare (NOT pages)
- [x] bunx wrangler deploy works
- [x] Security headers configured

---

> *"For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast."* — Ephesians 2:8-9

> *"Whatever you do, work at it with all your heart, as working for the Lord, not for human masters."* — Colossians 3:23

> *"And whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through him."* — Colossians 3:17

---

**JESUS CHRIST IS LORD**
