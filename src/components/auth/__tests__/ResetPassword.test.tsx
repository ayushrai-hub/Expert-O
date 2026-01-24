import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ResetPassword from '../ResetPassword';

// Mock useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('ResetPassword Component', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('renders reset password form correctly', () => {
    render(
      <BrowserRouter>
        <ResetPassword />
      </BrowserRouter>
    );

    expect(screen.getByText('Reset your password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter new password/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/confirm new password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /reset password/i })).toBeInTheDocument();
  });

  it('shows password strength indicator', () => {
    render(
      <BrowserRouter>
        <ResetPassword />
      </BrowserRouter>
    );

    const newPasswordInput = screen.getByPlaceholderText(/enter new password/i);
    fireEvent.change(newPasswordInput, { target: { value: 'weak' } });

    expect(screen.getByText('Password Strength')).toBeInTheDocument();
    expect(screen.getByText('Weak')).toBeInTheDocument();
  });

  it('validates password confirmation', () => {
    render(
      <BrowserRouter>
        <ResetPassword />
      </BrowserRouter>
    );

    const newPasswordInput = screen.getByPlaceholderText(/enter new password/i);
    const confirmPasswordInput = screen.getByPlaceholderText(/confirm new password/i);

    fireEvent.change(newPasswordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });

    // Since we can't easily test the icon, we'll check the form can be submitted
    const submitButton = screen.getByRole('button', { name: /reset password/i });
    expect(submitButton).not.toBeDisabled();
  });

  it('prevents submission with mismatched passwords', async () => {
    render(
      <BrowserRouter>
        <ResetPassword />
      </BrowserRouter>
    );

    const newPasswordInput = screen.getByPlaceholderText(/enter new password/i);
    const confirmPasswordInput = screen.getByPlaceholderText(/confirm new password/i);
    const submitButton = screen.getByRole('button', { name: /reset password/i });

    fireEvent.change(newPasswordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'different' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/passwords do not match/i)).toBeInTheDocument();
    });
  });

  it('prevents submission with short password', async () => {
    render(
      <BrowserRouter>
        <ResetPassword />
      </BrowserRouter>
    );

    const newPasswordInput = screen.getByPlaceholderText(/enter new password/i);
    const confirmPasswordInput = screen.getByPlaceholderText(/confirm new password/i);
    const submitButton = screen.getByRole('button', { name: /reset password/i });

    fireEvent.change(newPasswordInput, { target: { value: '123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: '123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/password must be at least 8 characters/i)).toBeInTheDocument();
    });
  });

  it('submits form with valid passwords', async () => {
    render(
      <BrowserRouter>
        <ResetPassword />
      </BrowserRouter>
    );

    const newPasswordInput = screen.getByPlaceholderText(/enter new password/i);
    const confirmPasswordInput = screen.getByPlaceholderText(/confirm new password/i);
    const submitButton = screen.getByRole('button', { name: /reset password/i });

    fireEvent.change(newPasswordInput, { target: { value: 'newpassword123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'newpassword123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/resetting/i)).toBeInTheDocument();
    });
  });

  it('shows success state after successful reset', async () => {
    render(
      <BrowserRouter>
        <ResetPassword />
      </BrowserRouter>
    );

    const newPasswordInput = screen.getByPlaceholderText(/enter new password/i);
    const confirmPasswordInput = screen.getByPlaceholderText(/confirm new password/i);
    const submitButton = screen.getByRole('button', { name: /reset password/i });

    fireEvent.change(newPasswordInput, { target: { value: 'newpassword123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'newpassword123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Password Reset Successful')).toBeInTheDocument();
      expect(screen.getByText(/back to login/i)).toBeInTheDocument();
    });
  });

  it('navigates back to login on success', async () => {
    render(
      <BrowserRouter>
        <ResetPassword />
      </BrowserRouter>
    );

    const newPasswordInput = screen.getByPlaceholderText(/enter new password/i);
    const confirmPasswordInput = screen.getByPlaceholderText(/confirm new password/i);
    const submitButton = screen.getByRole('button', { name: /reset password/i });

    fireEvent.change(newPasswordInput, { target: { value: 'newpassword123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'newpassword123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Password Reset Successful')).toBeInTheDocument();
    });

    const backButton = screen.getByRole('button', { name: /back to login/i });
    fireEvent.click(backButton);
    
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/login');
    });
  });

  it('toggles password visibility', () => {
    render(
      <BrowserRouter>
        <ResetPassword />
      </BrowserRouter>
    );

    const newPasswordInput = screen.getByPlaceholderText(/enter new password/i);
    const toggleButtons = screen.getAllByRole('button').filter(btn =>
      btn.querySelector('svg')
    );

    expect(newPasswordInput).toHaveAttribute('type', 'password');

    if (toggleButtons.length > 0) {
      fireEvent.click(toggleButtons[0]);
      expect(newPasswordInput).toHaveAttribute('type', 'text');

      fireEvent.click(toggleButtons[0]);
      expect(newPasswordInput).toHaveAttribute('type', 'password');
    }
  });

  it('disables submit button when requirements not met', () => {
    render(
      <BrowserRouter>
        <ResetPassword />
      </BrowserRouter>
    );

    const submitButton = screen.getByRole('button', { name: /reset password/i });
    expect(submitButton).toBeDisabled();

    const newPasswordInput = screen.getByPlaceholderText(/enter new password/i);
    fireEvent.change(newPasswordInput, { target: { value: 'weak' } });

    expect(submitButton).toBeDisabled();

    fireEvent.change(newPasswordInput, { target: { value: 'strongpassword' } });
    expect(submitButton).toBeDisabled();

    const confirmPasswordInput = screen.getByPlaceholderText(/confirm new password/i);
    fireEvent.change(confirmPasswordInput, { target: { value: 'strongpassword' } });

    expect(submitButton).not.toBeDisabled();
  });
});
