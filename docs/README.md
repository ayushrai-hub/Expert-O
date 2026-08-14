# Expert-O Documentation

Index of all project documentation.

## Directory structure

```
docs/
├── README.md                         # This index
├── STRUCTURE.md                      # Canonical repo layout
├── LOCAL_DEVELOPMENT.md              # Run frontend + API locally
├── DEPLOYMENT.md                     # Live URL, Vercel, CI
├── PRD.md                            # Product Requirements Document
├── concept.md                        # The Five Pillars of Expert-O
├── CODEBASE_IMPROVEMENT_PLAN.md      # Technical improvement roadmap
├── DESIGN_SYSTEM_IMPLEMENTATION.md   # Design system guide
├── IMPLEMENTATION_SUMMARY.md         # Recent implementation summary
└── guides/
    ├── AUTHENTICATION_GUIDE.md
    ├── FEATURE_IMPLEMENTATION_GUIDE.md
    ├── STITCH_DESIGN_PROMPT.md
    └── windsurf_coding_standards.md
```

## Start here

1. **[STRUCTURE.md](./STRUCTURE.md)** — where files live
2. **[LOCAL_DEVELOPMENT.md](./LOCAL_DEVELOPMENT.md)** — get the app running
3. **[DEPLOYMENT.md](./DEPLOYMENT.md)** — production URL and deploy pipeline
4. **[concept.md](./concept.md)** — product philosophy (Five Pillars)
5. **[PRD.md](./PRD.md)** — feature scope and architecture intent
6. **[guides/AUTHENTICATION_GUIDE.md](./guides/AUTHENTICATION_GUIDE.md)** — auth implementation

## Live environment

- **Production SPA:** https://expert-o.vercel.app
- **Repo:** https://github.com/ayushrai-hub/Expert-O
- Production currently deploys the **Vite frontend only**; the Express API in `api/` runs separately (local default `:3001`).

## Core docs

### [STRUCTURE.md](./STRUCTURE.md)
Canonical repository layout after consolidation (`landing/`, `ui/`, `api/`, docs-only policy).

### [LOCAL_DEVELOPMENT.md](./LOCAL_DEVELOPMENT.md)
Install, env files, two-process setup, auth smoke tests, common failures.

### [DEPLOYMENT.md](./DEPLOYMENT.md)
Current Vercel URL, GitHub Actions deploy, SPA rewrites, API hosting gap.

### [PRD.md](./PRD.md)
Product overview, feature requirements, intended architecture and roadmap.

### [concept.md](./concept.md)
Five Pillars: Polymaths in Action, Excellence Every Day, Ownership with Trust, Speed with Purpose, Humans First Always.

### [CODEBASE_IMPROVEMENT_PLAN.md](./CODEBASE_IMPROVEMENT_PLAN.md)
Technical debt and improvement roadmap.

### [DESIGN_SYSTEM_IMPLEMENTATION.md](./DESIGN_SYSTEM_IMPLEMENTATION.md)
Minimal light design system (neutral grays, compact components, dark-mode notes).

### [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)
Recent implementation updates and migrations.

## Guides

| Guide | Topic |
|-------|--------|
| [AUTHENTICATION_GUIDE.md](./guides/AUTHENTICATION_GUIDE.md) | Auth context, routes, session |
| [FEATURE_IMPLEMENTATION_GUIDE.md](./guides/FEATURE_IMPLEMENTATION_GUIDE.md) | Adding features the Expert-O way |
| [STITCH_DESIGN_PROMPT.md](./guides/STITCH_DESIGN_PROMPT.md) | UI consistency prompts |
| [windsurf_coding_standards.md](./guides/windsurf_coding_standards.md) | Coding standards |

## Keeping docs current

1. Put core docs in `docs/`
2. Put how-tos in `docs/guides/`
3. Update this index when adding files
4. Prefer documenting **what the code does today** over aspirational APIs
5. Link related docs

## Standards

- Markdown with clear headings
- Code samples for real commands/paths
- Call out gaps (e.g. unimplemented project CRUD)
- No secrets in docs (use placeholders)

---

**Last Updated:** August 13, 2026  
**Maintained By:** Expert-O Development Team
