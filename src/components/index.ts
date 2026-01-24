/**
 * Component exports for the Expert-O application
 *
 * This file provides a centralized way to import components throughout the application.
 * It helps with tree-shaking and makes imports more organized.
 */

// Core UI Components
export { default as ErrorBoundary } from './ErrorBoundary';
export { default as Loading } from './Loading';
export { default as Skeleton } from './Skeleton';
export { default as ThemeToggle } from './ThemeToggle';

// Auth Components
export { default as Login } from './auth/Login';
export { default as Register } from './auth/Register';
export { default as ForgotPassword } from './auth/ForgotPassword';
export { default as ResetPassword } from './auth/ResetPassword';
export { default as ProtectedRoute } from './auth/ProtectedRoute';

// Dashboard Components
export { default as Dashboard } from './dashboard/Dashboard';
export { default as DashboardLayout } from './dashboard/DashboardLayout';
export { default as AdminDashboard } from './dashboard/AdminDashboard';
export { default as ProjectManagement } from './dashboard/ProjectManagement';
export { default as TalentProfile } from './dashboard/TalentProfile';
export { default as CommunicationSystem } from './dashboard/CommunicationSystem';

// Landing Page Components
export { default as LandingPage } from './LandingPage';
export { default as Hero } from './Hero';
export { default as OurStory } from './OurStory';
export { default as FivePillars } from './FivePillars';
export { default as Services } from './Services';
export { default as Portfolio } from './Portfolio';
export { default as AIWorkflow } from './AIWorkflow';
export { default as Pricing } from './Pricing';
export { default as ClientForm } from './ClientForm';
export { default as JoinForm } from './JoinForm';
export { default as Blog } from './Blog';
export { default as Contact } from './Contact';
