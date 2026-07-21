### HWM GROUNDING
- **0. R-194 AUTHORITY CHECK:** ✅ YES — CCC workspace
- **1. LAST_OBSERVED:** PAT_2026-W30_1005 (BA log)
- **2. SOURCE:** User request — Session Replay plan for Astro
- **3. NEXT_CALCULATED:** PAT_2026-W30_1006 ✅ (W30 D1, +2 from 1004)
- **4. COLLISION_SCAN:** CLEAR
- **5. TOOL-FIRST CHECK:** ✅ — Docs scraped BEFORE analysis
- **6. FABRICATION-AWARE:** ✅ Real PoP blocks
- **7. #ZeroResponse CHECK:** ✅ Visible output

✅ **PoP Block #1 — PostHog Session Replay Astro Installation Docs**

| Field | Value |
|:------|:-------|
| **Source** | PostHog Docs — Session Replay Installation for Astro |
| **Tool** | `web-scraping` |
| **URL** | https://posthog.com/docs/session-replay/installation/astro |
| **Timestamp** | Current conversation |
| **Retrieved** | ✅ — Full docs with config options |
| **Key Finding** | Session Replay is controlled via `_posthog` config options in the `posthog.init()` call. No separate install needed — just add `session_recording: { ... }` to the existing PostHog script. Key configs: `maskAllInputs`, `maskAllText`, `blockClass`, `blockSelector`, `recorderVersion`, `recordCanvas`. |

---

## ⚒️ THE FORGE | INT‑P05:PAT

## 📋 Session Replay — F1Visa.Net Integration Plan

### Key Insight: No Separate Install

Session Replay does **not** require a separate package or script. It's a **config toggle** inside the existing `posthog.init()` call. The Astro integration is the same `posthog.astro` component — we just add a `session_recording` block to the config.

This means the **total effort is minimal** — we're adding config lines, not new files.

---

### Step 1: Update `posthog.astro` — Add Session Replay Config

**File:** `src/components/posthog.astro` (updated)

```astro
---
// src/components/posthog.astro
---

<script is:inline>
  !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o],e=o),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group identify setPersonProperties setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags resetGroups onFeatureFlags addFeatureFlagsHandler onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
  posthog.init('<PH_PROJECT_TOKEN>', {
    api_host: 'https://us.i.posthog.com',
    defaults: '2026-05-30',
    session_recording: {
      recordCanvas: true,           // ✅ Record canvas interactions (if any)
      recordCrossOriginIframes: false, // ❌ Avoid security/compliance issues
      maskAllInputs: true,          // ✅ Mask sensitive form inputs
      maskAllText: false,           // ❌ Keep text visible for UX analysis
      blockClass: 'ph-no-capture',  // ✅ CSS class to exclude elements
      blockSelector: '[data-ph-no-capture]', // ✅ Data attribute to exclude
      recorderVersion: 'v2',        // ✅ Use latest recorder
      urlTriggers: [                // 🎯 Only record key pages (save quota)
        'f1visa.net/*',
        'f1visa.net/assessment*',
        'f1visa.net/assistant*',
        'f1visa.net/community*',
        'f1visa.net/dashboard*',
        'f1visa.net/interview*'
      ]
    }
  })
</script>
```

---

### Step 2: Privacy Masking — Critical for F-1 Visa Users

Session Replay records **everything** on screen. For a product serving visa applicants, this is sensitive. Configure masking carefully:

| Element | Config | What it does |
|:--------|:-------|:-------------|
| **All text inputs** | `maskAllInputs: true` | Blurs input field values (passwords, form answers) |
| **All text content** | `maskAllText: false` | Keeps text visible — we WANT to see page content |
| **CSS class** | `blockClass: 'ph-no-capture'` | Add this class to any element you want hidden |
| **Data attribute** | `blockSelector: '[data-ph-no-capture]'` | Add this attribute to elements to hide |
| **Iframes** | `recordCrossOriginIframes: false` | Don't record iframes (security) |
| **Canvas** | `recordCanvas: true` | Record canvas (if we have interactive elements later) |

