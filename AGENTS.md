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
| API Endpoints (paths) | `kebab-case` | `-chirho` | `/api-chirho/feedback-chirho` |
| **API Route Parameters** | `kebab-case` | `_chirho` | `:version_chirho`, `:book_chirho`, `:chapter_chirho` |
| **All Route Segments** | `kebab-case` | `-chirho` | `/search-chirho`, `/lexicon-chirho` |
| Database Tables/Columns | `snake_case` | `_chirho` | `verses_chirho`, `book_name_chirho` |
| CSS Classes | `kebab-case` | `-chirho` | `.hero-chirho`, `.button-chirho` |
| package.json Scripts | `kebab-case` | `-chirho` | `test-chirho`, `deploy-chirho` |
| KV Keys | `kebab-case:kebab-case` | `-chirho` | `feedback-chirho:uuid-chirho` |
| JSON API Response Props | `camelCase` | `Chirho` | `successChirho`, `dataChirho` |
| R2 Buckets | `kebab-case` | `-chirho` | `audit-logs-chirho` |
| Wrangler Bindings | `SCREAMING_SNAKE` | `_CHIRHO` | `DB_CHIRHO`, `FEEDBACK_KV_CHIRHO` |
| D1 Database Names | `kebab-case` | `-chirho` | `bible-res-00-chirho`, `app-chirho` |

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

## 8. Image Format Guidelines

### 8.1 Convert Generated Images to JPG

When using MCP image generation tools, convert outputs to JPG for web delivery:

```typescript
// Convert generated images to optimized JPG
const imageBufferChirho = await generateImageChirho(promptChirho);
const jpgBufferChirho = await convertToJpgChirho(imageBufferChirho, 85); // 85% quality
```

### 8.2 Image Requirements

| Use Case | Format | Max Size | Notes |
|----------|--------|----------|-------|
| Photos/Backgrounds | JPG | 200KB | Use compression |
| Screenshots | PNG | 500KB | When transparency needed |
| Icons/Logos | SVG | 10KB | Prefer vectors |
| OG/Social Images | JPG | 100KB | 1200x630px minimum |

### 8.3 Lazy Loading

Always use lazy loading for images below the fold:

```html
<img
  src="/images-chirho/verse-art-chirho.jpg"
  alt="Artistic rendering of Scripture"
  loading="lazy"
  decoding="async"
  width="800"
  height="600"
/>
```

---

## 9. Email Setup (2SMTP + Mailu)

### 9.1 When Implemented

Email functionality uses 2SMTP for sending:

```typescript
// Email addresses use .fe suffix pattern
const fromEmailChirho = 'noreply.fe@bible.systems';
const supportEmailChirho = 'support.fe@bible.systems';
```

### 9.2 2SMTP API Pattern

```typescript
async function sendEmailChirho(
  toChirho: string[],
  subjectChirho: string,
  bodyHtmlChirho: string
): Promise<boolean> {
  const responseChirho = await fetch('https://2smtp.com/api_fe/send_email_fe', {
    method: 'POST',
    headers: {
      'X-API-Key': env.PROJECT_2SMTP_API_KEY_CHIRHO,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      to_chirho: toChirho,
      subject_chirho: subjectChirho,
      body_html_chirho: bodyHtmlChirho,
      reply_to_chirho: supportEmailChirho
    })
  });
  return responseChirho.ok;
}
```

### 9.3 DNS Records Required

| Record | Purpose |
|--------|---------|
| SPF | `v=spf1 include:_spf.mailer-aleluya.xjes.us ~all` |
| DKIM | Add key from Mailu admin panel |
| DMARC | `v=DMARC1; p=quarantine; rua=mailto:dmarc.fe@bible.systems` |

---

## 10. Stripe Integration (Critical Notes)

### 10.1 CRITICAL: Use Async Webhook Verification

**Cloudflare Workers use SubtleCrypto which is async-only.** The synchronous method WILL FAIL:

```typescript
// ❌ WRONG - This fails on Cloudflare Workers
const eventChirho = stripe.webhooks.constructEvent(
  payloadChirho,
  signatureChirho,
  webhookSecretChirho
);

// ✅ CORRECT - Use async version
const eventChirho = await stripe.webhooks.constructEventAsync(
  payloadChirho,
  signatureChirho,
  webhookSecretChirho
);
```

### 10.2 Webhook Handler Pattern

```typescript
// src/routes/api-chirho/stripe-webhook-chirho/+server.ts
export const POST: RequestHandler = async ({ request, platform }) => {
  const payloadChirho = await request.text();
  const signatureChirho = request.headers.get('stripe-signature');

  let eventChirho: Stripe.Event;
  try {
    // ✅ MUST use constructEventAsync on Workers
    eventChirho = await stripeChirho.webhooks.constructEventAsync(
      payloadChirho,
      signatureChirho,
      platform.env.STRIPE_WEBHOOK_SECRET_CHIRHO
    );
  } catch (errChirho) {
    throw error(400, 'Invalid signature');
  }

  switch (eventChirho.type) {
    case 'checkout.session.completed':
      await handleCheckoutCompleteChirho(eventChirho.data.object);
      break;
    // Handle other events...
  }

  return json({ receivedChirho: true });
};
```

---

## 11. Context Preservation (Zero-Context Resumability)

### 11.1 The Problem

AI agents lose context between sessions. Without preservation, every session starts from scratch.

### 11.2 The Solution: CURRENT_SPRINT_CHIRHO.md

Maintain a **living state document** that any agent can read to continue immediately:

```markdown
# CURRENT_SPRINT_CHIRHO.md

## Active Task
Implementing cross-reference system for Bible.Systems

## Status
- [x] Research Treasury of Scripture Knowledge format
- [x] Design database schema for cross-refs
- [ ] Create API endpoint /api-chirho/crossref-chirho
- [ ] Add UI component for displaying references

## Blockers
None currently

## Context
- TSK data is public domain
- Schema defined in spec_chirho/01-data-model-chirho/
- Target: 500ms response time for lookups

## Next Steps
1. Implement D1 migration for cross_refs_chirho table
2. Create server endpoint with caching
```

### 11.3 Rules

1. **Update as you work** — Keep the sprint file current
2. **Delete when done** — Remove completed context to avoid confusion
3. **Pull from gist** — Reference FaithStack Master Gist for patterns
4. **Be specific** — Include file paths, decisions made, blockers

### 11.4 Why This Matters

A developer (human or AI) can:
1. Clone the repo fresh
2. Read `AGENTS.md` (permanent rules)
3. Read `CURRENT_SPRINT_CHIRHO.md` (current state)
4. Continue immediately — no re-explaining needed

