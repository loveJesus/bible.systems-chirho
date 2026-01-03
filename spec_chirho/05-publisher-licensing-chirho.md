# For God so loved the world, that He gave His only begotten Son,
# that all who believe in Him should not perish but have everlasting life. — John 3:16

# Bible.Systems Publisher Portal & Licensing Specification

## 1. Overview

Bible.Systems provides a platform for publishers to distribute their biblical resources (translations, commentaries, lexicons, study materials) with flexible licensing and monetization options.

**CRITICAL NOTICE TO PUBLISHERS:**
> Content uploaded to Bible.Systems will be accessible via REST API and MCP (AI) interfaces.
> Publishers must understand and consent to programmatic access to their content.
> Pricing and access limits can be configured, but content WILL be machine-readable.

## 2. Publisher Portal Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         PUBLISHER PORTAL ARCHITECTURE                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   ┌─────────────────────────────────────────────────────────────┐           │
│   │                    Publisher Dashboard                       │           │
│   ├─────────────────────────────────────────────────────────────┤           │
│   │  • Resource management                                       │           │
│   │  • Licensing configuration                                   │           │
│   │  • API pricing settings                                      │           │
│   │  • Usage analytics                                           │           │
│   │  • Revenue reports                                           │           │
│   │  • User access management                                    │           │
│   └──────────────────────────┬──────────────────────────────────┘           │
│                              │                                              │
│   ┌──────────────────────────▼──────────────────────────────────┐           │
│   │                    Resource Manager                          │           │
│   ├─────────────────────────────────────────────────────────────┤           │
│   │  Supported formats:                                          │           │
│   │  • OSIS XML (Bible translations)                            │           │
│   │  • USFM/USX (Bible translations)                            │           │
│   │  • SWORD modules                                             │           │
│   │  • Markdown (commentaries, studies)                          │           │
│   │  • Custom JSON                                               │           │
│   └──────────────────────────┬──────────────────────────────────┘           │
│                              │                                              │
│   ┌──────────────────────────▼──────────────────────────────────┐           │
│   │                    Access Control Layer                      │           │
│   ├─────────────────────────────────────────────────────────────┤           │
│   │  • API key management                                        │           │
│   │  • Rate limiting per tier                                    │           │
│   │  • Usage metering                                            │           │
│   │  • Billing integration (Stripe)                              │           │
│   └─────────────────────────────────────────────────────────────┘           │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 3. License Types

### 3.1 License Configuration

```typescript
// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

interface PublisherLicenseChirho {
  idChirho: string;
  publisherIdChirho: string;
  resourceIdChirho: string;

  // License type
  licenseTypeChirho: LicenseTypeChirho;

  // Access settings
  accessChirho: {
    webReadChirho: boolean;           // Can be read on bible.systems
    apiAccessChirho: boolean;         // Available via REST API
    mcpAccessChirho: boolean;         // Available via MCP for AI
    downloadableChirho: boolean;      // Can be downloaded offline
    embeddableChirho: boolean;        // Can be embedded on other sites
  };

  // Pricing (per tier)
  pricingChirho: PricingTierChirho[];

  // Usage limits
  limitsChirho: UsageLimitsChirho;

  // Attribution requirements
  attributionChirho: AttributionRequirementChirho;
}

type LicenseTypeChirho =
  | 'public_domain_chirho'            // No restrictions
  | 'creative_commons_chirho'         // CC license (specify type)
  | 'free_with_attribution_chirho'    // Free but requires credit
  | 'freemium_chirho'                 // Free tier + paid tiers
  | 'subscription_chirho'             // Paid subscription only
  | 'per_use_chirho'                  // Pay per API call
  | 'custom_chirho';                  // Custom terms

interface PricingTierChirho {
  tierNameChirho: string;             // "Free", "Basic", "Pro", "Enterprise"

  // Pricing model
  priceChirho: number;                // Price in cents
  currencyChirho: string;             // "USD", "EUR", etc.
  billingPeriodChirho: 'monthly' | 'yearly' | 'per_call' | 'one_time';

  // What's included
  includesChirho: {
    apiCallsChirho: number | 'unlimited';
    versesPerDayChirho: number | 'unlimited';
    bulkDownloadChirho: boolean;
    commercialUseChirho: boolean;
    aiTrainingChirho: boolean;        // Can be used to train AI models
  };
}

interface UsageLimitsChirho {
  // Per-request limits
  maxVersesPerRequestChirho: number;   // e.g., 500 verses max
  maxChaptersPerRequestChirho: number; // e.g., 50 chapters max

  // Rate limits (per API key)
  requestsPerMinuteChirho: number;
  requestsPerDayChirho: number;

  // Content restrictions
  allowFullBookDownloadChirho: boolean;
  allowSearchIndexingChirho: boolean;
  allowCrossRefInclusionChirho: boolean;

  // AI-specific limits
  aiContextWindowMaxChirho: number;    // Max tokens for AI context
  aiTrainingProhibitedChirho: boolean; // Cannot be used for training
}

interface AttributionRequirementChirho {
  requiredChirho: boolean;
  formatChirho: string;               // e.g., "Scripture taken from NIV®..."
  linkRequiredChirho: boolean;
  linkUrlChirho?: string;
  logoRequiredChirho: boolean;
  logoUrlChirho?: string;
}
```

