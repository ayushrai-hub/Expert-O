# Deployment & Live Environment

## Current production

| Item | Value |
|------|--------|
| **Live URL** | https://expert-o.vercel.app |
| **Repository** | https://github.com/ayushrai-hub/Expert-O |
| **Hosting** | Vercel (static Vite SPA) |
| **Product** | Public marketing site (no sign-in) |

## Analytics & insights

Mounted in `src/App.tsx`:

- `@vercel/analytics` — Web Analytics
- `@vercel/speed-insights` — Speed Insights / CWV

Enable both in the Vercel project → Analytics / Speed Insights if the dashboard still shows them as off.

## Deploy pipeline

GitHub Actions: `.github/workflows/deploy.yml` on push to `main` (Vercel action + secrets).

Manual:

```bash
npm ci
npm run build
# push to main, or:
npx vercel --prod
```

SPA rewrites: `vercel.json` → all paths to `index.html`.

## Verifying a deploy

```bash
curl -sI https://expert-o.vercel.app | head -20
curl -s https://expert-o.vercel.app | rg -o '<title>[^<]+'
curl -s -o /dev/null -w "%{http_code}\n" https://expert-o.vercel.app/login   # should serve SPA (no auth UI)
curl -s -o /dev/null -w "%{http_code}\n" https://expert-o.vercel.app/services
```
