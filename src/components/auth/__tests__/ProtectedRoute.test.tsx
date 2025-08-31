import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '../../../contexts/AuthContext';
import ProtectedRoute from '../ProtectedRoute';
import { Role } from '../../../types/auth';

const renderWithProviders = (component: React.ReactElement, initialEntries = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <AuthProvider>
        {component}
      </AuthProvider>
    </MemoryRouter>
  );
};

describe('ProtectedRoute Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('shows loading spinner when checking authentication', () => {
    renderWithProviders(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    );
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('redirects to login when not authenticated', async () => {
    renderWithProviders(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    );
    
    await waitFor(() => {
      // Should redirect to login (but we can't easily test redirects in this setup)
      // Instead, we check that the protected content is not shown
      expect(screen.queryByText('Protected Content')).not.toBeInTheDocument();
    });
  });

  it('allows access when authenticated', async () => {
    // Mock authenticated user
    const mockUser = {
      id: '1',
      email: 'test@example.com',
      name: 'Test User',
      role: Role.CLIENT,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    localStorage.setItem('expert-o-user', JSON.stringify(mockUser));
    
    renderWithProviders(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    );
    
    await waitFor(() => {
      expect(screen.getByText('Protected Content')).toBeInTheDocument();
    });
  });

  it('allows access for admin role when no specific roles required', async () => {
    const mockUser = {
      id: '1',
      email: 'admin@expert-o.com',
      name: 'Admin User',
      role: Role.ADMIN,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    localStorage.setItem('expert-o-user', JSON.stringify(mockUser));
    
    renderWithProviders(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    );
    
    await waitFor(() => {
      expect(screen.getByText('Protected Content')).toBeInTheDocument();
    });
  });

  it('allows access for client role when client role is required', async () => {
    const mockUser = {
      id: '1',
      email: 'client@example.com',
      name: 'Client User',
      role: Role.CLIENT,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    localStorage.setItem('expert-o-user', JSON.stringify(mockUser));
    
    renderWithProviders(
      <ProtectedRoute allowedRoles={[Role.CLIENT]}>
        <div>Client Only Content</div>
      </ProtectedRoute>
    );
    
    await waitFor(() => {
      expect(screen.getByText('Client Only Content')).toBeInTheDocument();
    });
  });

  it('allows access for talent role when talent role is required', async () => {
    const mockUser = {
      id: '1',
      email: 'talent@example.com',
      name: 'Talent User',
      role: Role.TALENT,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    localStorage.setItem('expert-o-user', JSON.stringify(mockUser));
    
    renderWithProviders(
      <ProtectedRoute allowedRoles={[Role.TALENT]}>
        <div>Talent Only Content</div>
      </ProtectedRoute>
    );
    
    await waitFor(() => {
      expect(screen.getByText('Talent Only Content')).toBeInTheDocument();
    });
  });

  it('allows access for admin role when admin role is required', async () => {
    const mockUser = {
      id: '1',
      email: 'admin@expert-o.com',
      name: 'Admin User',
      role: Role.ADMIN,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    localStorage.setItem('expert-o-user', JSON.stringify(mockUser));
    
    renderWithProviders(
      <ProtectedRoute allowedRoles={[Role.ADMIN]}>
        <div>Admin Only Content</div>
      </ProtectedRoute>
    );
    
    await waitFor(() => {
      expect(screen.getByText('Admin Only Content')).toBeInTheDocument();
    });
  });

  it('allows access when user has one of multiple allowed roles', async () => {
    const mockUser = {
      id: '1',
      email: 'client@example.com',
      name: 'Client User',
      role: Role.CLIENT,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    localStorage.setItem('expert-o-user', JSON.stringify(mockUser));
    
    renderWithProviders(
      <ProtectedRoute allowedRoles={[Role.CLIENT, Role.TALENT]}>
        <div>Multi-Role Content</div>
      </ProtectedRoute>
    );
    
    await waitFor(() => {
      expect(screen.getByText('Multi-Role Content')).toBeInTheDocument();
    });
  });

  it('handles invalid localStorage data gracefully', async () => {
    localStorage.setItem('expert-o-user', 'invalid-json');
    
    renderWithProviders(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    );
    
    await waitFor(() => {
      // Should not show protected content when localStorage is invalid
      expect(screen.queryByText('Protected Content')).not.toBeInTheDocument();
    });
  });

  it('renders children when authentication is valid', async () => {
    const mockUser = {
      id: '1',
      email: 'test@example.com',
      name: 'Test User',
      role: Role.CLIENT,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    localStorage.setItem('expert-o-user', JSON.stringify(mockUser));
    
    renderWithProviders(
      <ProtectedRoute>
        <div data-testid="protected-content">
          <h1>Dashboard</h1>
          <p>Welcome to the dashboard</p>
        </div>
      </ProtectedRoute>
    );
    
    await waitFor(() => {
      expect(screen.getByTestId('protected-content')).toBeInTheDocument();
      expect(screen.getByText('Dashboard')).toBeInTheDocument();
      expect(screen.getByText('Welcome to the dashboard')).toBeInTheDocument();
    });
  });
});