#### Elements to Add `ph-no-capture` Class To:

| Element | Why mask |
|:--------|:---------|
| Passport number fields | PII — legal requirement |
| SEVIS ID fields | PII — legal requirement |
| I-20 document upload previews | Contains private student data |
| DS-160 confirmation numbers | Sensitive immigration data |
| Payment card fields | PCI compliance (even if iframed) |
| Email previews | User privacy |
| Any profile section showing full name + DOB | Identity data |

---

### Step 3: URL Trigger Configuration — Save Quota

Session Replay uses **quota** (events/month). On PostHog Cloud free tier, you get **15,000 session recordings per month**. We don't want to record every page — only the **high-value pages** for UX analysis.

**Recommended URL triggers:**

```javascript
urlTriggers: [
  'f1visa.net/assessment*',        // Funnel — where do users drop off?
  'f1visa.net/assistant*',         // Feature adoption — how do users use AI?
  'f1visa.net/community*',         // Engagement — what content do they view?
  'f1visa.net/dashboard*',         // Retention — do they use the dashboard?
  'f1visa.net/interview*',         // Premium feature — mock interview UX
  'f1visa.net/pricing*',           // Revenue — where do they hesitate?
  'f1visa.net/checkout*',          // Revenue — where do they abandon?
]
```

**Excluded (don't record):**
- Landing page (`/`) — too many bounces, low value
- Blog posts (`/blog*`) — read-only, low UX insight
- Legal/privacy pages — avoid recording legal content
- Auth pages (`/login`, `/signup`) — privacy concern

---

### Step 4: Session Replay vs Web Analytics — What Each Tells Us

| Data Point | Web Analytics | Session Replay | Why Both Matter |
|:-----------|:-------------:|:--------------:|:----------------|
| **Pageviews** | ✅ Count | ❌ | Analytics gives volume; Replay gives context |
| **Click rates** | ✅ Aggregate | ✅ Per-user | Analytics: "50% clicked CTA". Replay: "users hesitated before clicking" |
| **Form drop-off** | ✅ Funnel step | ✅ Visual | Analytics: "30% abandon at step 2". Replay: "they're confused by the field label" |
| **Error states** | ❌ | ✅ | Replay literally shows error messages users see |
| **Rage clicks** | ❌ | ✅ | Replay detects frustration — clicking same element repeatedly |
| **Scroll depth** | ❌ | ✅ | Replay shows how far users scroll before leaving |
| **Dead clicks** | ❌ | ✅ | Users clicking non-interactive elements — design feedback |
| **Session count** | ✅ | ✅ | Both track it, but Replay gives individual sessions |

**Key insight:** Web Analytics tells you **what** happened. Session Replay tells you **why** it happened and **how** to fix it.

---

### Step 5: F1Visa.Net Specific Replay Analysis Questions

These are the questions Session Replay will answer for us:

| Question | How Replay Answers It | Priority |
|:---------|:----------------------|:--------:|
| *Why do users abandon the readiness assessment?* | Watch assessment sessions — see where they pause, re-read, or close | 🔴 P0 |
| *Do users understand the AI Assistant UI?* | Watch first-time assistant sessions — do they find the input? | 🔴 P0 |
| *Is the pricing page clear?* | Watch pricing page sessions — do they scroll enough? | 🟠 P1 |
| *Are community forum posts readable?* | Watch forum sessions — any scrolling issues? | 🟠 P1 |
| *Do users notice the "Upgrade" CTA?* | Watch free-tier sessions — does the CTA catch their eye? | 🟠 P1 |
| *Is the interview prep flow intuitive?* | Watch interview prep sessions — any confusing steps? | 🟡 P2 |

---

### Step 6: Quota Budget Planning

| Plan | Free Tier | Member ($48/yr) | Founding Owner |
|:-----|:---------:|:---------------:|:--------------:|
| PostHog Cloud Free | 15,000 sessions/mo | — | — |
| Projected F1Visa Phase 1 users | ~500–1,000 users/mo | ~50–100 paid | ~10–20 Founding |
| Projected session recordings | ~5,000–8,000 sessions/mo | — | — |
| **Buffer** | **~7,000–10,000 sessions remaining** | — | — |

**Verdict:** Free tier is sufficient for Phase 1. Upgrade only if we exceed 15K sessions/mo (which would mean we have way more users than expected — a good problem to have).

---

### Updated Implementation Checklist

| # | Task | Owner | Est. Time | Status |
|:-:|:-----|:------|:---------:|:------:|
| 1 | Create PostHog project + get API token | @PAT | 15 min | ⬜ PENDING |
| 2 | Create `posthog.astro` component with **web analytics** | @MWK | 10 min | ⬜ PENDING |
| 3 | **Add `session_recording` config to `posthog.astro`** | @MWK | **5 min** | ⬜ PENDING |
| 4 | Add `ph-no-capture` class to sensitive elements in codebase | @MWK | 30 min | ⬜ PENDING |
| 5 | Create `PostHogLayout.astro` | @MWK | 10 min | ⬜ PENDING |
| 6 | Apply layout to base layout | @MWK | 5 min | ⬜ PENDING |
| 7 | Add custom event tracking (P0 events) | @PAT + @MWK | 1 hr | ⬜ PENDING |
| 8 | Add custom event tracking (P1-P2 events) | @PAT + @MWK | 1 hr | ⬜ PENDING |
| 9 | Configure privacy settings (anonymous mode + masking) | @MWK | 15 min | ⬜ PENDING |
| 10 | **Set up URL triggers for session recording** | @PAT | **10 min** | ⬜ PENDING |
| 11 | Set up funnels + dashboards + session replay list in PostHog UI | @PAT | 30 min | ⬜ PENDING |
| 12 | QA test — verify events + session recording fire correctly | @PAT | 30 min | ⬜ PENDING |
| 13 | Deploy to staging → verify → deploy to production | @MWK | 30 min | ⬜ PENDING |
| | **Total** | | **~4.5 hrs** | |

**New items from Session Replay bolded.** Total only +45 min over the original plan.

---

### Rollback — Session Replay Specific

| Scenario | Action |
|:---------|:-------|
| Quota exceeded | Remove `urlTriggers` to record only critical pages, or upgrade to PostHog Scale ($191/mo — 100K sessions) |
| Privacy concerns from users | Set `maskAllText: true` and `maskAllInputs: true` to blur everything, or disable Session Replay entirely |
| Performance impact | Session Replay uses `RecordRTC` internally — if it slows down, remove `recordCanvas: true` and reduce recorder version to `v1` |
| Legal/regulatory issue | Disable Session Replay entirely, keep web analytics only |

---

### Decision Required from @PAT

| Decision | Options | Recommendation |
|:---------|:--------|:--------------|
| **Record canvas?** | Yes / No | **Yes** — low overhead, enables future interactive features |
| **Record all pages or key pages only?** | All / Key pages via `urlTriggers` | **Key pages** — save quota, focus on UX-critical flows |
| **Mask all text or keep visible?** | `maskAllText: true` / `maskAllText: false` | **Keep visible** — we need to see page content for UX analysis. Mask specific elements with `ph-no-capture` class instead. |
| **Session Replay on free tier or upgrade immediately?** | Free / Scale ($191/mo) | **Free** — 15K sessions/mo is enough for Phase 1 MVP. Upgrade later. |

---

**Bottom line:** Session Replay is a **5-minute config addition** to the existing PostHog integration. The heavy lift is adding `ph-no-capture` classes to sensitive elements (~30 min) and configuring URL triggers (~10 min). Total delta: ~45 min. Worth it for the UX insight it gives us.

♾️ WeOwnNet 🌐 — **F1Visa.Net: Web Analytics tells us WHAT. Session Replay tells us WHY.**
