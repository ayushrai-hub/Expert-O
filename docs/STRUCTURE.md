# Repository Structure

```
Expert-O/
├── .github/workflows/      # ci.yml, deploy.yml
├── api/                    # Optional Express scaffolding (not used by live SPA)
├── docs/
├── public/                 # favicon, robots.txt, sitemap.xml
├── scripts/setup.sh
├── src/
│   ├── App.tsx             # Public routes + Vercel Analytics / Speed Insights
│   ├── features/landing/   # Marketing site
│   └── shared/
│       ├── contexts/ThemeContext.tsx
│       ├── navigation/
│       └── ui/
├── package.json
├── vercel.json
└── vite.config.ts
```

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Vite frontend |
| `npm run build` | Production SPA |
| `npm run type-check` | `tsc --noEmit` |
| `npm test` | Jest |

See [LOCAL_DEVELOPMENT.md](./LOCAL_DEVELOPMENT.md) and [DEPLOYMENT.md](./DEPLOYMENT.md).
