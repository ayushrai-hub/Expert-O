# Expert-O Design System Prompt for Stitch

## Project Overview
**Platform:** Expert-O - Professional Portfolio & Service Platform
**Target Users:** Clients (businesses seeking talent), Talent (freelancers/experts), Admins
**Core Values:** Polymath excellence, speed with purpose, humans first
**Design Philosophy:** Dark theme, modern, professional, innovative, accessible

## Design System Requirements

### Color Palette
```css
/* Primary Colors */
--primary-blue: #3B82F6;
--primary-purple: #8B5CF6;
--primary-gradient: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);

/* Neutral Colors */
--black: #000000;
--gray-900: #111827;
--gray-800: #1F2937;
--gray-700: #374151;
--gray-600: #4B5563;
--gray-500: #6B7280;
--gray-400: #9CA3AF;
--gray-300: #D1D5DB;
--gray-200: #E5E7EB;
--gray-100: #F3F4F6;
--white: #FFFFFF;

/* Status Colors */
--success: #10B981;
--warning: #F59E0B;
--error: #EF4444;
--info: #3B82F6;

/* Accent Colors */
--blue-500: #3B82F6;
--purple-500: #8B5CF6;
--green-500: #10B981;
--yellow-500: #F59E0B;
--red-500: #EF4444;
```

### Typography
- **Primary Font:** Inter (Sans-serif)
- **Headings:** Inter Bold (600+ weight)
- **Body:** Inter Regular (400 weight)
- **Small Text:** Inter Light (300 weight)
- **Scale:** 12px, 14px, 16px, 18px, 20px, 24px, 28px, 32px, 36px, 48px, 64px

### Spacing Scale
- Base unit: 4px
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128px

### Border Radius
- Small: 4px
- Medium: 8px
- Large: 12px
- Extra Large: 16px
- Full: 9999px

