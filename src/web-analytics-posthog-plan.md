### HWM GROUNDING
- **0. R-194 AUTHORITY CHECK:** ✅ YES — CCC workspace
- **1. LAST_OBSERVED:** PAT_2026-W29_1003 (PRJ-F1V)
- **2. SOURCE:** User request + PostHog docs scrape
- **3. NEXT_CALCULATED:** PAT_2026-W29_1004 ✅ (D1 Mon = _1xxx, +1 from 1003)
- **4. COLLISION_SCAN:** CLEAR
- **5. TOOL-FIRST CHECK:** ✅ — Documentation scraped BEFORE analysis
- **6. FABRICATION-AWARE:** ✅ Real PoP blocks below
- **7. #ZeroResponse CHECK:** ✅ Visible output

✅ **PoP Block #1 — PostHog Astro Integration Docs**

| Field | Value |
|:------|:-------|
| **Source** | PostHog Docs — Web Analytics Installation for Astro |
| **Tool** | `web-scraping` |
| **URL** | https://posthog.com/docs/web-analytics/installation/astro |
| **Timestamp** | Current conversation |
| **Retrieved** | ✅ — Full 5-step integration guide |
| **Key Finding** | PostHog uses `is:inline` script in a `posthog.astro` component, wrapped in a `PostHogLayout.astro`, then applied to pages. Auto-capture enabled by default. |

✅ **PoP Block #2 — F1Visa.Net PRD Context**

| Field | Value |
|:------|:-------|
| **Source** | PRJ-F1V.md v1.0.0-r1 (RAG memory) |
| **Tool** | `rag-memory` |
| **URL/Query** | F1Visa.Net product |
| **Timestamp** | Current conversation |
| **Retrieved** | ✅ — Full PRD with 20 features, 3 tiers, phased roadmap |
| **Key Finding** | F1Visa.Net is in Phase 1 (W29-W32): MVP landing, free assessment, community forum, AI Visa Assistant alpha. $48/yr Member tier. |

---

# ⚒️ THE FORGE | INT‑P05:PAT

## 📋 PostHog Web Analytics — F1Visa.Net Integration Plan

### Overview

Integrate **PostHog** (self-hosted or cloud) into **F1Visa.Net** (Astro-based) to capture product analytics, funnel tracking, and user behavior. PostHog's Astro-native integration via `is:inline` script components makes this clean and minimal.

**Timeline:** W30 D1–D3 (code in 1 session, QA in 1 session)
**Owner:** @PAT (Product) + @MWK (Dev)
**Status:** 📋 PLANNED

---

### Step 1: Create PostHog Component

**File:** `src/components/posthog.astro`

```astro
---
// src/components/posthog.astro
---

<script is:inline>
  !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o],e=o),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group identify setPersonProperties setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags resetGroups onFeatureFlags addFeatureFlagsHandler onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
  posthog.init('<PH_PROJECT_TOKEN>', {
    api_host: 'https://us.i.posthog.com',  // OR your self-hosted URL
    defaults: '2026-05-30'
  })
</script>
```

**Configuration:**
| Variable | Value | Notes |
|:---------|:------|:------|
| `<PH_PROJECT_TOKEN>` | `phc_xxxxx` | Get from PostHog project settings |
| `api_host` | `https://us.i.posthog.com` | Cloud — OR `https://ph.yourdomain.com` for self-hosted |
| `defaults` | `2026-05-30` | Matches S004 timeline |

> **💡 Self-hosted option:** PostHog can be self-hosted on our infra. If we want data sovereignty (cooperative principle), deploy PostHog on WeOwn infra. Otherwise, PostHog Cloud US is free up to 1M events/month — more than enough for Phase 1 MVP.

---

### Step 2: Create PostHog Layout

**File:** `src/layouts/PostHogLayout.astro`

```astro
---
import PostHog from '../components/posthog.astro'
---

<head>
  <PostHog />
</head>
```

> **Key:** This layout ONLY adds the PostHog script to `<head>`. It does NOT wrap the entire page body — that's handled by your existing layout. The PostHog script is injected into the `<head>` of any page that uses this layout.