**The repository itself becomes the saved game state.**

---

## 12. Performance & Accessibility

### 12.1 Core Web Vitals Targets

| Metric | Target | Description |
|--------|--------|-------------|
| LCP | < 2.5s | Largest Contentful Paint |
| FID | < 100ms | First Input Delay |
| CLS | < 0.1 | Cumulative Layout Shift |
| TTFB | < 600ms | Time to First Byte |

### 12.2 Accessibility (WCAG 2.1 AA)

**Required:**
- Keyboard navigation for ALL interactions
- Color contrast ratio ≥ 4.5:1
- Alt text for all images
- ARIA labels on interactive elements
- Visible focus indicators
- Skip navigation link

**Testing:**
```bash
# Run Lighthouse accessibility audit
npx lighthouse https://bible.systems --only-categories=accessibility
```

### 12.3 Rate Limiting (When Implemented)

| Endpoint Type | Limit | Window |
|---------------|-------|--------|
| API reads | 100/min | Per IP |
| API writes | 30/min | Per IP |
| Auth attempts | 10/min | Per IP |
| Feedback | 5/min | Per IP |

---

## 13. wrangler.toml Configuration

### 13.1 Complete Example (NO SECRETS!)

```toml
name = "bible-systems-chirho"
main = ".svelte-kit/cloudflare/_worker.js"
compatibility_date = "2024-12-01"
compatibility_flags = ["nodejs_compat"]

# CRITICAL: Required for static assets
[assets]
directory = ".svelte-kit/cloudflare"
binding = "ASSETS"

# KV Namespaces
[[kv_namespaces]]
binding = "FEEDBACK_KV_CHIRHO"
id = "your-kv-id-here"

[[kv_namespaces]]
binding = "SESSIONS_KV_CHIRHO"
id = "your-sessions-kv-id"

# D1 Database (when implemented)
[[d1_databases]]
binding = "DB_CHIRHO"
database_name = "bible-systems-db-chirho"
database_id = "your-d1-id-here"

# R2 Buckets (when implemented)
[[r2_buckets]]
binding = "MEDIA_R2_CHIRHO"
bucket_name = "bible-systems-media-chirho"

# NEVER put secrets here - use:
# bunx wrangler secret put TURNSTILE_SECRET_KEY_CHIRHO
# bunx wrangler secret put STRIPE_SECRET_KEY_CHIRHO
```

### 13.2 Common Issues

| Issue | Solution |
|-------|----------|
| "No static assets to upload" | Add `[assets]` section |
| Assets 404 after deploy | Verify `directory` path |
| KV/D1 not available | Add bindings to wrangler.toml |
| Wrong deploy command | Use `wrangler deploy`, NOT `wrangler pages deploy` |

---

## 14. Database-Driven Content

### 14.1 Never Hardcode

**Testimonials, featured content, and dynamic text MUST come from database:**

```typescript
// ❌ WRONG - Hardcoded testimonials
const testimonialsChirho = [
  { name: 'John', text: 'Great app!' },
  { name: 'Mary', text: 'Love it!' }
];

// ✅ CORRECT - Database-driven
const testimonialsChirho = await db.select()
  .from(testimonialsTableChirho)
  .where(eq(approvedChirho, true))
  .limit(5);
```

### 14.2 Pre-Launch Pattern

Before you have real testimonials:

```html
<section class="testimonials-chirho">
  <p class="testimonials-placeholder-chirho">
    We're just getting started! Be among our first users
    and share your experience with Bible.Systems.
  </p>
</section>
```

### 14.3 D1 Size Guidelines

| Data Type | Storage | Notes |
|-----------|---------|-------|
| Small text (<512 bytes) | D1 directly | Normal columns |
| Large text (>512 bytes) | KV + D1 key | Store key reference |
| Files | R2 | Store R2 path in D1 |
| Analytics events | Pipelines → R2 | Long-term queryable |

**Keep D1 under 10GB** — use KV/R2 for large content.

---

## 14.4 Dynamic D1 Sharding Architecture for Bible Resources

Bible.Systems requires massive data storage (Bible texts, commentaries, lexicons, cross-references). D1 has a 10GB limit per database. We use a **dynamic allocation strategy** with a catalog database.

### Database Naming Convention

```
catalog-chirho                 Primary DB - tracks where each resource lives
bible-res-00-chirho           Resource shard 0
bible-res-01-chirho           Resource shard 1
...                           (start with 16, expand as needed)
app-chirho                    Application data (users, feedback, sessions)
```

### Dynamic Allocation Strategy

Instead of hash-based sharding, resources are placed in the **least-full database**:

```typescript
// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

// Catalog table tracks where each resource lives
interface ResourceLocationChirho {
  resourceIdChirho: string;           // "kjv", "tsk", "mhenry"
  shardIndexChirho: number;           // 0-15 (expandable)
  sizeEstimateChirho: number;         // Size in bytes
  createdAtChirho: Date;
}

// Find least-full shard for new resource
async function allocateResourceChirho(
  catalogDbChirho: D1Database,
  resourceIdChirho: string,
  estimatedSizeChirho: number
): Promise<number> {
  // Get current shard sizes
  const shardsChirho = await catalogDbChirho.prepare(`
    SELECT shard_index_chirho, SUM(size_estimate_chirho) as total_size_chirho
    FROM resource_locations_chirho
    GROUP BY shard_index_chirho
  `).all();

  // Find least-full shard under 8GB (leave 2GB buffer)
  const MAX_SHARD_SIZE_CHIRHO = 8 * 1024 * 1024 * 1024; // 8GB
  let targetShardChirho = 0;
  let minSizeChirho = Infinity;

  for (const shardChirho of shardsChirho.results) {
    if (shardChirho.total_size_chirho < minSizeChirho &&
        shardChirho.total_size_chirho + estimatedSizeChirho < MAX_SHARD_SIZE_CHIRHO) {
      minSizeChirho = shardChirho.total_size_chirho;
      targetShardChirho = shardChirho.shard_index_chirho;
    }
  }

  // If all shards too full, create new one (up to configured max)
  if (minSizeChirho + estimatedSizeChirho >= MAX_SHARD_SIZE_CHIRHO) {
    targetShardChirho = await createNewShardChirho();
  }

  // Record location in catalog
  await catalogDbChirho.prepare(`
    INSERT INTO resource_locations_chirho
    (resource_id_chirho, shard_index_chirho, size_estimate_chirho)
    VALUES (?, ?, ?)
  `).bind(resourceIdChirho, targetShardChirho, estimatedSizeChirho).run();

  return targetShardChirho;
}

// Look up where a resource lives
async function getResourceShardChirho(
  catalogDbChirho: D1Database,
  resourceIdChirho: string
): Promise<number> {
  const resultChirho = await catalogDbChirho.prepare(`
    SELECT shard_index_chirho FROM resource_locations_chirho
    WHERE resource_id_chirho = ?
  `).bind(resourceIdChirho).first();

  return resultChirho?.shard_index_chirho ?? 0;
}
```

