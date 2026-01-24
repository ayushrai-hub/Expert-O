# Expert-O Project Memory

This document serves as the living index and architectural guide for the Expert-O platform. It captures the project's structure, key patterns, and organizational principles.

**Last Updated:** January 19, 2026

---

## 📋 Project Overview

**Project Name:** Expert-O  
**Type:** Professional Portfolio & Service Platform for Elite Polymaths  
**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS  
**Philosophy:** The Five Pillars (Polymaths, Excellence, Ownership, Speed, Humans First)

Expert-O is a modern, full-stack platform connecting elite talent with visionary clients for groundbreaking projects. It emphasizes polymath capabilities, rapid execution with AI augmentation, and human-centric values.

---

## 🏗️ Project Architecture

### Directory Structure

```
Expert-O/
├── src/                    # Source code
│   ├── components/         # React components (feature-based)
│   │   ├── auth/          # Authentication components
│   │   ├── dashboard/     # Dashboard components (Admin, Client, Talent)
│   │   ├── __tests__/     # Component unit tests
│   │   └── *.tsx          # Landing page components
│   ├── contexts/          # React Context providers (AuthContext)
│   ├── types/             # TypeScript type definitions
│   ├── App.tsx            # Main app component with routing
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles (Tailwind)
│
├── docs/                   # All project documentation
│   ├── PRD.md             # Product Requirements Document
│   ├── concept.md         # The Five Pillars philosophy
│   ├── CODEBASE_IMPROVEMENT_PLAN.md
│   └── guides/            # Implementation guides
│       ├── AUTHENTICATION_GUIDE.md
│       ├── FEATURE_IMPLEMENTATION_GUIDE.md
│       ├── STITCH_DESIGN_PROMPT.md
│       └── windsurf_coding_standards.md
│
├── archive/               # Archived/deprecated code
│   └── new-epoo/         # Previous implementation attempt
│
├── Config Files (root)    # Build and tooling configuration
│   ├── package.json       # Dependencies and scripts
│   ├── vite.config.ts     # Vite build configuration
│   ├── tsconfig.json      # TypeScript configuration
│   ├── tailwind.config.js # Tailwind CSS theme
│   ├── eslint.config.js   # ESLint rules
│   └── postcss.config.js  # PostCSS plugins
│
└── openmemory.md          # This file - project memory

Coverage reports (gitignored) → coverage/
```

### Key Architectural Decisions

1. **Component Organization:** Feature-based grouping (auth/, dashboard/) rather than type-based (pages/, layouts/)
2. **State Management:** React Context API for global state (Auth), local state for component-specific needs
3. **Routing:** React Router with role-based protected routes
4. **Styling:** Tailwind CSS utility-first approach with custom theme configuration
5. **Testing:** Jest + React Testing Library, co-located tests in `__tests__/` directories
6. **Form Handling:** React Hook Form with Yup validation

---

## 🎯 User Defined Namespaces

*This section is for user-defined memory namespaces. Add relevant domains below:*

- frontend
- auth
- dashboard
- documentation

---

## 🧩 Core Components

### Authentication System
**Location:** `src/components/auth/`  
**Purpose:** Handle user authentication and authorization  
**Components:**
- `Login.tsx` - Login form with validation
- `Register.tsx` - User registration form
- `ForgotPassword.tsx` - Password reset request
- `ResetPassword.tsx` - Password reset form
- `ProtectedRoute.tsx` - Route guard for authenticated users

**Key Features:**
- Role-based access (Admin, Client, Talent)
- Form validation with React Hook Form + Yup
- Session persistence with localStorage
- Protected route wrapper

**State:** Managed via `AuthContext` in `src/contexts/AuthContext.tsx`

### Dashboard System
**Location:** `src/components/dashboard/`  
**Purpose:** Role-specific dashboards for users  
**Components:**
- `Dashboard.tsx` - Main dashboard wrapper
- `DashboardLayout.tsx` - Layout container with navigation
- `AdminDashboard.tsx` - Admin-specific features
- `TalentProfile.tsx` - Talent profile management
- `ProjectManagement.tsx` - Project lifecycle management
- `CommunicationSystem.tsx` - Messaging and collaboration