### Shadows
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
```

---

## 1. AUTHENTICATION PAGES

### 1.1 Login Page
**Route:** `/login`
**Layout:** Centered card layout on dark background
**Components:**
- Logo and brand header
- Email input field
- Password input field with show/hide toggle
- "Remember me" checkbox
- "Forgot password?" link
- Primary CTA button (Sign In)
- Social login buttons (Google, LinkedIn)
- Sign up link
- Terms and privacy links

**States:** Default, Loading, Error validation

### 1.2 Registration Page
**Route:** `/register`
**Layout:** Multi-step form with progress indicator
**Components:**
- Step 1: Account creation (email, password, confirm password)
- Step 2: Role selection (Client/Talent/Admin)
- Step 3: Basic profile info (name, bio, company)
- Step 4: Email verification

**States:** Form validation, Step progression, Loading states

### 1.3 Password Reset Pages
**Routes:** `/forgot-password`, `/reset-password/:token`
**Layout:** Simple centered forms
**Components:**
- Email input for reset request
- New password form with confirmation
- Success confirmation states

### 1.4 Email Verification
**Route:** `/verify-email/:token`
**Layout:** Confirmation page with resend option
**Components:** Success/error states, resend button

---

## 2. TALENT DASHBOARD PAGES

### 2.1 Dashboard Overview
**Route:** `/dashboard/talent`
**Layout:** Sidebar navigation + main content area
**Sections:**
- Welcome header with user avatar
- Quick stats cards (active projects, earnings, rating)
- Recent activity feed
- Upcoming deadlines
- Available projects
- Quick actions (update profile, view portfolio)

### 2.2 Profile Management
**Route:** `/dashboard/talent/profile`
**Layout:** Tabbed interface
**Tabs:**
- **Personal Info:** Name, email, phone, location, timezone
- **Professional Bio:** Rich text editor, skills tags, experience
- **Social Links:** LinkedIn, GitHub, portfolio website, social media
- **Preferences:** Notifications, privacy settings, availability

**Components:**
- Avatar upload with crop tool
- Multi-select skill tags
- Rich text editor for bio
- Social media link inputs with validation

### 2.3 Portfolio Management
**Route:** `/dashboard/talent/portfolio`
**Layout:** Grid layout with add/edit modals
**Components:**
- Portfolio item cards (image, title, description, technologies)
- Add portfolio modal with file upload
- Edit modal with all fields
- Drag-and-drop reordering
- Filter and search functionality

**Portfolio Item Fields:**
- Title, description, category
- Multiple image uploads
- Video URL (YouTube/Vimeo)
- Technologies used (tags)
- Client name, testimonial
- Project URL, GitHub link

### 2.4 Skills Matrix
**Route:** `/dashboard/talent/skills`
**Layout:** Interactive skill assessment interface
**Components:**
- Skill categories accordion (Technical, Soft Skills, Domain)
- Skill rating system (1-5 stars)
- Proficiency levels (Beginner → Expert)
- Add custom skills
- Skill verification badges

### 2.5 Availability Calendar
**Route:** `/dashboard/talent/availability`
**Layout:** Calendar view with time slots
**Components:**
- Monthly/weekly/daily calendar views
- Time slot selection (drag to select ranges)
- Recurring patterns (daily, weekly, monthly)
- Public/private availability toggle
- Timezone settings
- Block time functionality

### 2.6 Projects List
**Route:** `/dashboard/talent/projects`
**Layout:** Table/list view with filters
**Components:**
- Project cards with status badges
- Filter dropdowns (status, client, date range)
- Search functionality
- Sort options (date, status, priority)
- Bulk actions (archive, export)

### 2.7 Project Details
**Route:** `/dashboard/talent/projects/:id`
**Layout:** Project workspace
**Sections:**
- Project header (title, client, status, deadline)
- Project brief and requirements
- Progress tracking (milestones, time logged)
- File attachments and deliverables
- Communication thread
- Time tracking interface
- Invoice/payment status

---

## 3. CLIENT PORTAL PAGES

### 3.1 Client Dashboard
**Route:** `/dashboard/client`
**Layout:** Overview dashboard
**Sections:**
- Active projects summary
- Recent communications
- Upcoming milestones
- Budget overview
- Quick actions (post project, view talent)

### 3.2 Project Submission
**Route:** `/dashboard/client/projects/new`
**Layout:** Multi-step wizard
**Steps:**
1. **Project Basics:** Title, category, budget range, timeline
2. **Requirements:** Detailed description, deliverables, skills needed
3. **Attachments:** File uploads, reference materials
4. **Review & Submit:** Confirmation and payment setup

**Components:**
- Rich text editor for requirements
- Budget slider with preset ranges
- Skills multi-select with search
- File upload with drag-and-drop
- Project type selection (one-time, ongoing, milestone-based)

### 3.3 Project Tracking
**Route:** `/dashboard/client/projects/:id`
**Layout:** Project management interface
**Components:**
- Project status timeline
- Milestone progress tracker
- Budget tracking (spent vs allocated)
- File sharing area
- Communication center
- Rating/review system for completed work

### 3.4 Talent Search & Discovery
**Route:** `/dashboard/client/talent`
**Layout:** Advanced search and filter interface
**Components:**
- Search bar with autocomplete
- Filter sidebar (skills, rating, location, availability)
- Talent profile cards with quick view
- Compare talent feature
- Saved searches
- Contact buttons

### 3.5 Invoices & Payments
**Route:** `/dashboard/client/billing`
**Layout:** Financial dashboard
**Components:**
- Invoice list with status badges
- Payment history
- Outstanding balances
- Payment method management
- Download receipts
- Tax document access

---

## 4. ADMIN PANEL PAGES

### 4.1 Admin Dashboard
**Route:** `/dashboard/admin`
**Layout:** Analytics-focused dashboard
**Widgets:**
- User statistics (total, active, new signups)
- Project metrics (active, completed, success rate)
- Revenue charts (monthly, quarterly)
- Platform health indicators
- Recent activity feed
- Quick action buttons

### 4.2 User Management
**Route:** `/dashboard/admin/users`
**Layout:** Data table with advanced filtering
**Components:**
- User search and filter (role, status, registration date)
- Bulk actions (activate, suspend, delete)
- User detail modal/side panel
- Export functionality
- User activity logs

### 4.3 Project Management
**Route:** `/dashboard/admin/projects`
**Layout:** Project oversight interface
**Components:**
- Project queue (unassigned projects)
- Assignment tools (match talent to projects)
- Conflict resolution interface
- Quality assurance workflows
- Dispute management
- Project analytics

### 4.4 Analytics & Reporting
**Route:** `/dashboard/admin/analytics`
**Layout:** Comprehensive analytics dashboard
**Charts:**
- User growth charts
- Project success metrics
- Revenue analytics
- Geographic distribution
- Skill demand trends
- Platform performance KPIs

**Reports:**
- Monthly performance reports
- User engagement reports
- Financial reports
- Custom report builder

### 4.5 Content Management
**Route:** `/dashboard/admin/content`
**Layout:** CMS interface
**Sections:**
- Landing page content editor
- Blog post management
- Service descriptions
- Testimonial management
- Static page content
- Media library

### 4.6 System Settings
**Route:** `/dashboard/admin/settings`
**Layout:** Settings panel
**Sections:**
- Platform configuration
- Email templates
- Notification settings
- Payment gateway settings
- Security settings
- API management

---

## 5. COMMUNICATION SYSTEM

### 5.1 Messages Inbox
**Route:** `/dashboard/messages`
**Layout:** Email-style interface
**Components:**
- Conversation list sidebar
- Message thread view
- Compose new message modal
- File attachment support
- Real-time notifications
- Search and filter conversations

### 5.2 Project Communication
**Route:** `/dashboard/projects/:id/messages`
**Layout:** Integrated communication within project context
**Components:**
- Message thread specific to project
- File sharing within project
- Mention system (@username)
- Message status indicators (read/unread)

---

## 6. SHARED COMPONENTS & PATTERNS

### 6.1 Navigation Components
- **Main Navigation:** Fixed header with logo, menu items, user menu
- **Sidebar Navigation:** Collapsible sidebar for dashboard pages
- **Breadcrumb Navigation:** Page hierarchy indication
- **Tab Navigation:** Horizontal tabs for sub-sections

### 6.2 Form Components
- **Input Fields:** Text, email, password, textarea
- **Select Dropdowns:** Single and multi-select
- **Radio Buttons & Checkboxes:** Form options
- **File Upload:** Drag-and-drop, multiple files, progress indicators
- **Date/Time Pickers:** Calendar and time selection
- **Rich Text Editor:** Formatting toolbar, media insertion

### 6.3 Data Display Components
- **Data Tables:** Sortable, filterable, paginated
- **Cards:** Information cards with actions
- **Lists:** Ordered and unordered with avatars
- **Charts:** Bar, line, pie, doughnut charts
- **Progress Bars:** Linear and circular progress
- **Status Badges:** Color-coded status indicators

### 6.4 Feedback Components
- **Loading States:** Spinners, skeleton loaders
- **Success/Error Messages:** Toast notifications, inline alerts
- **Modal Dialogs:** Confirmation, form, information modals
- **Tooltips:** Contextual help and information
- **Progress Indicators:** Multi-step processes

### 6.5 Layout Components
- **Grid System:** Responsive 12-column grid
- **Container:** Max-width content wrapper
- **Sidebar Layout:** Main content with collapsible sidebar
- **Card Layout:** Content organized in cards
- **Form Layout:** Structured form sections

---

## 7. RESPONSIVE DESIGN REQUIREMENTS

### Breakpoints
- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px - 1439px
- **Large Desktop:** 1440px+

### Mobile-First Approach
- Touch-friendly interactions (44px minimum touch targets)
- Swipe gestures for navigation
- Bottom navigation for mobile dashboards
- Collapsible sidebars on tablets
- Optimized form layouts for mobile

### Responsive Patterns
- **Navigation:** Hamburger menu on mobile, horizontal on desktop
- **Tables:** Card layout on mobile, table on desktop
- **Forms:** Stacked on mobile, multi-column on desktop
- **Dashboards:** Single column on mobile, multi-column grid on desktop

---

## 8. ACCESSIBILITY REQUIREMENTS

### WCAG 2.1 AA Compliance
- **Color Contrast:** Minimum 4.5:1 ratio for normal text, 3:1 for large text
- **Keyboard Navigation:** All interactive elements keyboard accessible
- **Screen Reader Support:** Proper ARIA labels and roles
- **Focus Management:** Visible focus indicators
- **Semantic HTML:** Proper heading hierarchy, landmarks

### Specific Accessibility Features
- Skip links for keyboard users
- Alt text for all images
- Error announcements for screen readers
- High contrast mode support
- Reduced motion preferences
- Font size adjustment support

---

## 9. INTERACTION DESIGN

### Micro-Interactions
- **Button Hover States:** Color transitions, subtle shadows
- **Form Validation:** Real-time feedback with smooth animations
- **Loading States:** Skeleton loaders, progress bars
- **Success Feedback:** Checkmark animations, color transitions
- **Error States:** Shake animations, error color highlights

### Animation Guidelines
- **Duration:** 200-300ms for most interactions
- **Easing:** Ease-out for enter animations, ease-in for exit
- **Reduced Motion:** Respect user's motion preferences
- **Performance:** Use transform and opacity for smooth animations

### State Management
- **Loading States:** Consistent spinner/loader designs
- **Error States:** Clear error messages with recovery actions
- **Empty States:** Helpful illustrations and guidance
- **Success States:** Positive feedback with next steps

---

## 10. DESIGN DELIVERABLES

### Required Assets
1. **High-fidelity mockups** for all pages
2. **Component library** with all reusable components
3. **Design system documentation** with usage guidelines
4. **Responsive design specifications** for all breakpoints
5. **Interaction design** specifications with animations
6. **Accessibility audit** results and compliance documentation

### File Formats
- **Design Files:** Figma files with all artboards and components
- **Image Assets:** SVG icons, PNG illustrations, optimized images
- **Documentation:** PDF specifications, interactive prototypes
- **Code Assets:** CSS custom properties, component code snippets

### Prototype Requirements
- **Interactive Prototype:** Clickable prototype showing all user flows
- **User Testing:** Usability testing scenarios and feedback integration
- **Design System:** Living design system for ongoing development

---

## 11. BRANDING INTEGRATION

### Logo Usage
- **Primary Logo:** Expert-O text with gradient
- **Icon Logo:** Simplified version for favicons and small spaces
- **Logo Lockups:** Logo with tagline variations

### Brand Voice
- **Professional:** Expert, reliable, trustworthy
- **Innovative:** Modern, forward-thinking, cutting-edge
- **Human:** Approachable, supportive, collaborative

### Visual Identity
- **Photography:** Professional headshots, workspace images
- **Illustrations:** Custom illustrations for empty states and onboarding
- **Icons:** Consistent icon set (Lucide React icons)
- **Patterns:** Subtle geometric patterns for backgrounds

---

## 12. QUALITY ASSURANCE

### Design Quality Checks
- **Consistency:** All components follow design system
- **Accessibility:** WCAG 2.1 AA compliance verified
- **Performance:** Optimized images and assets
- **Cross-browser:** Tested in all target browsers
- **Mobile Experience:** Touch-friendly and responsive

### User Experience Validation
- **Usability Testing:** Conducted with target users
- **A/B Testing:** Key interaction patterns tested
- **Analytics Review:** User behavior data analyzed
- **Iterative Design:** Feedback incorporated and designs refined

---

## FINAL DELIVERABLES CHECKLIST

- [ ] Complete design system documentation
- [ ] All page mockups (desktop, tablet, mobile)
- [ ] Component library with variants and states
- [ ] Interactive prototype
- [ ] Accessibility audit report
- [ ] Design handoff files for developers
- [ ] Usage guidelines and best practices
- [ ] Asset library (icons, images, illustrations)

---

**Design System Version:** 1.0
**Last Updated:** February 1, 2026
**Platform:** Expert-O Professional Services Platform
**Target Completion:** Ready for development handoff
