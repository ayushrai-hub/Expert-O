# Local Development Guide

Run the Expert-O frontend and API on your machine.

## Prerequisites

- **Node.js 18+** (Node 20/22 work; native `sqlite3` needs a working node-gyp toolchain)
- **npm**
- **Git**
- Python build tools if `sqlite3` must compile from source (macOS: Xcode CLT)

## Quick start (two processes)

### 1. Clone and install

```bash
git clone https://github.com/ayushrai-hub/Expert-O.git
cd Expert-O
npm run setup
```

If `sqlite3` fails to build (common on newer Python without `distutils`):

```bash
cd api
npm install --ignore-scripts
npm rebuild sqlite3
cd ..
```

### 2. Environment files

`npm run setup` creates these if missing.

**Frontend** — `.env.local` (from `.env.example`):

```env
VITE_API_URL=http://localhost:3001/api
VITE_APP_ENV=development
VITE_MOCK_API=false
VITE_DEBUG_LOGS=true
```

`src/services/api.ts` reads `VITE_API_URL` (falls back to `http://localhost:3001/api`).

**API** — `api/.env` (from `api/.env.example`):

```env
PORT=3001
NODE_ENV=development
DATABASE_PATH=./expert-o.db
JWT_SECRET=change-me-in-local-dev
JWT_EXPIRES_IN=24h
FRONTEND_URL=http://localhost:5173
```

Email vars (`EMAIL_USER`, `EMAIL_APP_PASSWORD`) are only required for password-reset emails.

### 3. Start servers

```bash
npm run dev        # frontend → http://localhost:5173
npm run dev:api    # API → http://localhost:3001
```

Health: `GET http://localhost:3001/api/health`

## What runs locally

| Service   | URL                         | Stack                          |
|-----------|-----------------------------|--------------------------------|
| Frontend  | http://localhost:5173       | React 18, Vite, Tailwind       |
| API       | http://localhost:3001/api   | Express, TypeScript, SQLite    |
| Database  | `api/expert-o.db`           | SQLite file (auto-created)     |

## Auth smoke test

Roles must be uppercase: `ADMIN` | `CLIENT` | `TALENT`.

```bash
# Register
curl -s -X POST http://localhost:3001/api/auth/register \
  -H 'Content-Type: application/json' \
  -d '{"name":"Dev User","email":"dev@example.com","password":"TestPass123!","role":"CLIENT"}'

# Login
curl -s -X POST http://localhost:3001/api/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"email":"dev@example.com","password":"TestPass123!"}'

# Health
curl -s http://localhost:3001/api/health
```

Then open http://localhost:5173/login and sign in with the same credentials.

## Frontend routes

| Path                 | Access      | Notes                          |
|----------------------|-------------|--------------------------------|
| `/`                  | Public      | Landing page                   |
| `/login`             | Public      | Login                          |
| `/register`          | Public      | Register                       |
| `/forgot-password`   | Public      | Request reset                  |
| `/reset-password`    | Public      | Apply reset token              |
| `/dashboard`         | Protected   | Requires auth + role dashboard |

## Available scripts

**Root (frontend)**

```bash
npm run dev
npm run build
npm run preview
npm test
npm run test:coverage
npm run lint
```

**API (`api/`)**

```bash
npm run dev      # nodemon + ts-node
npm run build    # tsc → dist/
npm start        # node dist/index.js
npm test
```

## Common issues

| Symptom | Fix |
|---------|-----|
| `vite: command not found` | Run `npm install` in repo root |
| `sqlite3` / `node-gyp` / `distutils` errors | `npm rebuild sqlite3` in `api/`, or install Xcode CLT |
| CORS errors from browser | Ensure API `FRONTEND_URL=http://localhost:5173` |
| Login fails after register | Use role `CLIENT`/`ADMIN`/`TALENT` (not lowercase) |
| SPA deep links 404 on Vercel | Use `vercel.json` rewrites (see [DEPLOYMENT.md](./DEPLOYMENT.md)) |

## Project layout (local-relevant)

See [STRUCTURE.md](./STRUCTURE.md) for the full tree. Short version:

```
src/components/{auth,dashboard,landing,ui}/
api/                     # Express + SQLite (local *.db gitignored)
docs/                    # Documentation
scripts/setup.sh
```
