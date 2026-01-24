#!/bin/bash

# Expert-O Project Setup Script
# This script sets up the development environment for Expert-O

set -e

echo "🚀 Setting up Expert-O development environment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ and try again."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version $NODE_VERSION is not supported. Please upgrade to Node.js 18 or higher."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm and try again."
    exit 1
fi

echo "✅ npm version: $(npm -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create environment file if it doesn't exist
if [ ! -f ".env.local" ]; then
    echo "📝 Creating .env.local from template..."
    cp .env.example .env.local
    echo "⚠️  Please edit .env.local with your configuration"
fi

# Run initial checks
echo "🔍 Running initial checks..."
npm run lint
npm run type-check

echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env.local with your configuration"
echo "2. Run 'npm run dev' to start the development server"
echo "3. Run 'npm test' to run the test suite"
echo ""
echo "Happy coding! 🎉"