### Catalog Database Schema

```sql
-- catalog-chirho database

-- Resource locations
CREATE TABLE resource_locations_chirho (
  resource_id_chirho TEXT PRIMARY KEY,  -- "kjv", "tsk", "mhenry:gen"
  shard_index_chirho INTEGER NOT NULL,
  size_estimate_chirho INTEGER NOT NULL,
  resource_type_chirho TEXT,            -- "bible", "crossref", "commentary", "lexicon"
  created_at_chirho TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Shard registry (for dynamic expansion)
CREATE TABLE shards_chirho (
  shard_index_chirho INTEGER PRIMARY KEY,
  database_name_chirho TEXT NOT NULL,
  binding_name_chirho TEXT NOT NULL,
  created_at_chirho TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status_chirho TEXT DEFAULT 'active'   -- 'active', 'full', 'maintenance'
);

-- Initial 16 shards
INSERT INTO shards_chirho (shard_index_chirho, database_name_chirho, binding_name_chirho) VALUES
  (0, 'bible-res-00-chirho', 'RES_00_CHIRHO'),
  (1, 'bible-res-01-chirho', 'RES_01_CHIRHO'),
  -- ... through 15
  (15, 'bible-res-0f-chirho', 'RES_0F_CHIRHO');
```

### Wrangler Configuration (Initial 16 Shards)

```toml
# wrangler.toml

# Catalog database (knows where everything is)
[[d1_databases]]
binding = "CATALOG_DB_CHIRHO"
database_name = "catalog-chirho"
database_id = "..."

# Resource shards (start with 16, add more as needed)
[[d1_databases]]
binding = "RES_00_CHIRHO"
database_name = "bible-res-00-chirho"
database_id = "..."

[[d1_databases]]
binding = "RES_01_CHIRHO"
database_name = "bible-res-01-chirho"
database_id = "..."

# ... through RES_0F_CHIRHO (16 total to start)

# Application database (separate from resources)
[[d1_databases]]
binding = "APP_DB_CHIRHO"
database_name = "app-chirho"
database_id = "..."
```

### Database Router

```typescript
// src/lib/db_chirho/router-chirho.ts

export async function getResourceDbChirho(
  envChirho: EnvBindingsChirho,
  resourceIdChirho: string
): Promise<D1Database> {
  // Look up shard in catalog
  const shardIndexChirho = await getResourceShardChirho(
    envChirho.CATALOG_DB_CHIRHO,
    resourceIdChirho
  );

  // Get binding name for shard
  const bindingNameChirho = `RES_${shardIndexChirho.toString(16).toUpperCase().padStart(2, '0')}_CHIRHO`;

  return envChirho[bindingNameChirho];
}
```

### Capacity Planning

| Content Type | Estimated Size | Typical Shard |
|--------------|----------------|---------------|
| Full KJV text | ~4.5 MB | Any available |
| Bible version (avg) | ~5 MB | Any available |
| TSK cross-references | ~50 MB | Dedicated shard |
| Strong's + lexicons | ~100 MB | Dedicated shard |
| Commentary (avg) | ~10 MB | Any available |

**Starting with 16 shards = 160 GB capacity. Expand by adding more shards as needed.**

---

## 15. SWORD/Diatheke Integration