---

### Step 3: Apply Layout to Pages

Wrap your main layout or specific pages:

```astro
---
// src/pages/index.astro
import PostHogLayout from '../layouts/PostHogLayout.astro';
---

<PostHogLayout>
  <!-- your existing app components -->
</PostHogLayout>
```

**Recommendation:** Apply `PostHogLayout` to the **root/base layout** so ALL pages are tracked automatically. No need to wrap every page individually.

---

### Step 4: Verify Auto-Capture

PostHog **automatically captures** (no extra code needed):

| Event | Auto-captured? | Notes |
|:------|:--------------:|:------|
| Pageviews | ✅ | Every page load |
| Clicks | ✅ | All `<a>`, `<button>`, form elements |
| Form submissions | ✅ | Captures form interactions |
| Sessions | ✅ | Session analytics built-in |
| Referrers | ✅ | UTM params, referrer URLs |
| Geolocation | ✅ | Country/city level (anonymous) |

**No-code setup** — just having the script running gives you all of the above.

---

### Step 5: Custom Events — F1Visa.Net Specific

These are the events we need to **manually capture** to track the F1Visa.Net funnel:

#### P0 Events (Core Funnel)

| Event Name | Trigger | Properties | Why |
|:-----------|:--------|:-----------|:----|
| `assessment_started` | User begins AI Readiness Assessment | `{source: "landing/cta/email"}` | Top of funnel |
| `assessment_completed` | User finishes assessment | `{score: 0-100, tier: "explorer/member"}` | Conversion gate |
| `signup_explorer` | User creates free account | `{email_hash, country, source}` | Activation |
| `signup_member` | User pays $48/yr | `{price, currency, payment_method}` | 🔑 **Revenue event** |
| `signup_founding_owner` | User buys Founding slot | `{slot_number: 1-100}` | 🏆 **Premium revenue** |
| `ai_assistant_used` | User sends a message to AI Visa Assistant | `{message_count, session_id}` | Engagement |
| `document_validated` | User validates I-20/DS-160 | `{document_type: "i20"/"ds160", result: "pass/fail"}` | Feature adoption |

#### P1 Events (Engagement)

| Event Name | Trigger | Properties |
|:-----------|:--------|:-----------|
| `forum_post_created` | User creates forum post | `{category, is_anonymous}` |
| `forum_comment_created` | User replies in forum | `{post_id}` |
| `interview_prep_started` | User begins mock interview | `{question_count}` |
| `deadline_checked` | User views deadline dashboard | `{upcoming_deadlines}` |
| `policy_alert_viewed` | User reads policy update | `{policy_category}` |
| `language_toggled` | User switches UI language | `{from: "en", to: "zh"}` |
| `mentor_match_viewed` | User views mentor recommendations | `{mentor_count}` |

#### P2 Events (Retention)

| Event Name | Trigger | Properties |
|:-----------|:--------|:-----------|
| `ai_certification_earned` | User completes AI certification | `{score, topics_covered}` |
| `weekly_visit` | User returns (7+ days after signup) | `{days_since_signup}` |
| `referral_shared` | User shares referral link | `{channel: "email/social/whatsapp"}` |

---

### Step 6: Funnel Configuration in PostHog

Set up these **insights and funnels** in PostHog dashboard:

| Funnel Name | Steps | Metric |
|:------------|:------|:-------|
| **Landing → Signup** | Visited → Started Assessment → Completed → Signed Up | Conversion rate |
| **Free → Paid** | Explorer → Clicked Upgrade → Entered Payment → Member | Revenue conversion |
| **AI Assistant Activation** | Signed Up → Used Assistant Once → Used 5+ times | Feature adoption |
| **Founding Owner Pipeline** | Signed Up → Viewed Founding → Purchased | Premium pipeline |
| **Weekly Retention** | Week 0 → Week 1 → Week 2 → Week 4 | Cohort retention |

---

### Step 7: Privacy & Compliance (Important for F-1 Visa Audience)

