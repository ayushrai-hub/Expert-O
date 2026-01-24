# Root Folder Organization

This document outlines the organized structure of the Expert-O project root folder.

## 📁 Directory Structure

```
Expert-O/
├── 📁 .cursor/                    # IDE-specific configurations
├── 📁 .github/                    # GitHub workflows and automation
│   └── workflows/
│       ├── ci.yml                # Continuous Integration
│       └── deploy.yml            # Production deployment
├── 📁 .husky/                     # Git hooks for code quality
├── 📁 archive/                    # Archived project files
│   ├── README.md                 # Archive documentation
│   └── projects/
│       └── old-epoo/             # Previous project version
├── 📁 config/                     # Additional configuration files
├── 📁 docs/                       # Project documentation
├── 📁 scripts/                    # Utility scripts
│   └── setup.sh                  # Development environment setup
├── 📁 src/                        # Source code
├── 📄 .env.example               # Environment variables template
├── 📄 .gitignore                 # Git ignore rules
├── 📄 CODEBASE_IMPROVEMENT_PLAN.md # Project planning
├── 📄 CONTRIBUTING.md            # Contribution guidelines
├── 📄 LICENSE                    # MIT License
├── 📄 PULL_REQUEST_TEMPLATE.md   # PR template
├── 📄 CODE_OF_CONDUCT.md         # Code of conduct
├── 📄 README.md                  # Main project documentation
├── 📄 eslint.config.js           # ESLint configuration
├── 📄 index.html                 # HTML entry point
├── 📄 openmemory.md              # Memory system
├── 📄 package-lock.json          # Locked dependencies
├── 📄 package.json               # Project configuration
├── 📄 postcss.config.js          # PostCSS configuration
├── 📄 tailwind.config.js         # Tailwind CSS configuration
├── 📄 tsconfig.app.json          # TypeScript app config
├── 📄 tsconfig.json              # TypeScript root config
├── 📄 tsconfig.node.json         # TypeScript node config
└── 📄 vite.config.ts             # Vite configuration
```

## 📋 Organization Principles

### 1. **Standard Project Files**
- **LICENSE**: MIT license for open source projects
- **CONTRIBUTING.md**: Guidelines for contributors
- **CODE_OF_CONDUCT.md**: Community behavior standards
- **PULL_REQUEST_TEMPLATE.md**: Template for PRs

### 2. **GitHub Integration**
- **.github/workflows/**: CI/CD pipelines and automation
- Automated testing, security scanning, and deployment

### 3. **Documentation**
- **docs/**: Comprehensive project documentation
- **archive/README.md**: Archive directory documentation

### 4. **Development Tools**
- **scripts/**: Utility scripts for development
- **config/**: Additional configuration files
- **.env.example**: Environment setup template

### 5. **Archived Content**
- **archive/projects/**: Organized historical project files
- Clear documentation of what's archived and why

## 🚀 Quick Start

1. **Setup Development Environment**
   ```bash
   ./scripts/setup.sh
   ```

2. **Start Development**
   ```bash
   npm run dev
   ```

3. **Run Tests**
   ```bash
   npm test
   ```

## 📝 Notes

- All directories and files follow consistent naming conventions
- Hidden directories (.cursor, .github, .husky) contain tool-specific configurations
- Archive directory is clearly documented and organized
- Standard GitHub files improve project maintainability
- Utility scripts automate common development tasks

## 🔧 Maintenance

- Keep the archive directory updated when archiving new projects
- Update scripts/setup.sh when dependencies change
- Review and update documentation regularly
- Follow the established naming conventions for new files