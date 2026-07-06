# F1visa.Net

The marketing/community site for [F1visa.Net](https://f1visa.net) — "Your F1 Journey, Together." A community-owned resource that connects F1 visa applicants with students who've been through the process, built with [EmDash](https://github.com/emdash-cms/emdash) and deployed on Cloudflare Workers with D1.

## Pages

| Page | Route | Status |
|---|---|---|
| Homepage | `/` | Live — hero, features, testimonials, FAQ |
| About | `/about` | Live — mission, how it works, core values |
| Resources | `/resources` | Live — "coming soon" placeholder for guides/checklists |
| Contact | `/contact` | Live — working contact form (name, email, university, message) |
| 404 | fallback | Live |

The footer also links to `/success-stories`, `/privacy`, `/terms`, and `/disclaimer`, but none of these pages exist yet — they currently return 404. `/#faq` and `/#features` are anchors into homepage sections and work correctly.

## Navigation

- **Top nav:** Community (external), Resources, About, Contact
- **"Join the Community" CTA:** links out to [community.f1visa.net](https://community.f1visa.net), a separate FluentCommunity-powered forum (membership, social feed, discussion spaces)
- **Footer columns:** Community (Forum, Resources, Success Stories, FAQ), About (Our Mission, How It Works, Contact), Legal (Privacy Policy, Terms of Use, Disclaimer) — see the broken-link note above

Nav and footer menus are content-managed (EmDash `menus`), not hardcoded in `src/layouts/Base.astro` — edit them via the admin panel or `seed/seed.json`.

## Admin

The EmDash admin panel is at [`/_emdash/admin`](https://f1visa.net/_emdash/admin) for managing pages, menus, and media.

## Features

- Hero, feature grid, testimonials, and FAQ blocks on the homepage
- Contact form with validation
- SEO metadata and JSON-LD
- Dark/light mode
- Content-managed pages and navigation via EmDash

## Infrastructure

- **Runtime:** Cloudflare Workers
- **Framework:** Astro (`output: "server"`) with `@astrojs/cloudflare`
- **Database:** D1 (`f1visa-www`), bound as `DB`
- **Sessions:** Cloudflare KV, bound as `SESSION`
- **Scheduled tasks:** Cron Trigger (`* * * * *`) drives scheduled publishing and plugin maintenance
- **Media storage:** local filesystem adapter (placeholder) — R2 isn't enabled on the Cloudflare account yet, so media uploads won't persist in production until this is swapped for `r2()` in `astro.config.mjs`

## Local Development

```bash
npm install
npm run dev
```

## Deploying

```bash
npm run build
npx wrangler deploy
```

## Related Links

- Live site: https://f1visa.net
- Community forum: https://community.f1visa.net
- Admin panel: https://f1visa.net/_emdash/admin
- [EmDash documentation](https://github.com/emdash-cms/emdash/tree/main/docs)