**Routing:** Different dashboard views based on user role from AuthContext

### Landing Page Components
**Location:** `src/components/`  
**Purpose:** Public-facing marketing and information pages  
**Components:**
- `Hero.tsx` - Hero section with CTA
- `FivePillars.tsx` - Philosophy showcase
- `Services.tsx` - Service offerings
- `Portfolio.tsx` - Project showcase
- `OurStory.tsx` - Company narrative
- `Pricing.tsx` - Pricing tiers
- `Blog.tsx` - Content/blog section
- `Contact.tsx` - Contact information
- `ClientForm.tsx` - Client inquiry form
- `JoinForm.tsx` - Talent application form

**Assembly:** Combined in `LandingPage.tsx` wrapper component

### Utility Components
**Location:** `src/components/`  
**Purpose:** Reusable UI and utility components  
**Components:**
- `ErrorBoundary.tsx` - Error boundary wrapper
- `Loading.tsx` - Loading states
- `Skeleton.tsx` - Skeleton loaders
- `AIWorkflow.tsx` - AI workflow demonstration

---

## 🔧 Technical Patterns

### Component Structure Pattern
```typescript
// Standard component structure
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ComponentName = () => {
  // 1. Hooks (state, context, navigation)
  const [state, setState] = useState();
  const navigate = useNavigate();
  
  // 2. Handlers and logic
  const handleAction = () => { /* ... */ };
  
  // 3. Render with Tailwind classes
  return (
    <div className="container mx-auto">
      {/* Component content */}
    </div>
  );
};
```

### Form Validation Pattern
```typescript
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  field: yup.string().required('Error message')
});

export const FormComponent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  
  const onSubmit = (data) => { /* ... */ };
  
  return <form onSubmit={handleSubmit(onSubmit)}>...</form>;
};
```

### Protected Route Pattern
```typescript
import { ProtectedRoute } from '@/components/auth';

// In routing configuration
<Route path="/dashboard" element={
  <ProtectedRoute allowedRoles={['admin', 'client', 'talent']}>
    <Dashboard />
  </ProtectedRoute>
} />
```

