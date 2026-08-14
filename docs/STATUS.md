# Expert-O status

What the codebase ships today (August 2026).

## Product

Expert-O is a **public marketing site** for a polymath collective. There is **no sign-in / account product** on the live site.

| Surface | Status |
|---------|--------|
| Public site | Live — story, pillars, capabilities, engagement patterns, pricing, mailto intake |
| Explore pages | `/our-story`, `/services`, `/portfolio`, `/pricing` |
| Auth / dashboard | Removed from the frontend |
| Analytics | Vercel Analytics + Speed Insights |
| Production | SPA on Vercel |

## Frontend layout

- `src/features/landing` — copy, sections, forms, pages
- `src/shared` — navigation, ThemeContext, GlobalNavbar, RootLayout, ErrorBoundary

The `api/` folder remains in the repository as optional backend scaffolding but is **not** wired into the deployed SPA.

## Contact / join

Forms open the visitor’s mail client (`hello@expert-o.com`). No lead API is connected yet.

See [STRUCTURE.md](./STRUCTURE.md), [LOCAL_DEVELOPMENT.md](./LOCAL_DEVELOPMENT.md), [DEPLOYMENT.md](./DEPLOYMENT.md).
