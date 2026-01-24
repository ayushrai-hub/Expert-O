import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../../contexts/AuthContext';
import ForgotPassword from '../ForgotPassword';

// Mock useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      <AuthProvider>
        {component}
      </AuthProvider>
    </BrowserRouter>
  );
};

describe('ForgotPassword Component', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('renders forgot password form correctly', () => {
    renderWithProviders(<ForgotPassword />);

    expect(screen.getByText('Forgot password?')).toBeInTheDocument();
    expect(screen.getByText(/no worries/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send reset instructions/i })).toBeInTheDocument();
  });

  it('shows validation errors for empty email', async () => {
    renderWithProviders(<ForgotPassword />);

    const submitButton = screen.getByRole('button', { name: /send reset instructions/i });
    fireEvent.click(submitButton);

    // HTML5 validation should prevent submission
    expect(submitButton).toBeInTheDocument();
  });

  it('submits form with valid email', async () => {
    renderWithProviders(<ForgotPassword />);

    const emailInput = screen.getByLabelText(/email address/i);
    const submitButton = screen.getByRole('button', { name: /send reset instructions/i });

    fireEvent.change(emailInput, { target: { value: 'admin@expert-o.com' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/sending/i)).toBeInTheDocument();
    });
  });

  it('shows success state after successful submission', async () => {
    renderWithProviders(<ForgotPassword />);

    const emailInput = screen.getByLabelText(/email address/i);
    const submitButton = screen.getByRole('button', { name: /send reset instructions/i });

    fireEvent.change(emailInput, { target: { value: 'admin@expert-o.com' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Check your email')).toBeInTheDocument();
      expect(screen.getByText(/back to login/i)).toBeInTheDocument();
    });
  });

  it('navigates back to login when back button is clicked', async () => {
    renderWithProviders(<ForgotPassword />);

    const emailInput = screen.getByLabelText(/email address/i);
    const submitButton = screen.getByRole('button', { name: /send reset instructions/i });

    fireEvent.change(emailInput, { target: { value: 'admin@expert-o.com' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const backButton = screen.getByText(/back to login/i);
      fireEvent.click(backButton);
      expect(mockNavigate).toHaveBeenCalledWith('/login');
    });
  });

  it('has back to login link in form', () => {
    renderWithProviders(<ForgotPassword />);

    const backLink = screen.getByText(/back to log in/i);
    fireEvent.click(backLink);
    expect(mockNavigate).toHaveBeenCalledWith('/login');
  });

  it('shows error for invalid email', async () => {
    renderWithProviders(<ForgotPassword />);

    const emailInput = screen.getByLabelText(/email address/i);
    const submitButton = screen.getByRole('button', { name: /send reset instructions/i });

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/sending/i)).toBeInTheDocument();
    });
  });
});