### Testing Pattern
```typescript
// Co-located in __tests__/ directories
import { render, screen } from '@testing-library/react';
import { Component } from '../Component';

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

---

## 📦 Key Dependencies

### Production
- **react** (18.3.1) - UI library
- **react-router-dom** (7.8.0) - Routing
- **react-hook-form** (7.62.0) - Form handling
- **yup** (1.7.0) - Validation schemas
- **@tanstack/react-query** (5.85.0) - Server state management
- **lucide-react** (0.344.0) - Icon library

### Development
- **vite** (5.4.2) - Build tool
- **typescript** (5.5.3) - Type safety
- **tailwindcss** (3.4.1) - Styling
- **jest** (29.7.0) - Testing framework
- **@testing-library/react** (14.2.1) - Component testing
- **eslint** (9.9.1) - Code linting
- **husky** (9.0.11) - Git hooks

---

## 🚀 Development Workflow

### Available Scripts
```bash
npm run dev              # Start dev server (Vite)
npm run build            # Production build
npm run preview          # Preview build
npm test                 # Run tests (Jest)
npm run test:watch       # Watch mode
npm run test:coverage    # Coverage report
npm run lint             # Run ESLint
```

### Git Workflow
- **Main branch:** Production-ready code
- **Feature branches:** `feature/*`
- **Bugfix branches:** `bugfix/*`
- **Commit convention:** Conventional commits (feat, fix, docs, style, refactor, test, chore)

### File Organization Principles
1. **Feature-based structure** - Group by domain/feature, not file type
2. **Co-located tests** - Tests in `__tests__/` next to source
3. **Centralized docs** - All documentation in `/docs`
4. **Archive old code** - Don't delete, move to `/archive` with README
5. **Config at root** - Build and tool config files at project root
6. **Explicit exports** - Use index.ts for clean imports

---

## 🎨 Design System

### Design Philosophy (Updated: Jan 19, 2026)
**User Preference:** Minimal, clean, professional design that avoids "AI-generated" aesthetics

**Core Principles:**
1. **Minimal & Clean** - Avoid heavy gradients, excessive animations, or flashy effects
2. **Small Components** - Compact buttons, cards, and UI elements with reduced padding
3. **Interactive but Subtle** - Hover states and interactions without scale transforms or dramatic effects
4. **Professional Color Palette** - Neutral grays (white, gray-50/100/200 backgrounds) with single accent color (gray-900 for primary actions)

### Color Palette (Revised)
- **Primary:** Gray-900 (#111827) for buttons and primary actions
- **Background:** White (#FFFFFF) with gray-50 (#F9FAFB) sections
- **Text:** Gray-900 (#111827) for headings, gray-600 (#4B5563) for body, gray-500 (#6B7280) for secondary
- **Borders:** Gray-200 (#E5E7EB) for primary, gray-300 (#D1D5DB) for hover states
- **Interactive:** Subtle hover states (border-gray-300, bg-gray-50/100/200)

### Component Size Standards
- **Buttons:** `px-4 py-1.5` to `px-5 py-2` (small, compact)
- **Cards:** `p-5` to `p-6` (reduced from p-8/p-12)
- **Spacing:** `gap-4` to `gap-6` (tighter grids)
- **Text Sizes:** `text-xs` (12px), `text-sm` (14px), `text-base` (16px) for most content
- **Icons:** `size={14}` to `size={20}` (smaller, proportional)
- **Section Padding:** `py-12` to `py-16` (reduced from py-24)

### Component Styling Patterns
- **Buttons:** Solid colors (no gradients), `bg-gray-900 hover:bg-gray-800`, rounded corners
- **Forms:** Light theme, `border-gray-300`, subtle focus states `focus:border-gray-400`
- **Cards:** White background, `border border-gray-200`, `hover:border-gray-300 hover:shadow-sm`
- **Navigation:** Light header, `bg-white/80 backdrop-blur-sm`, `border-b border-gray-200`
- **Layout:** Mobile-first responsive, clean white space, no blur effects or gradients

### What to Avoid
- ❌ Blue-purple gradients (`from-blue-400 to-purple-500`)
- ❌ Large padding (`p-8`, `p-12`, `px-8 py-4`)
- ❌ Scale transforms on hover (`hover:scale-105`)
- ❌ Glow effects and blur backgrounds (`blur-3xl`, `backdrop-blur`)
- ❌ Animated pulse effects and dramatic animations
- ❌ Large text sizes (`text-4xl`, `text-6xl`)
- ❌ Rounded-full buttons (use regular `rounded` instead)

### Tailwind Configuration
Custom theme extends with brand colors, spacing scale, and typography settings. See `tailwind.config.js` for full configuration.

---

## 📚 Documentation

All documentation lives in `/docs`:
- **Core:** PRD, Concept (Five Pillars), Improvement Plan
- **Guides:** Authentication, Feature Implementation, Design, Standards
- **Index:** `/docs/README.md` with full documentation map

See [docs/README.md](./docs/README.md) for complete documentation index.

---

## 🔐 Security & Best Practices

### Current Implementation
- Client-side form validation (React Hook Form + Yup)
- Protected routes with role-based access control
- Environment variable management (.env files gitignored)
- Secure password handling (not stored in localStorage)

### Future Enhancements
- Backend API integration with JWT authentication
- Rate limiting on auth endpoints
- Input sanitization and XSS prevention
- CORS and CSRF protection

---

## 📈 Performance Considerations

- **Code Splitting:** Route-based lazy loading (planned)
- **Bundle Size:** Monitoring with Vite build analyzer
- **Lighthouse Score:** Target 90+ across all categories
- **Asset Optimization:** Image optimization (planned)
- **Caching Strategy:** Service worker for static assets (planned)

---

## 🔄 Recent Changes

### January 19, 2026 - Design System Overhaul & Root Reorganization

#### Design System Transformation
**Changes:**
- Transformed frontend from "AI-generated" gradient-heavy aesthetic to minimal, clean design
- Updated color scheme: Removed blue-purple gradients, changed to neutral grays with white backgrounds
- Reduced component sizes: Buttons, cards, icons, text, and spacing all made more compact
- Removed excessive effects: No more glow effects, blur backgrounds, scale transforms, or animated pulses
- Added subtle interactivity: Simple hover states, small translates, clean shadows
- Updated components: Hero, Services, Pricing, FivePillars, Contact, Portfolio, OurStory, AIWorkflow
- Documented design philosophy in `openmemory.md` and `docs/DESIGN_SYSTEM_IMPLEMENTATION.md`

**Impact:**
- Professional, modern appearance that avoids "AI-generated" aesthetics
- Better user experience with smaller, more accessible components
- Improved performance with reduced animations and effects
- Clear design standards for future development

#### Root Directory Reorganization
**Changes:**
- Moved `DESIGN_SYSTEM_IMPLEMENTATION.md` → `docs/`
- Moved `IMPLEMENTATION_SUMMARY.md` → `docs/`
- Updated `docs/README.md` to include new documentation files
- Verified `.gitignore` properly excludes build artifacts (`dist/`, `coverage/`, `node_modules/`)

**Current Root Structure:**
```
Expert-O/
├── .cursor/              # Cursor IDE config (hidden)
├── .git/                 # Git repository (hidden)
├── .husky/              # Git hooks (hidden)
├── .gitignore           # Git ignore rules
├── archive/             # Archived code (gitignored)
├── coverage/            # Test coverage (gitignored)
├── dist/                # Build output (gitignored)
├── docs/                # All project documentation
├── node_modules/        # Dependencies (gitignored)
├── src/                 # Source code
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML entry point
├── openmemory.md        # Project memory & guide
├── package.json         # Dependencies
├── package-lock.json    # Dependency lock file
├── postcss.config.js    # PostCSS configuration
├── README.md            # Main readme
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.*.json      # TypeScript configurations
└── vite.config.ts       # Vite build configuration
```

**Impact:**
- Cleaner root directory with all docs in `/docs`
- Easier to find documentation and configuration files
- Better separation between source code, docs, and config
- Improved project maintainability

### January 19, 2026 - Project Reorganization (Earlier)
**Changes:**
- Consolidated all documentation into `/docs` with organized subdirectories
- Moved `concept.txt` → `docs/concept.md`
- Archived old `new-epoo/` project to `/archive`
- Removed duplicate `PRD.txt` (kept `docs/PRD.md`)
- Enhanced `.gitignore` for better file exclusions
- Created documentation index (`docs/README.md`)
- Created archive index (`archive/README.md`)
- Updated main README with documentation links
- Removed misplaced workspace file from test directory

**Impact:**
- Cleaner root directory structure
- Easier documentation discovery
- Better separation of active vs. archived code
- Improved developer onboarding experience

---

## 🤝 Contributing

When working on Expert-O:

1. **Read the philosophy** - Understand the Five Pillars (docs/concept.md)
2. **Check the PRD** - Align with product vision (docs/PRD.md)
3. **Follow patterns** - Use established component and testing patterns
4. **Update memory** - Keep this openmemory.md current with major changes
5. **Document decisions** - Capture architectural choices in docs/
6. **Test thoroughly** - Write tests for new components
7. **Commit conventionally** - Use semantic commit messages

---

**Maintained by:** Expert-O Development Team  
**Philosophy:** Polymaths in Action | Excellence Every Day | Ownership with Trust | Speed with Purpose | Humans First, Always