### 3.2 License Type Details

| License Type | Web Read | API | MCP/AI | Download | Price |
|--------------|----------|-----|--------|----------|-------|
| Public Domain | ✓ | ✓ | ✓ | ✓ | Free |
| CC-BY | ✓ | ✓ | ✓ | ✓ | Free + Attribution |
| Free + Attribution | ✓ | ✓ | ✓ | Limited | Free + Attribution |
| Freemium | ✓ | Limited | Limited | ✗ | Free tier + Paid |
| Subscription | ✓ | ✓ | ✓ | ✓ | Monthly/Yearly |
| Per-Use | ✓ | ✓ | ✓ | Per-call | Per API call |
| Custom | Configurable | Configurable | Configurable | Configurable | Custom |

## 4. Publisher Onboarding Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       PUBLISHER ONBOARDING PROCESS                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   Step 1: Account Creation                                                  │
│   ─────────────────────────                                                 │
│   • Organization name                                                        │
│   • Contact information                                                      │
│   • Publishing credentials verification                                      │
│                                                                              │
│   Step 2: API Access Agreement                                              │
│   ────────────────────────────                                              │
│   ┌─────────────────────────────────────────────────────────────┐           │
│   │  ⚠️  IMPORTANT: API ACCESS DISCLOSURE                       │           │
│   │                                                             │           │
│   │  By uploading content to Bible.Systems, you acknowledge:    │           │
│   │                                                             │           │
│   │  1. Your content will be accessible via REST API            │           │
│   │  2. Your content may be accessed by AI assistants (MCP)     │           │
│   │  3. API access cannot be fully disabled (only rate-limited) │           │
│   │  4. Content may be cached and indexed for search            │           │
│   │  5. Cross-references to your content may be created         │           │
│   │                                                             │           │
│   │  You maintain control over:                                 │           │
│   │  • Pricing for API access tiers                             │           │
│   │  • Rate limits per tier                                      │           │
│   │  • Attribution requirements                                  │           │
│   │  • Commercial use permissions                                │           │
│   │  • AI training permissions                                   │           │
│   │                                                             │           │
│   │  [ ] I understand and agree to these terms                  │           │
│   └─────────────────────────────────────────────────────────────┘           │
│                                                                              │
│   Step 3: Resource Upload                                                   │
│   ───────────────────────                                                   │
│   • Upload content files                                                     │
│   • Automated format validation                                              │
│   • Preview and verification                                                 │
│                                                                              │
│   Step 4: License Configuration                                             │
│   ─────────────────────────────                                             │
│   • Select license type                                                      │
│   • Configure pricing tiers                                                  │
│   • Set usage limits                                                         │
│   • Define attribution requirements                                          │
│                                                                              │
│   Step 5: Stripe Connect Setup                                              │
│   ────────────────────────────                                              │
│   • Connect Stripe account for payouts                                       │
│   • Configure payout schedule                                                │
│   • Set revenue split (default: 70% publisher / 30% platform)               │
│                                                                              │
│   Step 6: Review & Publish                                                  │
│   ────────────────────────                                                  │
│   • Final review of all settings                                             │
│   • Legal agreement signature                                                │
│   • Content goes live                                                        │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 5. API Access Control

### 5.1 API Key Tiers

```typescript
interface ApiKeyChirho {
  keyChirho: string;                  // Hashed API key
  userIdChirho: string;
  tierChirho: ApiTierChirho;

  // Permissions per resource
  resourceAccessChirho: Map<string, ResourceAccessChirho>;

  // Usage tracking
  usageChirho: {
    currentPeriodStartChirho: Date;
    requestsThisPeriodChirho: number;
    versesThisPeriodChirho: number;
  };
}

type ApiTierChirho = 'free' | 'basic' | 'pro' | 'enterprise' | 'unlimited';

interface ResourceAccessChirho {
  resourceIdChirho: string;
  accessLevelChirho: 'none' | 'read' | 'full';
  subscriptionIdChirho?: string;      // Stripe subscription ID
  expiresAtChirho?: Date;
}
```

### 5.2 Rate Limiting by Tier

