# For God so loved the world, that He gave His only begotten Son,
# that all who believe in Him should not perish but have everlasting life. — John 3:16

# Bible.Systems Testing Guide

> *"Trust in the LORD with all your heart, and do not lean on your own understanding."* — Proverbs 3:5
>
> But also write tests for the parts that matter.

---

## Philosophy

You push frequently. You can't afford:
- Browsers opening randomly
- 5-minute test suites blocking deploys
- Flaky tests that fail for no reason

**So we test differently.**

---

## The Strategy

### What We Test

| Category | Example | Why |
|----------|---------|-----|
| Bible data integrity | Book/chapter/verse existence | Core functionality |
| Validation utilities | Email, feedback validation | Used everywhere |
| API handlers | Bible endpoints, feedback | User-facing |
| Turnstile verification | CAPTCHA validation | Security |

### What We DON'T Test Automatically

| Skip | Why |
|------|-----|
| Component rendering | Use E2E for user flows instead |
| Every possible path | Only test critical flows |
| Third-party APIs | Mock them |

---

## Critical Constraints

1. **HEADLESS ONLY** — No GUI popping up
2. **VITEST FOR UNIT** — Fast, terminal-based
3. **PLAYWRIGHT FOR E2E** — Headless, critical flows only
4. **UNDER 30 SECONDS** — Full suite must be fast
5. **MOCK EXTERNAL CALLS** — Don't hit real APIs

---

## Test Commands

```bash
bun run test-chirho          # Run unit tests
bun run test-watch-chirho    # Run unit tests (watch mode)
bun run test-e2e-chirho      # Run E2E tests (headless)
bun run test-all-chirho      # Run all tests
bun run deploy-chirho        # Test + build + deploy
```

---

## Current Test Coverage

### Unit Tests (37 tests)

**src/lib/data_chirho/bible_kjv_chirho.test.ts:**
- Bible data structure integrity
- Book lookup by ID
- Chapter and verse retrieval
- All expected books present

**src/lib/utils_chirho/validation_chirho.test.ts:**
- Email validation
- Feedback type validation
- Rating validation (1-5)
- Bible reference validation
- Input sanitization

### E2E Tests

**tests-e2e-chirho/bible-reader.e2e.ts:**
- Homepage loads with key elements
- Bible index lists books
- Genesis 1 chapter loads
- John 3:16 accessible
- Chapter navigation works
- Book selector dropdown works
- Bible API endpoints return correct data

**tests-e2e-chirho/feedback.e2e.ts:**
- Feedback bubble visible
- Feedback form opens
- Feedback type buttons interactive
- Turnstile widget present
- Form validates empty messages
- Form closes when X clicked
- Star rating interactive
- API requires Turnstile token

---

## Priority Order

When time is limited, test in this order:

1. **Bible data integrity** — Core content
2. **API endpoints** — User-facing
3. **Validation utilities** — Foundation
4. **Turnstile/security** — Protection
5. **Everything else** — Nice to have

---

## Checklist

```markdown
[x] vitest installed
[x] vitest.config.ts created
[x] test-chirho script in package.json
[x] deploy-chirho runs tests first
[x] Bible data tests
[x] Validation utility tests
[x] E2E tests for Bible reader
[x] E2E tests for feedback system
[x] All tests pass in <30 seconds
```

---

> *"Whatever you do, do it all for the glory of God."* — 1 Corinthians 10:31

**JESUS CHRIST IS LORD**
