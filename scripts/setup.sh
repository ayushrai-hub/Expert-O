#!/bin/bash
# Expert-O development setup — frontend + API

set -e

echo "Setting up Expert-O..."

if ! command -v node &> /dev/null; then
  echo "Node.js is required (18+)."
  exit 1
fi

NODE_MAJOR=$(node -v | sed 's/v\([0-9]*\).*/\1/')
if [ "$NODE_MAJOR" -lt 18 ]; then
  echo "Node.js 18+ required (found $(node -v))."
  exit 1
fi

echo "Node $(node -v) | npm $(npm -v)"

echo "Installing frontend dependencies..."
npm install

echo "Installing API dependencies..."
(cd api && npm install)

if [ ! -f .env.local ]; then
  cp .env.example .env.local
  echo "Created .env.local from .env.example"
fi

if [ ! -f api/.env ]; then
  cp api/.env.example api/.env
  echo "Created api/.env from api/.env.example"
fi

echo "Setup complete."
echo ""
echo "Start servers:"
echo "  npm run dev        # frontend → http://localhost:5173"
echo "  npm run dev:api    # API      → http://localhost:3001"
echo ""
echo "Docs: docs/LOCAL_DEVELOPMENT.md"