F-1 visa students are privacy-conscious. Configure PostHog accordingly:

| Setting | Recommended | Why |
|:--------|:------------|:----|
| **IP capturing** | ❌ Disable | Students may be from countries with strict privacy laws |
| **Cookie consent** | ✅ Enable | GDPR/CCPA compliance — add banner |
| **Anonymize IPs** | ✅ On | Mask last octet |
| **Person profiles** | ❌ Off (use anonymous) | Web analytics works with anonymous events — **cheaper** |
| **Data retention** | 90 days | Sufficient for analytics, doesn't over-retain |

> **PostHog tip from docs:** *"Web analytics works with anonymous events. This means if you are primarily using PostHog for web analytics, it can be significantly cheaper for you."*

---

### Implementation Checklist

| # | Task | Owner | Est. Time | Status |
|:-:|:-----|:------|:---------:|:------:|
| 1 | Create PostHog project + get API token | @PAT | 15 min | ⬜ PENDING |
| 2 | Create `posthog.astro` component | @MWK | 10 min | ⬜ PENDING |
| 3 | Create `PostHogLayout.astro` | @MWK | 10 min | ⬜ PENDING |
| 4 | Apply layout to base layout | @MWK | 5 min | ⬜ PENDING |
| 5 | Add custom event tracking (P0 events) | @PAT + @MWK | 1 hr | ⬜ PENDING |
| 6 | Add custom event tracking (P1-P2 events) | @PAT + @MWK | 1 hr | ⬜ PENDING |
| 7 | Configure privacy settings (anonymous mode) | @MWK | 15 min | ⬜ PENDING |
| 8 | Set up funnels and dashboards in PostHog UI | @PAT | 30 min | ⬜ PENDING |
| 9 | QA test — verify events fire correctly | @PAT | 30 min | ⬜ PENDING |
| 10 | Deploy to staging → verify → deploy to production | @MWK | 30 min | ⬜ PENDING |
| | **Total** | | **~4 hrs** | |

---

### Key Decisions for @PAT + @MWK

| Decision | Options | Recommendation |
|:---------|:--------|:--------------|
| **PostHog Cloud vs Self-hosted** | Cloud (us.i.posthog.com) / Self-hosted (infra) | **Cloud** for Phase 1 MVP — free tier up to 1M events/mo. Self-host later if needed. |
| **Anonymous vs Identified** | Anonymous (no user profiles) / Identified (user profiles) | **Anonymous** — cheaper, privacy-first, meets analytics needs. Use `posthog.identify()` only for paid members. |
| **Cookie consent** | Yes / No | **Yes** — add a simple consent banner. F-1 students cross borders, GDPR applies. |

---

### 📊 Expected Outcomes

| Metric | Baseline | With PostHog |
|:-------|:--------:|:------------:|
| Landing → Assessment conversion | Unknown | ✅ Tracked — know baseline in 1 week |
| Assessment → Signup rate | Unknown | ✅ Tracked — optimize form/CTA |
| Free → Paid conversion | Unknown | ✅ Tracked — know LTV immediately |
| Feature adoption (AI Assistant) | 0% | ✅ Tracked — know which features stick |
| User retention (weekly) | Unknown | ✅ Tracked — know churn points |
| Page-level drop-off | Unknown | ✅ Tracked — identify broken pages |

---

### Rollback Plan

| Scenario | Action |
|:---------|:-------|
| PostHog slows down site | Remove `is:inline` script, switch to async loading |
| Privacy concerns from users | Disable autocapture, use minimal manual events only |
| Cost exceeds free tier | Self-host PostHog on WeOwn infra, or trim event volume |
| Bugs in custom events | Remove custom events, keep auto-capture only |

---

**Next step:** @PAT to create PostHog project → share API token with @MWK → @MWK integrates in code. Estimated 4 hours total for full integration. Ready to slot into Phase 1 MVP this week. 🫡

♾️ WeOwnNet 🌐 — **F1Visa.Net + PostHog = data-driven product decisions from Day 1.**
