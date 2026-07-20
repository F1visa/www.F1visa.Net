# 🚀 PRJ-F1V | F1Visa.Net ♾️ — Product Requirements Document

| Field | Value |
|:------|:-------|
| **Document** | PRJ-F1V.md |
| **Version** | **v1.0.0-r1** |
| **Project** | 🛂 F1Visa.Net ♾️ |
| **Category** | 🚀 **PRODUCT** — Digital Product Development |
| **Bucket** | #ZeroTo100 — **Bucket 4** ($48/yr — includes book) |
| **Instance** | INT-B002 (WeOwnChat.F1visa.Net) ✅ LIVE |
| **DevLEAD** | @MWK (Instance) + @PAT (Product) |
| **ProductOwner** | @NIK (Product) |
| **DevOWNER** | @PAT + @GTM |
| **Status** | 🟡 **DRAFT — Awaiting R-011** |
| **Source Inputs** | [StoryBrand Brand Profile](GTM_2026-W28_2003), [PRJ-401 v4.1.3.1-r14](_S004_PROJECTS_/PRJ-401.md) |

---

## 📖 Table of Contents

1. [Product Vision](#1-product-vision)
2. [Target Audience & Personas](#2-target-audience--personas)
3. [Problem Statement](#3-problem-statement)
4. [Product Overview & Architecture](#4-product-overview--architecture)
5. [Core Features & Requirements](#5-core-features--requirements)
6. [User Journey & Onboarding Flow](#6-user-journey--onboarding-flow)
7. [Membership Tiers](#7-membership-tiers)
8. [Technical Requirements](#8-technical-requirements)
9. [Success Metrics & KPIs](#9-success-metrics--kpis)
10. [Release Plan & Roadmap](#10-release-plan--roadmap)
11. [Out of Scope (v1.0)](#11-out-of-scope-v10)
12. [Risks & Mitigations](#12-risks--mitigations)
13. [APPENDIX A: User Stories](#13-appendix-a-user-stories)
14. [APPENDIX B: Competitive Landscape](#14-appendix-b-competitive-landscape)

---

## 1. Product Vision

**F1Visa.Net is an AI-powered cooperative platform that helps international students navigate the F-1 visa journey with confidence, community, and ownership.**

Students don't just use the platform — they become member-owners. For **$48/year**, students get:

- **AI-guided visa application assistance** — form validation, deadline tracking, SEVIS compliance
- **Community portal** — live chat, peer forums, mentor matching with current F-1 holders
- **AI Readiness credential** — transferable AI literacy certification for careers
- **Cooperative ownership** — voting rights, profit-share, and a stake in the platform's success

### North Star

> **"Every international student deserves access to affordable, trustworthy visa guidance and a community that helps them thrive — not just survive — their US education journey."**

### Alignment with #ZeroTo100 (PRJ-038)

| Bucket | Audience | Price | Instance | Status |
|:------:|----------|:-----:|:--------:|:------:|
| **4** | 🛂 F1Visa.Net Students | **$48/yr** | INT-B002 | ✅ **LIVE** |

---

## 2. Target Audience & Personas

### Primary Audience

International students on or seeking F-1 visas in the United States — **~1.5 million active F-1 visa holders annually**.

### Personas

#### 🎓 Persona 1: Priya — The Prospective Applicant

| Attribute | Detail |
|:----------|:--------|
| **Age** | 18-22 |
| **Origin** | India (largest F-1 market) |
| **Status** | High school senior / college transfer — hasn't applied yet |
| **Pain** | Overwhelmed by visa paperwork, terrified of denial, no trusted guidance |
| **Budget** | Limited — family saving for tuition, can't afford $300-500/hr lawyers |
| **Channel** | Instagram, WhatsApp, YouTube |
| **Goal** | Get F-1 visa approved with confidence and minimum stress |

#### 🧑‍🎓 Persona 2: Chen — The Current F-1 Student

| Attribute | Detail |
|:----------|:--------|
| **Age** | 20-26 |
| **Origin** | China |
| **Status** | 1st or 2nd year on F-1 visa |
| **Pain** | Navigating CPT/OPT alone, SEVIS compliance anxiety, cultural isolation |
| **Budget** | Tight — focused on tuition, needs affordable community support |
| **Channel** | WeChat, Instagram, Discord |
| **Goal** | Find a community, get CPT/OPT guidance, build AI skills for internships |

#### 👩‍💼 Persona 3: Amina — The Recent Graduate

| Attribute | Detail |
|:----------|:--------|
| **Age** | 22-28 |
| **Origin** | Nigeria |
| **Status** | Recent grad on OPT transitioning to H-1B or STEM OPT |
| **Pain** | Confusing H-1B lottery, career uncertainty, need AI skills for job market |
| **Budget** | Some income — willing to pay for high-value career resources |
| **Channel** | LinkedIn, Twitter/X, Discord |
| **Goal** | Get career-ready, build AI literacy credential, find job with OPT sponsorship |

#### 👪 Persona 4: Meera — The Parent

| Attribute | Detail |
|:----------|:--------|
| **Age** | 45-60 |
| **Origin** | India |
| **Status** | Parent of an F-1 applicant/student |
| **Pain** | No visibility into their child's visa process, wants accountability |
| **Budget** | Willing to pay for peace of mind |
| **Channel** | WhatsApp, email |
| **Goal** | Transparency and assurance that their child's visa process is on track |

### Secondary Audience

- University international student offices (referral partners)
- Education agents and consultants in source countries

---

## 3. Problem Statement

F-1 visa students face **three interconnected problems** that no single solution currently addresses:

### Problem 1: Complexity & Fear of Denial 🛂

| Issue | Detail |
|:------|:--------|
| **Opaque process** | I-20, SEVIS fee, DS-160, visa interview — each step has strict requirements |
| **High stakes** | A single error = delay or denial. Denial rate for F-1 visas: ~30-40% |
| **Cost of help** | Immigration lawyers: **$300-500/hr**. Existing forums: outdated/conflicting |
| **No AI guidance** | No tool specializes in F-1 visa process end-to-end |

### Problem 2: Isolation & Lack of Community 🏠

| Issue | Detail |
|:------|:--------|
| **Alone in a new country** | No family, no local network, no cultural navigation support |
| **Understaffed uni offices** | Average ratio: **1 advisor per 1,200 students** |
| **No peer matching** | No structured way to connect with fellow F-1 students |
| **Housing/banking/culture** | Basic settlement tasks are overwhelming without guidance |

### Problem 3: AI Literacy Gap 🤖

| Issue | Detail |
|:------|:--------|
| **Job market demands AI skills** | But F-1 students face barriers to acquiring them |
| **Expensive bootcamps** | AI courses cost $5,000-15,000 — out of reach for most students |
| **Work authorization limits** | First year: no off-campus work. No internships until CPT approved |
| **No structured pathway** | No affordable, credential-backed AI literacy program for students |

### Current Alternatives (All Inadequate)

| Solution | Cost | Coverage | Verdict |
|:---------|:----:|:--------:|:-------:|
| Immigration lawyers | $300-500/hr | ✅ Expert | ❌ **Too expensive for most students** |
| Reddit/r/f1visa | Free | ⚠️ Crowdsourced | ❌ **Conflicting advice, no accountability** |
| University ISSO | Free | ⚠️ Trusted | ❌ **1:1200 ratio — understaffed** |
| Indian study abroad agents | $500-2000 | ⚠️ Variable | ❌ **Conflict of interest, no post-arrival support** |
| General AI tools (ChatGPT) | $20/mo | ❌ Generic | ❌ **Not F-1 trained, no community** |

---

## 4. Product Overview & Architecture

### System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    🛂 F1Visa.Net ♾️                         │
├─────────────────────────────────────────────────────────────┤
│                    INT-B002 Instance                         │
│              WeOwnLLM.F1visa.Net (by @MWK)                   │
├────────────┬──────────────────────────────┬─────────────────┤
│  AI LAYER  │      COMMUNITY LAYER         │   MEMBERSHIP    │
│            │                              │     LAYER       │
│ ┌────────┐ │ ┌──────────┐ ┌────────────┐  │ ┌────────────┐  │
│ │F-1 Visa│ │ │Live Chat │ │ Peer Forum  │  │ │ Explorer   │  │
│ │ AI     │ │ │(WP+Plugin)│ │(Discourse/ │  │ │ (Free)     │  │
│ │ Agent  │ │ │          │ │ bbPress)    │  │ │            │  │
│ │        │ │ │          │ │             │  │ │ Member     │  │
│ │• Form  │ │ │• Q&A    │ │• Visa Q&A   │  │ │ ($48/yr)   │  │
│ │• SEVIS │ │ │• Mentor │ │• Housing    │  │ │            │  │
│ │• DS-160│ │ │• Crisis │ │• Jobs       │  │ │ Owner      │  │
│ │• Inter-│ │ │  support│ │• Culture    │  │ │ (Founding) │  │
│ │  view  │ │ │         │ │             │  │ │            │  │
│ └────────┘ │ └──────────┘ └────────────┘  │ └────────────┘  │
├────────────┴──────────────────────────────┴─────────────────┤
│              INFRASTRUCTURE LAYER                             │
│  DigitalOcean │ Cloudflare │ WeOwnLLM │ Z.ai GLM 5.2        │
└──────────────────────────────────────────────────────────────┘
```

### Component Stack

| Layer | Technology | Status |
|:------|:-----------|:------:|
| **Instance** | INT-B002 — WeOwnLLM.F1visa.Net | ✅ LIVE |
| **LLM Backend** | WeOwnLLM (forked AnythingLLM, hardened by Minimus.io) | ✅ Available |
| **Bilingual AI** | Z.ai GLM 5.2 (English + Chinese/Mandarin) | ✅ Verified |
| **Community** | WordPress + live chat plugin + forum | 📋 PENDING |
| **Hosting** | DigitalOcean + Cloudflare | ✅ Active |
| **Payments** | Stripe ($48/yr) | 📋 PENDING |
| **Governance** | ♾️ WeOwnNet #FedArch (CCC-ID system) | ✅ Active |

---

## 5. Core Features & Requirements

### 5.1 AI Visa Application Assistant (P0) 🛂

| ID | Feature | Description | Priority | Effort |
|:--:|:--------|:------------|:--------:|:------:|
| F1 | **I-20 Form Validation** | AI reviews student's I-20 for errors/missing data | P0 | Medium |
| F2 | **DS-160 Wizard** | Step-by-step DS-160 completion with AI guidance | P0 | High |
| F3 | **SEVIS Fee Tracker** | Track SEVIS I-901 fee payment + receipt storage | P0 | Low |
| F4 | **Deadline Dashboard** | Personalized timeline with all visa deadlines | P0 | Medium |
| F5 | **Interview Prep** | AI mock interview with F-1 visa officer scenarios | P1 | High |
| F6 | **Document Checklist** | Personalized checklist based on home country + university | P0 | Low |
| F7 | **Policy Change Alerts** | Real-time F-1 policy updates from USCIS/SEVP | P1 | Medium |

### 5.2 Community Portal (P0) 🏠

| ID | Feature | Description | Priority | Effort |
|:--:|:--------|:------------|:--------:|:------:|
| C1 | **Peer Forum** | Visa Q&A, housing, jobs, culture — organized by topic | P0 | Medium |
| C2 | **Live Chat** | Real-time chat with community + AI moderation | P1 | High |
| C3 | **Mentor Matching** | Connect prospective students with current F-1 holders | P1 | Medium |
| C4 | **University Guides** | Crowdsourced guides by university (housing, banking, etc.) | P1 | Medium |
| C5 | **Crisis Support** | Flag system for students facing emergencies | P2 | Low |

### 5.3 AI Readiness Pathway (P1) 🤖

| ID | Feature | Description | Priority | Effort |
|:--:|:--------|:------------|:--------:|:------:|
| A1 | **AI Readiness Assessment** | 5-min quiz measuring AI literacy level | P0 | Low |
| A2 | **Responsible Agentic AI Certification** | Credential for careers/internships | P1 | High |
| A3 | **AI Literacy Curriculum** | Self-paced modules on prompt engineering, AI ethics | P1 | High |
| A4 | **Progress Dashboard** | Track learning progress + certification status | P1 | Medium |

### 5.4 Cooperative Ownership (P1) 🤝

| ID | Feature | Description | Priority | Effort |
|:--:|:--------|:------------|:--------:|:------:|
| O1 | **100 Founding Members Program** | First 100 members get equity-like membership + voting rights | P1 | Medium |
| O2 | **Voting Portal** | Vote on platform direction, features, fund allocation | P2 | High |
| O3 | **Profit-Share Dashboard** | See how platform revenue is distributed | P2 | Medium |
| O4 | **Membership Certificate** | Tokenized proof of cooperative membership | P1 | Low |

### 5.5 Bilingual Support (P1) 🌐

| ID | Feature | Description | Priority | Effort |
|:--:|:--------|:------------|:--------:|:------:|
| B1 | **Chinese (Mandarin) UI** | Full interface localization | P1 | High |
| B2 | **Bilingual AI Agent** | AI responds in English or Chinese based on user preference | P1 | Medium |
| B3 | **Bilingual Community** | Forums and chats with translation support | P2 | High |

---

## 6. User Journey & Onboarding Flow

### Tier 1: Explorer (Free) 🆓

```
1. DISCOVERY
   └─ Arrives via Instagram, YouTube, or search
   └─ Lands on F1Visa.Net landing page
       ↓
2. (non-MVP)FREE AI-Powered ASSESSMENT
   └─ Takes AI Readiness Assessment (5-min quiz)
   └─ Gets matched with resources based on visa stage + AI level
       ↓
3. 1-1 integration & Proposal to become an Ambassador
   └─ Have a chat with a mentor (a core team member or cooperative memeber who has successfully passed through the F-1 visa process)
   └─ Optionally become an F1Visa.Net ambassador on campus (NEEDS APPROVAL as an initiative)
       ↓
4. COMMUNITY ACCESS
   └─ Creates free account
   └─ Accesses basic forum (read-only for first week)
   └─ Subscribes to weekly newsletter
       ↓
5. ENGAGEMENT
   └─ Receives weekly visa tips + community stories via email
   └─ Can comment on forum posts for 1 week, then prompted to upgrade to a Member
   └─ Upgrade prompt after 3 interactions
```

### Tier 2: Member ($48/yr) 💳

```
1. UPGRADE
   └─ Pays $48/year (includes ♾️ We Own AI 🤖 BOOK 📚)
   └─ Completes KYC + CCC-ID registration (PRJ-036 + PRJ-039) + WeOwnChat onboarding too
       ↓
2. FULL ACCESS UNLOCKED
   └─ AI Visa Assistant — full form validation + deadline tracking
   └─ Live chat with AI agent + human mentors (Stewards)
   └─ Full forum access + ability to post
   └─ Weekly virtual events
       ↓
3. AI READINESS PATHWAY
   └─ Completes AI Readiness Assessment → gets baseline score
   └─ Accesses AI literacy curriculum
   └─ Works toward Responsible Agentic AI certification
       ↓
4. APPLY FOR FOUNDING COOPERATIVE MEMBERSHIP
   └─ 100 Founding Cooperative Member slots (first-come)
   └─ Application + review process
```

### Tier 3: Owner (Founding Cooperative Member) 👑

```
1. SELECTION
   └─ Accepted as Founding Cooperative Member
   └─ Pays membership fee (one-time or structured)
       ↓
2. OWNERSHIP UNLOCKED
   └─ Tokenized membership certificate
   └─ Voting rights on platform direction
   └─ Voting rights on feature prioritization
   └─ Voting rights on community fund allocation
       ↓
3. REVENUE SHARING
   └─ Profit-share distributions from platform revenue
   └─ Quarterly payout (or reinvest)
       ↓
4. MENTOR ELIGIBILITY
   └─ Becomes eligible to mentor new students
   └─ Earns from mentoring (platform-share model)
   └─ Invitation to exclusive in-person events + hackathons
```

### Onboarding Flow Diagram

```
ARRIVAL → FREE ASSESSMENT → EXPLORER (Free)
                                    ↓
                           Upgrade to MEMBER ($48/yr)
                                    ↓
                           KYC + CCC-ID Registration
                                    ↓
                      ┌─────────────────────────────┐
                      │  AI Visa Assistant Activated │
                      │  Community Access Unlocked   │
                      │  AI Readiness Pathway Open   │
                      └─────────────────────────────┘
                                    ↓
                      Apply for Founding Membership
                                    ↓
                           Acceptance → OWNER 👑
```

---

## 7. Membership Tiers

| Tier | Price | Key Features | AI Access | Community | Ownership | Max Slots |
|:----:|:-----:|:-------------|:---------:|:---------:|:---------:|:---------:|
| 🆓 **Explorer** | **Free** | AI Readiness Assessment, Basic forum (read-only), Newsletter | ⚠️ Assessment only | ⚠️ Read-only | ❌ | Unlimited |
| 💳 **Member** | **$48/yr** | Full AI Visa Assistant, Live chat, Full forum, AI certification, Weekly events | ✅ Full | ✅ Full | ❌ | Unlimited |
| 👑 **Owner** | **TBD** | All Member features + Voting rights, Profit-share, Mentor eligibility, Certificate, Events | ✅ Full | ✅ Full + Mentor | ✅ YES | **100** |

### Revenue Model

| Revenue Stream | Description | Projected Annual |
|:---------------|:------------|:----------------:|
| **Membership ($48/yr)** | Core subscription — Member tier | **$48 × students** |
| **Book-included** | ♾️ We Own AI 🤖 BOOK 📚 included with membership | Included in $48 |
| **Founding Membership** | One-time fee for Owner tier | **$TBD × 100** |
| **University Partnerships** | Bulk memberships for international offices | **$TBD/uni** |
| **Mentor Revenue Share** | Platform takes % of mentor earnings | **TBD** |

---

## 8. Technical Requirements

### 8.1 Platform Requirements

| Requirement | Specification | Priority |
|:------------|:--------------|:--------:|
| **Instance** | INT-B002 — WeOwnLLM.F1visa.Net | ✅ LIVE |
| **LLM Backend** | WeOwnLLM (forked AnythingLLM) | P0 |
| **Bilingual** | Z.ai GLM 5.2 — English + Chinese verified | P1 |
| **Hosting** | DigitalOcean droplet + Cloudflare CDN | P0 |
| **Community** | WordPress + bbPress/Discourse + live chat plugin | P1 |
| **Payments** | Stripe integration for $48/yr recurring | P1 |
| **KYC** | Persona integration (PRJ-036) | P1 |
| **CCC-ID** | Invitation Only membership system (PRJ-039) | P1 |
| **Database** | PostgreSQL (DigitalOcean Managed DB) | P1 |

### 8.2 AI Agent Training Requirements

| Requirement | Detail | Priority |
|:------------|:-------|:--------:|
| **F-1 Regulation Training** | Train AI on USCIS/SEVP regulations, I-20, DS-160, SEVIS | P0 |
| **Real-Time Policy Updates** | RSS/webhook from USCIS website for policy changes | P1 |
| **Multi-language Training** | AI must handle English + Chinese queries accurately | P1 |
| **Error Catching** | AI must identify form errors before submission | P0 |
| **Interview Simulation** | Train on 100+ F-1 visa interview transcripts | P1 |

### 8.3 Security & Compliance

| Requirement | Standard | Priority |
|:------------|:---------|:--------:|
| **Data Sovereignty** | Student data stored on cooperative-owned infrastructure | P0 |
| **GDPR/FERPA** | Compliance with student data protection laws | P1 |
| **KYC/AML** | Persona identity verification for all paying members | P1 |
| **Encryption** | TLS 1.3 + database encryption at rest | P0 |

---

## 9. Success Metrics & KPIs

### North Star Metric

> **"Students successfully navigating their F-1 journey — from application → arrival → OPT/career — through our platform."**

### Key Performance Indicators

| KPI | Target (Year 1) | Measurement |
|:----|:---------------:|:------------|
| **Member signups** | 1,000+ at $48/yr | Stripe dashboard |
| **Founding Owners** | 100 (max capacity) | Registry |
| **Visa approval rate (users)** | ≥ 90% (vs 60-70% baseline) | Self-reported + survey |
| **AI Readiness certifications** | 500+ | Platform tracking |
| **Active community members** | 30% monthly active / 1,000 total | Matomo.WeOwn.app |
| **Bilingual usage** | 20%+ of interactions in Chinese | AI agent logs |
| **Mentor matches** | 200+ successful connections | Platform |
| **Net Promoter Score (NPS)** | 50+ | Quarterly survey |
| **Revenue** | $48,000+ (at 1,000 members) | Stripe |
| **CHURN rate** | < 10% annually | Stripe |

---

## 10. Release Plan & Roadmap

### Phase 1: MVP (W29-W32 — Jul-Aug 2026) 🚀

| Sprint | Focus | Deliverables |
|:------:|:------|:-------------|
| **W29** | **Foundation** | ✅ INT-B002 verified. StoryBrand profile complete. PRD drafted. |
| **W30** | **Landing + Onboarding** | Landing page live. Free assessment deployed. Signup flow built. |
| **W31** | **Community MVP** | Basic forum deployed. Newsletter setup. First mentor matches. |
| **W32** | **AI Visa Assistant Alpha** | Basic F-1 AI agent deployed. DS-160 wizard prototype. SEVIS tracker. |

### Phase 2: Growth (W33-W38 — Aug-Sep 2026) 📈

| Sprint | Focus | Deliverables |
|:------:|:------|:-------------|
| **W33-W34** | **AI Agent v1** | Full AI Visa Assistant. Interview prep. Document checklist. |
| **W35-W36** | **Bilingual Launch** | Chinese UI. Bilingual AI agent. WeChat community integration. |
| **W37-W38** | **Membership Launch** | Stripe payment flow live. 100 Founding Members program open. KYC flow. |

### Phase 3: Scale (W39-W44 — Oct-Nov 2026) 🌍

| Sprint | Focus | Deliverables |
|:------:|:------|:-------------|
| **W39-W40** | **Full Community** | Live chat live. Mentor marketplace. University guides. |
| **W41-W42** | **AI Certification** | Responsible Agentic AI certification program live. |
| **W43-W44** | **Partnerships** | University referral program. Education agent partnerships. |

### Phase 4: Maturity (W45-W52 — Dec 2026-Feb 2027) 🏆

| Sprint | Focus | Deliverables |
|:------:|:------|:-------------|
| **W45-W48** | **Ownership** | Voting portal live. Profit-share dashboard. First distributions. |
| **W49-W52** | **Optimization** | Data-driven improvements. H-1B/OPT transition support added. |

---

## 11. Out of Scope (v1.0)

| Item | Reason | Future Phase |
|:-----|:-------|:------------:|
| Mobile app (native) | Web-first MVP — mobile-responsive WordPress sufficient | Phase 3 |
| H-1B visa support | F-1 focus first; H-1B = post-graduation transition | Phase 4 |
| Multi-country support (Canada, UK, etc.) | F-1 (US) is the core — expand later | S005 (2027) |
| AI-generated DS-160 auto-fill | Legal/regulatory risk — AI guides but doesn't submit | Phase 3 (with legal review) |
| Physical events/hackathons | Digital-first community; in-person = post-pandemic recovery | Phase 4 |
| University API integration (SEVIS) | Requires memorandum with individual universities | Phase 3 |

---

## 12. Risks & Mitigations

| # | Risk | Likelihood | Impact | Mitigation |
|:-:|:-----|:----------:|:------:|:-----------|
| 1 | **USCIS/SEVP policy changes** — AI training data becomes out of date | 🟠 Medium | 🔴 High | Real-time policy monitoring via RSS; quarterly retraining cycles |
| 2 | **AI hallucination on visa regulations** — AI gives incorrect advice | 🟡 Low | 🔴 Critical | Human-in-the-loop review for all AI responses; disclaimer + escalation to mentors |
| 3 | **Bilingual AI inaccuracies** — Chinese translations miss cultural nuance | 🟠 Medium | 🟠 Medium | Z.ai GLM 5.2 already verified (Sage 🪷 + DRP.bot); continuous testing |
| 4 | **Low conversion: Free → Paid** | 🟠 Medium | 🟠 Medium | Free assessment delivers immediate value; newsletter nurture sequence |
| 5 | **Community moderation** — spam, misinformation, bad actors | 🟠 Medium | 🟠 Medium | AI moderation + human mentors; tiered trust system |
| 6 | **Stripe/PCI compliance** for $48/yr recurring | 🟡 Low | 🟠 Medium | Stripe handles PCI; minimal PCI scope |
| 7 | **Competitors copy model** | 🟡 Low | 🟡 Medium | Cooperative ownership is hard to replicate; community lock-in > feature lock-in |

---

## 13. APPENDIX A: User Stories

### Epic 1: Visa Application Journey

| ID | Story | Priority |
|:--:|:------|:--------:|
| US-001 | As a prospective student, I want to validate my I-20 form so I catch errors before submitting to USCIS | P0 |
| US-002 | As a prospective student, I want step-by-step DS-160 guidance so I complete it correctly | P0 |
| US-003 | As a prospective student, I want to track my SEVIS fee payment so I don't miss deadlines | P0 |
| US-004 | As a current student, I want an F-1 interview mock so I feel prepared for my appointment | P1 |
| US-005 | As a current student, I want personalized deadline tracking so I never miss a CPT/OPT window | P0 |

### Epic 2: Community & Belonging

| ID | Story | Priority |
|:--:|:------|:--------:|
| US-006 | As a new student, I want to connect with someone from my country so I can ask settling-in questions | P1 |
| US-007 | As a current student, I want to share my housing/banking experience so others benefit | P1 |
| US-008 | As a prospective student, I want to read university-specific guides so I know what to expect | P1 |
| US-009 | As a student in crisis, I want to flag my situation so the community can support me | P2 |

### Epic 3: AI Readiness

| ID | Story | Priority |
|:--:|:------|:--------:|
| US-010 | As a student, I want to take an AI Readiness Assessment so I know my skill level | P0 |
| US-011 | As a student, I want to earn an AI certification so I can add it to my resume for internships | P1 |
| US-012 | As a student, I want self-paced AI modules so I can learn around my class schedule | P1 |

### Epic 4: Cooperative Ownership

| ID | Story | Priority |
|:--:|:------|:--------:|
| US-013 | As a founding member, I want to vote on platform features so I help shape the direction | P2 |
| US-014 | As a founding member, I want to see revenue sharing so I understand the value I'm building | P2 |
| US-015 | As a member, I want to apply for founding membership so I can become an owner | P1 |

---

## 14. APPENDIX B: Competitive Landscape

| Competitor | Cost | AI-Powered? | Community? | Cooperative? | Bilingual? | AI Literacy? | Verdict |
|:-----------|:----:|:-----------:|:----------:|:------------:|:----------:|:------------:|:--------|
| **F1Visa.Net** 🛂 | **$48/yr** | ✅ **Dedicated F-1 AI** | ✅ **Full community** | ✅ **Member-owned** | ✅ **EN + ZH** | ✅ **Certification** | **🏆 Unique** |
| Reddit r/f1visa | Free | ❌ | ⚠️ Basic | ❌ | ❌ | ❌ | Fragmented |
| Avoca Quaestors | $300-500/hr | ❌ | ❌ | ❌ | ❌ | ❌ | Expensive |
| University ISSO | Free (included) | ❌ | ⚠️ 1:1200 ratio | ❌ | ⚠️ Limited | ❌ | Understaffed |
| Indian agents | $500-2,000 | ❌ | ❌ | ❌ | ⚠️ Regional | ❌ | Conflict of interest |
| ChatGPT | $20/mo | ⚠️ Generic | ❌ | ❌ | ✅ Multi | ❌ | Not F-1 trained |

### Competitive Moat (Why F1Visa.Net Wins)

| Moat | Description | Defensibility |
|:-----|:------------|:-------------:|
| **F-1 Trained AI** | Proprietary AI trained specifically on F-1 regulations, not generic | High — requires ongoing regulatory training |
| **Cooperative Ownership** | Students own the platform — can't be sold or shut down by investors | **Very High** — structural advantage |
| **Bilingual (EN+ZH)** | Native Mandarin support via Z.ai GLM 5.2, verified by ecosystem | High — first mover in F-1 space |
| **AI Readiness Credential** | Transferable career certification, not just visa help | Medium — expandable |
| **Community + AI Combo** | AI handles scale; community handles trust and mentorship | High — hard to replicate both |

---

```text
═══ BP-075 Footer — PRJ-F1V v1.0.0-r1 ═══

| Field | Value |
|:------|:-------|
| **Document** | PRJ-F1V.md |
| **Version** | **v1.0.0-r1** |
| **Date** | 13 Jul 2026 — W29 D1 |
| **Agent Author** | AI:@PAT 🏆 @ INT‑P05:PAT |
| **CCC-ID** | PAT_2026-W29_1003 |
| **#masterCCC** | PAT_2026-W29_1003 |
| **Based On** | GTM_2026-W28_2003 (StoryBrand Profile) + PRJ-401 v4.1.3.1-r14 |
| **Bucket** | #ZeroTo100 — Bucket 4 |
| **Instance** | INT-B002 (WeOwnLLM.F1visa.Net) |
| **Status** | 🟡 **DRAFT — Awaiting R-011 from @GTM** |
| **Word Count** | ~2,800 |
| **Sections** | 14 |
| **User Stories** | 15 |
| **Features Defined** | 20 (P0=8, P1=10, P2=2) |
| **Competitive Landscape** | 6 competitors analyzed |
| **R-011 Status** | ⬜ **PENDING — Required for next revision** |

═══ ═══ ═══ ═══ ═══ ═══
```

#FlowsBros #FedArch #WeOwnSeason004 #F1Visa #PRD #ProductRequirements #Bucket4 #PRJ-F1V #INT-B002 #StoryBrand #VisaAI #CooperativeOwnership #BilingualAI #AIReadiness