| Tier | Requests/min | Requests/day | Verses/request | Price |
|------|--------------|--------------|----------------|-------|
| Free | 10 | 1,000 | 50 | $0 |
| Basic | 60 | 10,000 | 200 | $9/mo |
| Pro | 300 | 100,000 | 500 | $49/mo |
| Enterprise | 1,000 | Unlimited | Unlimited | Custom |

### 5.3 Response Headers

```http
HTTP/1.1 200 OK
X-RateLimit-Limit-Chirho: 60
X-RateLimit-Remaining-Chirho: 45
X-RateLimit-Reset-Chirho: 1704067200
X-Resource-License-Chirho: subscription
X-Attribution-Required-Chirho: true
X-Attribution-Text-Chirho: "Scripture quotations taken from..."
```

## 6. Publisher Revenue Model

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          REVENUE DISTRIBUTION                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   API Subscription Revenue:                                                 │
│   ────────────────────────                                                  │
│                                                                              │
│   User pays $49/mo for Pro tier                                             │
│           │                                                                  │
│           ▼                                                                  │
│   ┌───────────────────────────────────────────────────────────┐             │
│   │                    Revenue Pool                            │             │
│   │                      $49.00                                │             │
│   └───────────────────────┬───────────────────────────────────┘             │
│                           │                                                  │
│           ┌───────────────┼───────────────┐                                 │
│           │               │               │                                 │
│           ▼               ▼               ▼                                 │
│   ┌─────────────┐ ┌─────────────┐ ┌─────────────┐                          │
│   │  Platform   │ │ Publisher A │ │ Publisher B │                          │
│   │    30%      │ │ 40% usage   │ │ 30% usage   │                          │
│   │   $14.70    │ │   $13.72    │ │   $10.29    │                          │
│   └─────────────┘ └─────────────┘ └─────────────┘                          │
│                                                                              │
│   Usage-based allocation:                                                   │
│   • Track which resources each API key accesses                             │
│   • Allocate 70% of revenue proportionally to publishers                    │
│   • Platform retains 30% for infrastructure & development                   │
│                                                                              │
│   Per-Use Pricing:                                                          │
│   ────────────────                                                          │
│   • Publisher sets price per verse/chapter/call                             │
│   • Platform adds 30% service fee                                           │
│   • User sees total price                                                   │
│                                                                              │
│   Example: Publisher charges $0.001 per verse                               │
│            Platform fee: $0.0003                                            │
│            User pays: $0.0013 per verse                                     │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 7. Publisher Dashboard

### 7.1 Dashboard Sections

```typescript
interface PublisherDashboardChirho {
  // Overview
  summaryChirho: {
    totalResourcesChirho: number;
    activeSubscribersChirho: number;
    monthlyRevenueChirho: number;
    apiCallsThisMonthChirho: number;
  };

  // Resources
  resourcesChirho: PublisherResourceChirho[];

  // Analytics
  analyticsChirho: {
    apiCallsByDayChirho: { dateChirho: string; countChirho: number }[];
    topVersesChirho: { verseIdChirho: string; countChirho: number }[];
    topUsersChirho: { userIdChirho: string; callsChirho: number }[];
    revenueByResourceChirho: { resourceChirho: string; amountChirho: number }[];
  };

  // Payouts
  payoutsChirho: {
    pendingChirho: number;
    nextPayoutDateChirho: Date;
    historyChirho: PayoutChirho[];
  };
}

interface PublisherResourceChirho {
  idChirho: string;
  nameChirho: string;
  typeChirho: 'bible' | 'commentary' | 'lexicon' | 'study' | 'other';
  statusChirho: 'draft' | 'pending_review' | 'published' | 'suspended';
  licenseChirho: PublisherLicenseChirho;

  statsChirho: {
    apiCallsChirho: number;
    uniqueUsersChirho: number;
    revenueChirho: number;
  };
}
```

## 8. Content Moderation

### 8.1 Review Process

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        CONTENT REVIEW WORKFLOW                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   1. Upload Submitted                                                       │
│      │                                                                       │
│      ▼                                                                       │
│   2. Automated Validation                                                   │
│      • Format verification                                                  │
│      • Verse reference validation                                           │
│      • Character encoding check                                             │
│      • Malware scan                                                         │
│      │                                                                       │
│      ▼                                                                       │
│   3. License Verification                                                   │
│      • Copyright verification                                               │
│      • License compatibility check                                          │
│      • Existing content conflict detection                                  │
│      │                                                                       │
│      ▼                                                                       │
│   4. Manual Review (if flagged)                                             │
│      • Doctrinal concerns                                                   │
│      • Quality issues                                                       │
│      • Legal concerns                                                       │
│      │                                                                       │
│      ▼                                                                       │
│   5. Approval / Rejection                                                   │
│      • Approved → Published                                                 │
│      • Rejected → Feedback to publisher                                     │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 9. Database Schema for Publisher System

