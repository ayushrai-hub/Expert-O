import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import ErrorBoundary from './components/ErrorBoundary';
import LandingPage from './components/LandingPage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';
import DashboardLayout from './components/dashboard/DashboardLayout';
import Dashboard from './components/dashboard/Dashboard';

// Create a client
const queryClient = new QueryClient();

function App() {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    // In production, you would send this to an error reporting service
    console.error('Application Error:', error, errorInfo);
  };

  return (
    <ErrorBoundary onError={handleError}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <AuthProvider>
            <Router>
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<LandingPage />} />

                {/* Auth Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />

                {/* Protected Dashboard Routes */}
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <DashboardLayout>
                      <Dashboard />
                    </DashboardLayout>
                  </ProtectedRoute>
                } />

                {/* Catch all route */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Router>
          </AuthProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
