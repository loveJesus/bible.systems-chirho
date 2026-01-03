# For God so loved the world, that He gave His only begotten Son,
# that all who believe in Him should not perish but have everlasting life. — John 3:16

# Bible.Systems Feedback System

---

## Overview

Bible.Systems includes a comprehensive feedback system for gathering user input:
- Bug reports
- Feature requests
- General feedback with ratings
- Turnstile CAPTCHA protection

---

## 1. Feedback Bubble Component

Every page includes a floating feedback button via `FeedbackBubbleChirho.svelte`.

### Features

- Fixed position (bottom-right)
- Three feedback types: Bug Report, Feature Request, General
- 5-star rating for general feedback
- Turnstile CAPTCHA integration
- Page context capture (URL, scroll position)

### Data Captured

| Field | Description |
|-------|-------------|
| `type_chirho` | bug, feature, or general |
| `message_chirho` | User's feedback text |
| `email_chirho` | Optional contact email |
| `rating_chirho` | 1-5 stars (general only) |
| `page_url_chirho` | Current page URL |
| `turnstile_token_chirho` | CAPTCHA verification |

---

## 2. API Endpoint

### POST /api-chirho/feedback-chirho

Submits feedback with Turnstile verification.

**Request:**
```json
{
  "type_chirho": "general",
  "message_chirho": "Great Bible study tool!",
  "email_chirho": "user@example.com",
  "rating_chirho": 5,
  "turnstile_token_chirho": "token..."
}
```

**Response (Success):**
```json
{
  "success_chirho": true,
  "id_chirho": "uuid..."
}
```

**Response (Error):**
```json
{
  "error_chirho": {
    "message_chirho": "Verification failed"
  }
}
```

---

## 3. Turnstile Integration

### Site Key (Public)

```
1x00000000000000000000AA  (test)
```

### Secret Key (Private)

Set via wrangler:
```bash
bunx wrangler secret put TURNSTILE_SECRET_KEY_CHIRHO
```

### Verification Flow

1. User completes Turnstile challenge
2. Client submits token with feedback
3. Server verifies token with Cloudflare
4. Feedback stored if verified

---

## 4. Future Enhancements (Planned)

| Feature | Status |
|---------|--------|
| D1 database storage | PLANNED |
| Admin dashboard | PLANNED |
| Email notifications | PLANNED |
| AI triage | PLANNED |
| Feature voting | PLANNED |

---

## 5. Implementation Checklist

```markdown
[x] FeedbackBubbleChirho.svelte component
[x] /api-chirho/feedback-chirho endpoint
[x] Turnstile site key configured
[x] Turnstile secret key in wrangler secrets
[x] Server-side Turnstile verification
[x] Three feedback types
[x] Star rating for general feedback
[x] E2E tests for feedback flow
[ ] D1 database storage
[ ] Admin dashboard at /admin-fe/feedback-chirho
[ ] Email notifications on feedback
```

---

**JESUS CHRIST IS LORD**