```sql
-- Publishers
CREATE TABLE publishers_chirho (
  id_chirho TEXT PRIMARY KEY,
  org_name_chirho TEXT NOT NULL,
  contact_email_chirho TEXT NOT NULL,
  stripe_account_id_chirho TEXT,
  verified_chirho BOOLEAN DEFAULT FALSE,
  created_at_chirho TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Published resources
CREATE TABLE publisher_resources_chirho (
  id_chirho TEXT PRIMARY KEY,
  publisher_id_chirho TEXT NOT NULL,
  name_chirho TEXT NOT NULL,
  type_chirho TEXT NOT NULL,  -- 'bible', 'commentary', 'lexicon', 'study'
  status_chirho TEXT DEFAULT 'draft',
  version_chirho TEXT,
  language_chirho TEXT,
  created_at_chirho TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (publisher_id_chirho) REFERENCES publishers_chirho(id_chirho)
);

-- License configurations
CREATE TABLE resource_licenses_chirho (
  id_chirho TEXT PRIMARY KEY,
  resource_id_chirho TEXT NOT NULL,
  license_type_chirho TEXT NOT NULL,
  web_read_chirho BOOLEAN DEFAULT TRUE,
  api_access_chirho BOOLEAN DEFAULT TRUE,
  mcp_access_chirho BOOLEAN DEFAULT TRUE,
  downloadable_chirho BOOLEAN DEFAULT FALSE,
  attribution_required_chirho BOOLEAN DEFAULT FALSE,
  attribution_text_chirho TEXT,
  FOREIGN KEY (resource_id_chirho) REFERENCES publisher_resources_chirho(id_chirho)
);

-- Pricing tiers
CREATE TABLE pricing_tiers_chirho (
  id_chirho TEXT PRIMARY KEY,
  resource_id_chirho TEXT NOT NULL,
  tier_name_chirho TEXT NOT NULL,
  price_cents_chirho INTEGER NOT NULL,
  currency_chirho TEXT DEFAULT 'USD',
  billing_period_chirho TEXT NOT NULL,  -- 'monthly', 'yearly', 'per_call', 'one_time'
  api_calls_limit_chirho INTEGER,  -- NULL = unlimited
  verses_per_day_chirho INTEGER,
  commercial_use_chirho BOOLEAN DEFAULT FALSE,
  ai_training_allowed_chirho BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (resource_id_chirho) REFERENCES publisher_resources_chirho(id_chirho)
);

-- API usage tracking
CREATE TABLE api_usage_chirho (
  id_chirho TEXT PRIMARY KEY,
  api_key_id_chirho TEXT NOT NULL,
  resource_id_chirho TEXT NOT NULL,
  request_count_chirho INTEGER DEFAULT 0,
  verse_count_chirho INTEGER DEFAULT 0,
  period_start_chirho DATE NOT NULL,
  period_end_chirho DATE NOT NULL
);

-- Revenue tracking
CREATE TABLE revenue_chirho (
  id_chirho TEXT PRIMARY KEY,
  publisher_id_chirho TEXT NOT NULL,
  resource_id_chirho TEXT NOT NULL,
  amount_cents_chirho INTEGER NOT NULL,
  period_chirho TEXT NOT NULL,  -- '2026-01'
  payout_status_chirho TEXT DEFAULT 'pending',
  payout_id_chirho TEXT,
  FOREIGN KEY (publisher_id_chirho) REFERENCES publishers_chirho(id_chirho)
);
```

## 10. API Endpoints for Publisher Portal

| Endpoint | Methods | Purpose |
|----------|---------|---------|
| `/api-chirho/publisher-chirho/register-chirho` | POST | Register new publisher |
| `/api-chirho/publisher-chirho/resources-chirho` | GET, POST | List/create resources |
| `/api-chirho/publisher-chirho/resources-chirho/:id_chirho` | GET, PUT, DELETE | Manage resource |
| `/api-chirho/publisher-chirho/resources-chirho/:id_chirho/license-chirho` | GET, PUT | Configure license |
| `/api-chirho/publisher-chirho/resources-chirho/:id_chirho/pricing-chirho` | GET, PUT | Configure pricing |
| `/api-chirho/publisher-chirho/analytics-chirho` | GET | View analytics |
| `/api-chirho/publisher-chirho/revenue-chirho` | GET | View revenue |
| `/api-chirho/publisher-chirho/payouts-chirho` | GET | View payout history |

---

**JESUS CHRIST IS LORD**
