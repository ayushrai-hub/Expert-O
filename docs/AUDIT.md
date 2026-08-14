# Expert-O product audit log

Working log from the August 14, 2026 full-product pass.

## Severity key

Critical · High · Medium · Low · Polish

| Area | Finding | Severity | Evidence | Fix | Status |
|------|---------|----------|----------|-----|--------|
| Runtime | App wired to broken `src/components` tree (missing ThemeContext/types) | Critical | Vite resolve errors; App imports | Point App at `features` + `shared` | Fixed |
| Structure | Dual frontend trees mid-migration | High | `components/*` vs `features/*` | Delete legacy `components`/`contexts`/`services` | Fixed |
| Auth | JWT secret default `'your-secret-key'` | Critical | `api/src/utils/auth.ts` | Require strong secret at boot | Fixed |
| Auth | Self-serve `ADMIN` registration | High | Joi `.valid('ADMIN',…)` | CLIENT/TALENT only | Fixed |
| Auth | Session restore from localStorage without verify | High | AuthContext bootstrap | Require verify-token | Fixed |
| Auth | Rate limit on verify-token (5/15m) | Medium | `router.use(authLimiter)` | Limiter only on mutating auth routes | Fixed |
| Content | Fake stats / ROI / blog / demo creds | High | Hero/Portfolio/Blog/Login | Ship `sections`/`forms`; remove fake files | Fixed |
| IA | Explore pages declared but unrouted | High | `siteNavigation` vs App | Mount `/our-story|services|portfolio|pricing` | Fixed |
| SEO | No meta/OG/robots/sitemap/favicon | Medium | `index.html`, empty public | Added | Fixed |
| Forms | console.log-only lead capture | Medium | ClientForm/JoinForm | Mailto forms with honest copy | Fixed |
| Dashboard | Mock admin boards presented as product | High | components dashboard | Honest account page in features | Fixed (prior + kept) |
| Deploy | Production SPA without API | High | Vercel-only | Documented; not “fixed” by hosting | Remaining |
| Tests | Jest workers OOM / hang under parallel load | Medium | Local runs | `--runInBand`; leaner tests | Partial |
| Lint | Full eslint suite not re-run this pass | Low | — | Run before merge | Remaining |

## Checks performed

| Check | Result |
|-------|--------|
| `npm run type-check` | Pass |
| `npm run build` | Pass (~328KB JS gzip ~103KB) |
| Landing section/form tests | Pass |
| mobileNav explore routing | Pass |
| Auth Forgot/Register/Reset tests | Pass |
| Login tests | Updated; label quirks addressed |
| ProtectedRoute token trust test | Updated for verify requirement |
| Manual `localhost:5173` | 200; new document title |
| API `/api/health` | Depends on local API process; code compiles via `api` tsc |

## Product identity (from implementation)

Expert-O is a **polymath collective marketing site** with **JWT account auth**. Primary visitor actions: understand the collective, start a conversation (mailto), apply to join. Authenticated users reach an honest account home—not a fabricated marketplace.