Bible.Systems uses [SWORD Project](https://crosswire.org/sword/) tools for accessing Bible modules.

### 15.1 SWORD Tools

| Tool | Purpose | Usage |
|------|---------|-------|
| `installmgr` | Download/manage SWORD modules | `installmgr -sc` (list sources) |
| `diatheke` | Query SWORD modules | `diatheke -b KJV -k "Gen 1:1"` |

### 15.2 Available Module Types

| Type | Code | Examples |
|------|------|----------|
| Biblical Texts | `bible` | KJV, ASV, WEB, NASB |
| Commentaries | `comm` | MHC (Matthew Henry), Gill |
| Lexicons/Dictionaries | `lex` | StrongsHebrew, StrongsGreek |
| Daily Devotionals | `devotional` | Various |
| Generic Books | `book` | Various references |

### 15.3 Import Pipeline

```bash
# 1. Install SWORD and modules
brew install sword  # macOS
installmgr -init
installmgr -sc      # list sources
installmgr -r CrossWire  # refresh CrossWire
installmgr -ri CrossWire KJV  # install KJV

# 2. Export to JSON for import
diatheke -b KJV -f plain -k "Gen 1:1-31" > gen1.txt

# 3. Parse and import to D1 (custom script)
bun run import-sword-chirho --module KJV --book Gen
```

### 15.4 Diatheke Query Patterns

```bash
# Single verse
diatheke -b KJV -k "John 3:16"

# Verse range
diatheke -b KJV -k "Rom 8:28-39"

# Full chapter
diatheke -b KJV -k "Psalm 23"

# With Strong's numbers (if module supports)
diatheke -b KJV -o n -k "Gen 1:1"

# Search
diatheke -b KJV -s regex -k "love.*neighbor"

# Lexicon lookup
diatheke -b StrongsHebrew -k "H430"
```

### 15.5 Module Data Extraction Script

```typescript
// scripts-chirho/import-sword-chirho.ts
import { execSync } from 'child_process';

interface VerseDataChirho {
  bookChirho: string;
  chapterChirho: number;
  verseChirho: number;
  textChirho: string;
  strongsChirho?: string[];
}

function extractVerseChirho(
  moduleChirho: string,
  referenceChirho: string
): VerseDataChirho {
  const outputChirho = execSync(
    `diatheke -b ${moduleChirho} -f plain -k "${referenceChirho}"`,
    { encoding: 'utf-8' }
  );
  // Parse output and return structured data
  return parseVerseOutputChirho(outputChirho);
}
```

### 15.6 Public Domain Modules

| Module | Description | License |
|--------|-------------|---------|
| KJV | King James Version | Public Domain |
| KJVA | KJV with Apocrypha | Public Domain |
| ASV | American Standard Version | Public Domain |
| WEB | World English Bible | Public Domain |
| YLT | Young's Literal Translation | Public Domain |
| Darby | Darby Translation | Public Domain |
| StrongsHebrew | Strong's Hebrew Dictionary | Public Domain |
| StrongsGreek | Strong's Greek Dictionary | Public Domain |
| Robinson | Robinson's Morphological Analysis | Public Domain |
| MHC | Matthew Henry Concise | Public Domain |

---

## 16. FaithStack Master Gist Reference

### 16.1 The Master Gist

All FaithStack patterns live in the master gist:

**Gist ID:** `c93fbd61bc1dd6d898ef89c4b6981694`
**URL:** `https://gist.github.com/loveJesus/c93fbd61bc1dd6d898ef89c4b6981694`

### 16.2 Available Guides

| File | Purpose |
|------|---------|
| `00-README_CHIRHO.md` | Overview and quick start |
| `01-AGENTS_MASTER_CHIRHO.md` | Complete AI agent instructions |
| `02-TESTING_CHIRHO.md` | Solo dev testing strategy |
| `03-COMMUNITY_FEEDBACK_CHIRHO.md` | Feedback, tickets, Q&A systems |
| `04-DATABASE_AUDIT_CHIRHO.md` | Audit pipeline with Cloudflare Pipelines |
| `05-BEST_PRACTICES_CHIRHO.md` | Legal, security, compliance (55 sections) |

### 16.3 Usage Pattern

When implementing a new feature:
1. Check if the master gist has a relevant guide
2. Pull the pattern into `CURRENT_SPRINT_CHIRHO.md`
3. Implement following the pattern
4. Delete the context when feature is complete

---

## 17. Feature Status (Honest Assessment)

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

## 18. Deep Feature Parity (Logos/Blue Letter Bible Level)

Bible.Systems aims for feature parity with professional Bible study software like Logos, Blue Letter Bible, and Accordance. This section defines the comprehensive data model.

### 18.1 Word-Level Data Model

Every word in every Bible version is indexed with deep metadata:

```typescript
// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

interface WordInstanceChirho {
  idChirho: string;                    // Unique: "kjv:gen:1:1:1" (version:book:ch:vs:pos)
  positionChirho: number;              // Word position in verse (1-indexed)
  textChirho: string;                  // Surface form: "Beginning"
  lemmaChirho: string;                 // Dictionary form: "beginning"

  // Original language (when applicable)
  originalTextChirho?: string;         // Hebrew/Greek: "בְּרֵאשִׁית"
  transliterationChirho?: string;      // "bereshith"
  strongsChirho?: string;              // "H7225"

  // Morphology
  morphologyChirho?: MorphologyChirho;

  // Semantic domains
  louwNidaChirho?: string[];           // ["67.65", "68.1"] - Louw-Nida domains
  semanticFieldChirho?: string[];      // ["time", "beginning", "origin"]

  // Relationships
  verseIdChirho: string;               // "kjv:gen:1:1"
  sentenceIdChirho?: string;           // For sentence-level analysis
}

interface MorphologyChirho {
  partOfSpeechChirho: string;          // "noun", "verb", "adjective", etc.
  personChirho?: string;               // "1st", "2nd", "3rd"
  numberChirho?: string;               // "singular", "plural", "dual"
  genderChirho?: string;               // "masculine", "feminine", "neuter"
  tenseChirho?: string;                // Hebrew: "perfect", "imperfect"; Greek: "aorist", "present"
  voiceChirho?: string;                // "active", "passive", "middle"
  moodChirho?: string;                 // "indicative", "subjunctive", "imperative"
  stateChirho?: string;                // Hebrew: "construct", "absolute"
  caseChirho?: string;                 // Greek: "nominative", "genitive", etc.
  stemChirho?: string;                 // Hebrew: "qal", "piel", "hiphil", etc.
  suffixChirho?: string;               // Pronominal suffix
  prefixChirho?: string;               // Prefix particles
  robinsonCodeChirho?: string;         // Robinson's morphological code
}
```

### 18.2 Semantic Domain System (Louw-Nida)

Beyond Strong's numbers, track semantic domains for nuanced word meaning:

```typescript
interface SemanticDomainChirho {
  domainIdChirho: string;              // "67.65"
  domainNameChirho: string;            // "A Point of Time With Reference to Other Points of Time: Beginning"
  superdomainChirho: string;           // "67 Time"
  glossesChirho: string[];             // ["beginning", "origin", "first"]
  relatedDomainsChirho: string[];      // ["68.1", "67.66"]
}

// Example query: "Find all words meaning 'beginning' in semantic sense"
// Returns words across H7225, G746, G2075 that share domain 67.65
```

### 18.3 Cross-Reference Provenance

Track WHERE cross-references come from and WHO says what:

```typescript
interface CrossReferenceChirho {
  idChirho: string;
  fromVerseChirho: string;             // "gen:1:1"
  toVerseChirho: string;               // "jhn:1:1"

  // Provenance
  sourceChirho: CrossRefSourceChirho;  // Where did this ref come from?
  confidenceChirho: number;            // 0.0-1.0 confidence score
  typeChirho: CrossRefTypeChirho;      // Type of relationship

  // Attribution (who says this connection?)
  attributionChirho?: AttributionChirho[];
}

type CrossRefSourceChirho =
  | 'tsk_chirho'                       // Treasury of Scripture Knowledge
  | 'scripture_quotation_chirho'       // Direct quotation in text
  | 'allusion_chirho'                  // Literary allusion
  | 'parallel_chirho'                  // Parallel passage (Synoptics)
  | 'typology_chirho'                  // Type/antitype relationship
  | 'commentary_chirho'                // From commentary
  | 'user_chirho';                     // User-submitted

type CrossRefTypeChirho =
  | 'direct_quote_chirho'              // NT quoting OT
  | 'allusion_chirho'                  // Indirect reference
  | 'parallel_chirho'                  // Same event, different account
  | 'thematic_chirho'                  // Same theme
  | 'typological_chirho'               // Type/antitype
  | 'contrast_chirho';                 // Contrasting passages

interface AttributionChirho {
  authorChirho: string;                // "Matthew Henry", "John Gill"
  workChirho: string;                  // "Complete Commentary"
  citationChirho: string;              // Location in work
}
```

### 18.4 Book-to-Book References

Not just Scripture, but books quoting Scripture and each other:

```typescript
interface BookReferenceChirho {
  idChirho: string;
  sourceWorkChirho: string;            // "mhenry:gen:1" (commentary location)
  targetVerseChirho: string;           // "gen:1:1" (Bible verse)
  quotationChirho?: string;            // Quoted text
  analysisChirho?: string;             // Commentary text about the verse
}

// Enable queries like:
// "What does Matthew Henry say about Genesis 1:1?"
// "Which commentators discuss John 3:16?"
// "Find all references to Romans 8:28 across all resources"
```

### 18.5 Multi-Language Support

Bible.Systems supports multiple interface AND content languages:

```typescript
interface LanguageConfigChirho {
  codeChirho: string;                  // ISO 639-1: "en", "es", "zh"
  nameChirho: string;                  // "English", "Español", "中文"
  directionChirho: 'ltr' | 'rtl';      // Text direction
  fontFamilyChirho: string;            // Appropriate font stack
}

// Supported Bible languages (initial)
const BIBLE_LANGUAGES_CHIRHO = [
  'en',    // English (KJV, ASV, WEB)
  'he',    // Hebrew (WLC, BHS)
  'grc',   // Greek (Nestle-Aland, Textus Receptus, LXX)
  'la',    // Latin (Vulgate)
  'es',    // Spanish (RVR)
  'de',    // German (Luther)
  'fr',    // French (Segond)
  'zh',    // Chinese (CUV)
  'ar',    // Arabic
  'ko',    // Korean
  'ja',    // Japanese
] as const;
```

### 18.6 Database Schema for Deep Features

```sql
-- Word instances (every word in every version)
CREATE TABLE word_instances_chirho (
  id_chirho TEXT PRIMARY KEY,          -- "kjv:gen:1:1:1"
  verse_id_chirho TEXT NOT NULL,
  position_chirho INTEGER NOT NULL,
  text_chirho TEXT NOT NULL,
  lemma_chirho TEXT,
  original_text_chirho TEXT,
  transliteration_chirho TEXT,
  strongs_chirho TEXT,
  morphology_json_chirho TEXT,         -- JSON blob
  louw_nida_chirho TEXT,               -- Comma-separated domain IDs
  FOREIGN KEY (verse_id_chirho) REFERENCES verses_chirho(id_chirho)
);

-- Semantic domains (Louw-Nida)
CREATE TABLE semantic_domains_chirho (
  domain_id_chirho TEXT PRIMARY KEY,   -- "67.65"
  domain_name_chirho TEXT NOT NULL,
  superdomain_chirho TEXT,
  glosses_chirho TEXT,                 -- Comma-separated
  related_domains_chirho TEXT          -- Comma-separated
);

-- Cross-references with provenance
CREATE TABLE cross_refs_chirho (
  id_chirho TEXT PRIMARY KEY,
  from_verse_chirho TEXT NOT NULL,
  to_verse_chirho TEXT NOT NULL,
  source_chirho TEXT NOT NULL,         -- 'tsk', 'quotation', etc.
  type_chirho TEXT,
  confidence_chirho REAL DEFAULT 1.0,
  attribution_json_chirho TEXT,        -- JSON array of attributions
  FOREIGN KEY (from_verse_chirho) REFERENCES verses_chirho(id_chirho),
  FOREIGN KEY (to_verse_chirho) REFERENCES verses_chirho(id_chirho)
);

-- Book references (commentary → Scripture, etc.)
CREATE TABLE book_refs_chirho (
  id_chirho TEXT PRIMARY KEY,
  source_work_chirho TEXT NOT NULL,    -- "mhenry:gen:1"
  target_verse_chirho TEXT NOT NULL,
  quotation_chirho TEXT,
  analysis_chirho TEXT
);

-- Index for fast lookups
CREATE INDEX idx_word_strongs_chirho ON word_instances_chirho(strongs_chirho);
CREATE INDEX idx_word_lemma_chirho ON word_instances_chirho(lemma_chirho);
CREATE INDEX idx_xref_from_chirho ON cross_refs_chirho(from_verse_chirho);
CREATE INDEX idx_xref_to_chirho ON cross_refs_chirho(to_verse_chirho);
CREATE INDEX idx_bookref_verse_chirho ON book_refs_chirho(target_verse_chirho);
```

### 18.7 API Endpoints for Deep Features

| Endpoint | Purpose |
|----------|---------|
| `/api-chirho/word-chirho/:word_id_chirho` | Get full word data with morphology |
| `/api-chirho/word-chirho/strongs-chirho/:strongs_chirho` | All occurrences of Strong's number |
| `/api-chirho/word-chirho/lemma-chirho/:lemma_chirho` | All occurrences of lemma |
| `/api-chirho/word-chirho/domain-chirho/:domain_id_chirho` | Words by Louw-Nida domain |
| `/api-chirho/morphology-chirho/:verse_id_chirho` | Full morphological breakdown |
| `/api-chirho/crossref-chirho/:verse_id_chirho/provenance-chirho` | Cross-refs with sources |
| `/api-chirho/bookref-chirho/:verse_id_chirho` | All book references to verse |
| `/api-chirho/search-chirho/semantic-chirho` | Semantic domain search |

### 18.8 Advanced Morphological Search

Support Logos-level grammatical queries:

```typescript
// Query DSL for morphological search
interface MorphSearchQueryChirho {
  // Basic pattern matching
  patternChirho: MorphPatternChirho[];

  // Constraints
  withinChirho?: number;               // Within N words
  sameVerseChirho?: boolean;           // Must be in same verse
  sameClauseChirho?: boolean;          // Must be in same clause
  orderedChirho?: boolean;             // Must appear in order

  // Filters
  booksChirho?: string[];              // Limit to books
  versionsChirho?: string[];           // Limit to versions
}

interface MorphPatternChirho {
  // Text matching
  lemmaChirho?: string;                // Match lemma
  textChirho?: string;                 // Match surface form
  strongsChirho?: string;              // Match Strong's

  // Morphology matching (all optional, combine with AND)
  posChirho?: string;                  // Part of speech
  caseChirho?: string;                 // Grammatical case
  genderChirho?: string;               // Gender
  numberChirho?: string;               // Number
  personChirho?: string;               // Person
  tenseChirho?: string;                // Tense
  voiceChirho?: string;                // Voice
  moodChirho?: string;                 // Mood
  stemChirho?: string;                 // Hebrew stem

  // Position
  captureAsChirho?: string;            // Capture this match with a name
}

// Example queries:
// "Find θεός in genitive case followed by adjective within 3 words"
const queryChirho: MorphSearchQueryChirho = {
  patternChirho: [
    { lemmaChirho: 'θεός', caseChirho: 'genitive', captureAsChirho: 'noun' },
    { posChirho: 'adjective', captureAsChirho: 'adj' }
  ],
  withinChirho: 3,
  orderedChirho: true
};

// "Find all instances where a verb in aorist passive precedes its subject"
// "Find construct chains in Hebrew (noun-construct + noun-absolute)"
// "Find participles used as substantives"
```

### 18.9 Study & Sermon Preparation Tools

```typescript
// Study note system
interface StudyNoteChirho {
  idChirho: string;
  userIdChirho: string;
  verseRangeChirho: VerseRangeChirho;
  contentChirho: string;               // Markdown content
  tagsChirho: string[];
  createdAtChirho: Date;
  updatedAtChirho: Date;

  // Sermon-specific
  isSermonChirho?: boolean;
  sermonTitleChirho?: string;
  sermonDateChirho?: Date;
  outlineChirho?: SermonOutlineChirho;
}

interface SermonOutlineChirho {
  titleChirho: string;
  textChirho: VerseRangeChirho;
  pointsChirho: SermonPointChirho[];
  applicationsChirho: string[];
  illustrationsChirho: IllustrationChirho[];
}

interface SermonPointChirho {
  headingChirho: string;
  subPointsChirho?: SermonPointChirho[];
  versesChirho: string[];              // Supporting verses
  notesChirho: string;
  wordStudiesChirho?: string[];        // Strong's numbers to highlight
}

// Sermon prep workflow
interface SermonPrepWorkflowChirho {
  // 1. Passage analysis
  passageAnalysisChirho: {
    structureChirho: string;           // Literary structure
    keyWordsChirho: WordStudyChirho[];
    parallelPassagesChirho: string[];
    crossRefsChirho: CrossReferenceChirho[];
  };

  // 2. Historical context
  historicalContextChirho: {
    authorChirho: string;
    audienceChirho: string;
    dateChirho: string;
    settingChirho: string;
    purposeChirho: string;
  };

  // 3. Theological analysis
  theologicalAnalysisChirho: {
    themesChirho: string[];
    doctrinesChirho: string[];
    christologicalConnectionChirho?: string;
  };

  // 4. Application
  applicationChirho: {
    originalApplicationChirho: string;
    contemporaryApplicationChirho: string;
    practicalStepsChirho: string[];
  };
}
```

### 18.10 Visualization & Analytics

```typescript
// Word usage visualization
interface WordUsageChartChirho {
  wordChirho: string;                  // Strong's or lemma
  dataPointsChirho: {
    bookChirho: string;
    countChirho: number;
    percentageChirho: number;
  }[];

  // Compare across versions
  versionComparisonChirho?: {
    versionChirho: string;
    translationsChirho: Map<string, number>; // word → count
  }[];
}

// Timeline visualizations
interface BibleTimelineChirho {
  eventsChirho: TimelineEventChirho[];
  periodsChirho: TimelinePeriodChirho[];
  relatedVersesChirho: Map<string, string[]>;
}

// Relationship graphs
interface RelationshipGraphChirho {
  nodesChirho: GraphNodeChirho[];      // People, places, concepts
  edgesChirho: GraphEdgeChirho[];      // Relationships between nodes
  clustersChirho: GraphClusterChirho[]; // Groupings
}

// Cross-reference network
interface CrossRefNetworkChirho {
  centerVerseChirho: string;
  depthChirho: number;                 // How many levels deep
  nodesChirho: {
    verseIdChirho: string;
    levelChirho: number;
    referenceCountChirho: number;
  }[];
  linksChirho: {
    fromChirho: string;
    toChirho: string;
    typeChirho: string;
    strengthChirho: number;
  }[];
}

// Chart types available
type ChartTypeChirho =
  | 'word_frequency_bar_chirho'        // Bar chart of word frequency by book
  | 'word_frequency_heatmap_chirho'    // Heatmap of word across Bible
  | 'translation_comparison_chirho'    // How versions translate same word
  | 'timeline_chirho'                  // Events on timeline
  | 'relationship_network_chirho'      // People/place relationships
  | 'crossref_network_chirho'          // Cross-reference connections
  | 'semantic_cluster_chirho'          // Words clustered by meaning
  | 'morphology_distribution_chirho';  // Distribution of grammatical forms
```

### 18.11 Complete Feature List

**Bible Text Features:**
- [ ] Multiple versions (KJV, ASV, WEB, YLT, Darby + licensed)
- [ ] Parallel passage display (2-4 versions side by side)
- [ ] Red letter display (words of Christ)
- [ ] Paragraph formatting vs verse-by-verse
- [ ] Poetry/prose formatting detection
- [ ] Section headings (toggleable)
- [ ] Footnotes and textual variants
- [ ] Audio Bible integration

**Original Language Features:**
- [ ] Hebrew text (WLC, BHS)
- [ ] Greek text (NA28, TR, LXX)
- [ ] Aramaic text
- [ ] Interlinear display (original above, translation below)
- [ ] Reverse interlinear (translation above, original below)
- [ ] Word-by-word morphological parsing
- [ ] Hover tooltips with full word data
- [ ] Cantillation marks (Hebrew)
- [ ] Accents (Greek)

**Lexicon & Word Study:**
- [ ] Strong's Concordance (Hebrew H1-8674, Greek G1-5624)
- [ ] Brown-Driver-Briggs Hebrew Lexicon
- [ ] Thayer's Greek Lexicon
- [ ] BDAG Greek Lexicon (if licensable)
- [ ] HALOT Hebrew Lexicon (if licensable)
- [ ] Louw-Nida Semantic Domains
- [ ] Word frequency statistics
- [ ] All occurrences search
- [ ] Related words (cognates, synonyms)
- [ ] Usage over time (early vs late books)

**Morphology Features:**
- [ ] Part of speech tagging
- [ ] Full parsing (person, number, gender, case, tense, voice, mood)
- [ ] Hebrew stem analysis (qal, niphal, piel, etc.)
- [ ] Greek aspect analysis
- [ ] Syntax trees
- [ ] Clause analysis
- [ ] Discourse analysis markers

**Search Features:**
- [ ] Full-text search (all versions)
- [ ] Original language search
- [ ] Morphological search (find verbs in aorist passive)
- [ ] Proximity search (word A within N words of word B)
- [ ] Boolean operators (AND, OR, NOT)
- [ ] Wildcard search
- [ ] Phrase search
- [ ] Semantic search (find concepts, not just words)
- [ ] Search by Louw-Nida domain
- [ ] Save and share searches

**Cross-Reference Features:**
- [ ] Treasury of Scripture Knowledge (340K+ refs)
- [ ] Scripture quotations in NT from OT
- [ ] Allusions and echoes
- [ ] Parallel passages (Synoptic Gospels, Kings/Chronicles)
- [ ] Typological connections
- [ ] Cross-reference network visualization
- [ ] User-submitted cross-references
- [ ] Provenance tracking (source of each reference)

**Commentary Features:**
- [ ] Matthew Henry Complete
- [ ] Matthew Henry Concise
- [ ] John Gill's Exposition
- [ ] Jamieson-Fausset-Brown
- [ ] Adam Clarke
- [ ] John Wesley's Notes
- [ ] Albert Barnes' Notes
- [ ] Commentary comparison view
- [ ] Search within commentaries
- [ ] Link commentary to verses

**Study Tools:**
- [ ] Personal notes (verse-level)
- [ ] Highlighting with colors
- [ ] Bookmarks
- [ ] Tags and categories
- [ ] Reading plans
- [ ] Study guides
- [ ] Sermon preparation workspace
- [ ] Outline builder
- [ ] Export to various formats

**Visualization Features:**
- [ ] Word frequency charts
- [ ] Word usage heatmaps
- [ ] Translation comparison charts
- [ ] Bible timeline
- [ ] Maps of biblical places
- [ ] Relationship networks (people, places)
- [ ] Cross-reference network graphs
- [ ] Morphology distribution charts

**API & Integration:**
- [ ] REST API for all data
- [ ] MCP server for AI assistants
- [ ] Webhook support
- [ ] OAuth for third-party apps
- [ ] Export (JSON, CSV, XML, OSIS)
- [ ] Import from other Bible apps
- [ ] Embed widgets for websites

**Platform Features:**
- [ ] Web application
- [ ] Progressive Web App (offline support)
- [ ] Desktop app (Tauri)
- [ ] Mobile responsive
- [ ] Keyboard navigation
- [ ] Screen reader accessibility
- [ ] Dark mode
- [ ] Font size controls
- [ ] Multiple languages (interface)

---

## 19. Tech Stack

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

## 20. Directory Structure

```
bible.systems-chirho/
+-- CLAUDE.md                    # Points to @AGENTS.md
+-- AGENTS.md                    # AI instructions (this file)
+-- CURRENT_SPRINT_CHIRHO.md     # Living state document (when active)
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

## 21. API Endpoints

**CRITICAL:** All route parameters MUST be suffixed with `_chirho`. All path segments MUST be suffixed with `-chirho`.

### Currently Implemented

| Endpoint | Methods | Purpose | Status |
|----------|---------|---------|--------|
| `/api-chirho/feedback-chirho` | POST, GET | Submit and retrieve feedback | COMPLETE |
| `/api-chirho/cross-references-chirho` | GET | Get cross-references for verse | COMPLETE |

### Planned API Endpoints

| Endpoint | Methods | Purpose | Status |
|----------|---------|---------|--------|
| `/api-chirho/bible-chirho/:version_chirho/:book_chirho/:chapter_chirho` | GET | Get chapter text | PLANNED |
| `/api-chirho/bible-chirho/:version_chirho/:book_chirho/:chapter_chirho/:verse_chirho` | GET | Get verse text | PLANNED |
| `/api-chirho/search-chirho` | GET | Search Bible text | PLANNED |
| `/api-chirho/crossref-chirho/:book_chirho/:chapter_chirho/:verse_chirho` | GET | Get cross-references | PLANNED |
| `/api-chirho/lexicon-chirho/:strongs_chirho` | GET | Get lexicon entry | PLANNED |
| `/api-chirho/word-chirho/:word_chirho` | GET | Get word study data | PLANNED |
| `/api-chirho/commentary-chirho/:commentary_chirho/:book_chirho/:chapter_chirho` | GET | Get commentary | PLANNED |
| `/api-chirho/interlinear-chirho/:book_chirho/:chapter_chirho/:verse_chirho` | GET | Get interlinear data | PLANNED |
| `/api-chirho/morphology-chirho/:word_chirho` | GET | Get morphological analysis | PLANNED |

### Route Parameter Examples

```typescript
// ✅ CORRECT - All parameters suffixed
// SvelteKit route: src/routes/api-chirho/bible-chirho/[version_chirho]/[book_chirho]/[chapter_chirho]/+server.ts
export async function GET({ params }: RequestEvent) {
  const { version_chirho, book_chirho, chapter_chirho } = params;
  // ...
}

// ❌ WRONG - Parameters not suffixed
// src/routes/api-chirho/bible-chirho/[version]/[book]/[chapter]/+server.ts
```

---

## 22. MCP Server (Planned)

For AI assistants like Claude to access Bible data:

| Tool | Purpose | Status |
|------|---------|--------|
| `bible_lookup` | Get verse text | PLANNED |
| `bible_search` | Search for passages | PLANNED |
| `cross_reference` | Find related verses | PLANNED |
| `word_study` | Get word definitions and usage | PLANNED |

---

## 23. Data Sources (Open/Public Domain)

Bible.Systems uses SWORD modules and other public domain sources:

### Bible Translations (Public Domain)
- KJV, KJVA (King James Version)
- ASV (American Standard Version, 1901)
- WEB (World English Bible)
- YLT (Young's Literal Translation)
- Darby (Darby Translation)

### Study Resources (Public Domain)
- Strong's Hebrew Concordance (H1-H8674)
- Strong's Greek Concordance (G1-G5624)
- Treasury of Scripture Knowledge (340K+ cross-references)
- Robinson's Morphological Analysis
- Brown-Driver-Briggs Hebrew Lexicon
- Thayer's Greek Lexicon

### Commentaries (Public Domain)
- Matthew Henry's Complete Commentary
- Matthew Henry's Concise Commentary
- John Gill's Exposition
- Jamieson-Fausset-Brown Commentary
- Adam Clarke's Commentary
- John Wesley's Notes

### SWORD Module Sources
- CrossWire Bible Society: https://crosswire.org/sword/modules/
- eBible.org: https://ebible.org/
- Unbound Bible: https://unbound.biola.edu/

---

## 24. Testing Strategy

### 24.1 Philosophy

- **Test before deploy**: Never deploy untested code
- **Fast feedback**: All tests must complete in under 30 seconds
- **Critical paths first**: Focus on core API handlers and user flows
- **Headless only**: E2E tests run headless for CI compatibility

### 24.2 Test Tools

| Tool | Purpose | Command |
|------|---------|---------|
| Vitest | Unit tests | `bun run test-chirho` |
| Playwright | E2E tests (headless) | `bun run test-e2e-chirho` |

### 24.3 Test File Conventions

| Type | Location | Naming | Example |
|------|----------|--------|---------|
| Unit tests | `src/**/*.test.ts` | `*.test.ts` | `validation_chirho.test.ts` |
| E2E tests | `tests-e2e-chirho/` | `*.e2e.ts` | `bible-reader.e2e.ts` |

### 24.4 What to Test

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

### 24.5 Test Commands

```bash
bun run test-chirho          # Run unit tests once
bun run test-watch-chirho    # Run unit tests in watch mode
bun run test-e2e-chirho      # Run E2E tests (headless)
bun run test-all-chirho      # Run all tests
bun run deploy-chirho        # Test + build + deploy
```

### 24.6 Writing Tests

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

### 24.7 CI/CD Integration

The `deploy-chirho` script enforces test-before-deploy:

```bash
bun run deploy-chirho
# Equivalent to: bun run test-chirho && bun run build && bunx wrangler deploy
```

**Never bypass tests for deployment.**

---

## 25. Git & Authorship Protocol

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

## 26. Commands

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

## 27. Environment Variables

Required in `.env` (git ignored):

```env
# Currently no required env vars for basic operation
# Future planned:
# DATABASE_URL_CHIRHO=
# STRIPE_KEY_CHIRHO=
```

---

## 28. Quick Reference

### Naming Summary

| What | How | Example |
|------|-----|---------|
| Our variables | `camelCaseChirho` | `verseTextChirho` |
| Our functions | `camelCaseChirho` | `fetchBibleChirho()` |
| Our types/classes | `PascalCaseChirho` | `VerseChirho` |
| Our constants | `SCREAMING_SNAKE_CHIRHO` | `MAX_VERSES_CHIRHO` |
| Our route paths | `kebab-case-chirho` or `-fe` | `/api-chirho/search-chirho`, `/features-fe/` |
| **Our route params** | `snake_case_chirho` | `:version_chirho`, `:book_chirho` |
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

## 29. Implementation Checklist

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

---

## FaithStack Framework

**CRITICAL: Apply patterns from the FaithStack Master Gist.**

### Master Gist (Authoritative Source)
**URL:** https://gist.github.com/loveJesus/c93fbd61bc1dd6d898ef89c4b6981694

The gist contains 60+ sections covering authentication, Stripe, feedback, database patterns, i18n, error handling, compliance, and more. When asked to "refer to the gist" or "check the master gist", fetch and apply patterns from this URL.

**Gist Files:**
| File | Contents |
|------|----------|
| `00-README_CHIRHO.md` | Overview, quick start |
| `01-AGENTS_MASTER_CHIRHO.md` | AI agent instructions, naming, setup |
| `02-TESTING_CHIRHO.md` | Vitest + Playwright patterns |
| `03-COMMUNITY_FEEDBACK_CHIRHO.md` | Feedback systems |
| `04-DATABASE_AUDIT_CHIRHO.md` | D1 audit logging |
| `05-BEST_PRACTICES_CHIRHO.md` | **60+ implementation patterns** |
| `06-CURRENT_SPRINT_TEMPLATE_CHIRHO.md` | Sprint tracking |
| `07-BASIC_WEBSITE_GIST_CHIRHO.md` | Simple site guide |

### Local Skills Cache (65 Topics)

Skills extracted from the gist are cached locally at:
```
/Volumes/ENC_4TB_WDB_CHIRHO/dev-aleluya/personal-aleluya/orchestrator-chirho/faithstack-chirho/skills/<skill-name>/skill.md
```

**Core Skills:**
| Skill | When to Use |
|-------|-------------|
| `naming` | ALL code - `_chirho` suffix rules |
| `passkeys` | User authentication |
| `stripe-webhooks` | Payment processing |
| `compliance-gdpr` | Privacy, data handling |
| `accessibility` | All UI components |
| `seo` | All public pages |
| `error-handling` | API routes, try/catch |
| `rate-limiting` | Public endpoints |
| `feedback` | User feedback collection |
| `testing` | Test patterns |

**Full Local Gist Copy:**
```
/Volumes/ENC_4TB_WDB_CHIRHO/dev-aleluya/personal-aleluya/orchestrator-chirho/faithstack-chirho/gist-reference/
```

---

## FaithStack Claude Code Plugin

### Slash Commands
| Command | Description |
|---------|-------------|
| `/init-chirho` | Initialize new FaithStack project |
| `/stripe-chirho` | Set up Stripe integration |
| `/legal-chirho` | Generate Privacy Policy, Terms of Service |
| `/auth-chirho` | Add authentication (Passkeys, OAuth, 2FA) |
| `/deploy-chirho` | Deploy to Cloudflare Workers |
| `/test-chirho` | Run Vitest and Playwright tests |
| `/audit-chirho` | Run gap analysis against FaithStack spec |
| `/feedback-chirho` | Add feedback system |
| `/media-chirho` | Generate images/video/audio |

### Subagents (use via Task tool)
| Agent | Description |
|-------|-------------|
| `faithstack-reviewer` | Code review for conventions |
| `faithstack-security` | Security audit (OWASP) |
| `faithstack-stripe` | Stripe integration |
| `faithstack-d1` | D1 database expert |
| `faithstack-gap-analyzer` | Audit against spec |

### MCP Servers
- `faithstack-health-chirho` - Health checks
- `faithstack-d1-chirho` - D1 operations
- `faithstack-stripe-chirho` - Stripe CLI
- `faithstack-deploy-chirho` - Cloudflare deploy
- `faithstack-orchestrator-chirho` - Tmux, tickets

---

## Self-Improvement Protocol

**You are expected to proactively improve this project.**

### Continuous Audit
Periodically audit the project against FaithStack skills:
1. **Gap Analysis** - What skills aren't implemented that should be?
2. **Compliance Check** - Are implemented features following the spec?
3. **Security Review** - Any vulnerabilities?

### When You Identify Improvements

**For beneficial features (clear value, low risk):**
- Implement them directly
- Commit with clear message explaining the improvement

**For major features (significant scope, user-facing):**
1. Create a ticket via MCP: `create_ticket_chirho`
2. Set type: `feature`, priority based on impact
3. Add description of what and why
4. Wait for human review if blocking

**For uncertain improvements:**
1. Create ticket with type: `question`
2. Explain the tradeoff
3. Let human decide

### Research & Learning
- Use `faithstack-research-chirho` MCP for competitive intelligence
- Check what similar projects implement
- Reference skills to see best practices
- Propose improvements based on findings

### Ticket Creation Format
```
Title: [AREA] Brief description
Type: feature | bug | task | question
Priority: p0 (critical) | p1 (high) | p2 (medium) | p3 (low)
Description: What, Why, How (proposed)
```

---
