# For God so loved the world, that He gave His only begotten Son,
# that all who believe in Him should not perish but have everlasting life. — John 3:16

# Bible.Systems Best Practices

---

## 1. Required Legal Documents

| Document | Route | Status |
|----------|-------|--------|
| Privacy Policy | `/privacy-fe` | COMPLETE |
| Terms of Service | `/terms-fe` | COMPLETE |
| Accessibility | `/accessibility-fe` | COMPLETE |
| Contact | `/contact-fe` | COMPLETE |

---

## 2. Required Footer

Every page footer includes:

```html
<footer>
  <nav>
    <a href="/privacy-fe">Privacy</a>
    <a href="/terms-fe">Terms</a>
    <a href="/accessibility-fe">Accessibility</a>
    <a href="/contact-fe">Contact</a>
  </nav>
  <p>
    <a href="https://perffection.com">fe</a> |
    <a href="https://loveJesus.software">loveJesus</a> |
    <a href="http://jesusfilm.org/watch/jesus.html/english.html">☧</a>
  </p>
  <p>JESUS CHRIST IS LORD</p>
</footer>
```

---

## 3. Security Headers

Implemented in `hooks.server.ts`:

| Header | Value |
|--------|-------|
| Strict-Transport-Security | max-age=31536000; includeSubDomains |
| X-Content-Type-Options | nosniff |
| X-Frame-Options | DENY |
| X-XSS-Protection | 1; mode=block |
| Referrer-Policy | strict-origin-when-cross-origin |
| Content-Security-Policy | Configured for Turnstile |

---

## 4. Secrets Management

### Never Put Secrets In:
- `wrangler.toml`
- Source code
- Git-tracked files

### Proper Secret Storage

**Local development (.env, git-ignored):**
```bash
TURNSTILE_SECRET_KEY_CHIRHO=1x0000000000000000000000000000000AA
```

**Production (via wrangler):**
```bash
bunx wrangler secret put TURNSTILE_SECRET_KEY_CHIRHO
```

### Required .gitignore Entries
```
.env
.env.local
.dev.vars
```

---

## 5. Cloudflare Workers Deployment

### Use adapter-cloudflare (NOT adapter-cloudflare-pages)

```javascript
// svelte.config.js
import adapter from '@sveltejs/adapter-cloudflare';
```

### Deploy Command

```bash
bun run deploy-chirho  # Tests + builds + deploys
# OR
bunx wrangler deploy   # Deploy only (skips tests)
```

---

## 6. Performance Targets

| Metric | Target | Status |
|--------|--------|--------|
| LCP | < 2.5s | Monitoring |
| FID | < 100ms | Monitoring |
| CLS | < 0.1 | Monitoring |
| TTFB | < 600ms | Monitoring |

---

## 7. Accessibility (WCAG 2.1 AA)

### Requirements

- [x] Keyboard navigation for all interactions
- [x] Skip navigation links
- [x] ARIA labels on interactive elements
- [x] Focus indicators visible
- [ ] Color contrast ratio ≥ 4.5:1 (verify)
- [x] Alt text for images

---

## 8. Image Guidelines

| Use Case | Format | Max Size |
|----------|--------|----------|
| Photos | JPG | 200KB |
| Screenshots | PNG | 500KB |
| Icons | SVG | 10KB |
| OG Images | JPG | 100KB |

### Lazy Loading

```html
<img src="..." alt="..." loading="lazy" decoding="async" />
```

---

## 9. Rate Limiting (Future)

When implementing rate limiting:

```typescript
const RATE_LIMIT_CHIRHO = {
  requestsChirho: 100,
  periodSecondsChirho: 60
};
```

---

## 10. Implementation Checklist

```markdown
### Legal & Compliance
- [x] Privacy policy at /privacy-fe
- [x] Terms of service at /terms-fe
- [x] Accessibility statement
- [x] Contact page
- [ ] Cookie consent (when needed)

### Security
- [x] Security headers implemented
- [x] HTTPS everywhere
- [x] Turnstile on forms
- [ ] Rate limiting (planned)
- [x] Input validation

### UX
- [x] Feedback widget on all pages
- [x] Mobile responsive
- [x] Keyboard navigation
- [x] Loading states
- [x] Error handling

### Performance
- [x] Lazy loading images
- [x] Proper caching headers
- [ ] Core Web Vitals audit
```

---

**JESUS CHRIST IS LORD**
