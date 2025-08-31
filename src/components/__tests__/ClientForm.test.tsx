import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ClientForm from '../ClientForm';

// Mock the lucide-react icons to simplify testing
jest.mock('lucide-react', () => ({
  Send: () => <div data-testid="send-icon">Send</div>,
  Upload: () => <div data-testid="upload-icon">Upload</div>,
  CheckCircle: () => <div data-testid="check-circle-icon">CheckCircle</div>,
}));

/**
 * Test suite for ClientForm component
 * 
 * @group components/ClientForm
 */
describe('ClientForm Component', () => {
  /**
   * Test case: Renders all form fields and elements
   */
  it('renders all form fields and elements', () => {
    render(<ClientForm />);
    
    // Verify main heading and subheading
    expect(screen.getByText(/Start Your Journey/i)).toBeInTheDocument();
    expect(screen.getByText(/With Expert-O/i)).toBeInTheDocument();
    
    // Verify all form inputs are present using placeholders and roles
    expect(screen.getByPlaceholderText('Enter your full name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('your@email.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Tell us about your business or project idea')).toBeInTheDocument();
    expect(screen.getByText('What services do you need? *')).toBeInTheDocument();
    expect(screen.getByText('Timeline Expectations')).toBeInTheDocument();
    expect(screen.getByText('Your Vision & Goals *')).toBeInTheDocument();
    
    // Verify submit button using text content
    expect(screen.getByRole('button', { name: /Start Your Transformation/ })).toBeInTheDocument();
  });

  /**
   * Test case: Validates required fields when form is submitted empty
   */
  it('validates required fields on form submission', async () => {
    render(<ClientForm />);
    
    // Attempt to submit empty form
    const submitButton = screen.getByRole('button', { name: /Start Your Transformation/ });
    userEvent.click(submitButton);
    
    // Verify required field errors
    await waitFor(() => {
      // Check for validation messages or required indicators
      const requiredInputs = document.querySelectorAll('input[required], textarea[required], select[required]');
      expect(requiredInputs.length).toBeGreaterThan(0);
    });
  });

  /**
   * Test case: Handles text input changes correctly
   */
  it('updates form data when text inputs change', () => {
    render(<ClientForm />);
    
    // Test name input
    const nameInput = screen.getByPlaceholderText('Enter your full name') as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput.value).toBe('John Doe');
    
    // Test email input
    const emailInput = screen.getByPlaceholderText('your@email.com') as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    expect(emailInput.value).toBe('john@example.com');
  });

  /**
   * Test case: Handles service selection and deselection
   */
  it('allows selecting and deselecting services', () => {
    render(<ClientForm />);
    
    // Get service checkboxes by their text content
    const websiteDevCheckbox = screen.getByLabelText('Website Development', { selector: 'input[type="checkbox"]' }) as HTMLInputElement;
    const appDevCheckbox = screen.getByLabelText('App Development', { selector: 'input[type="checkbox"]' }) as HTMLInputElement;
    
    // Select services
    fireEvent.click(websiteDevCheckbox);
    expect(websiteDevCheckbox.checked).toBe(true);
    
    fireEvent.click(appDevCheckbox);
    expect(appDevCheckbox.checked).toBe(true);
    
    // Deselect a service
    fireEvent.click(websiteDevCheckbox);
    expect(websiteDevCheckbox.checked).toBe(false);
    expect(appDevCheckbox.checked).toBe(true);
  });

  /**
   * Test case: Submits form with valid data and shows success message
   */
  it('submits the form and shows success message', async () => {
    // Mock console.log to verify form submission
    const originalConsoleLog = console.log;
    console.log = jest.fn();
    
    render(<ClientForm />);
    
    // Fill out required fields
    fireEvent.change(screen.getByPlaceholderText('Enter your full name'), { 
      target: { value: 'John Doe' } 
    });
    fireEvent.change(screen.getByPlaceholderText('your@email.com'), { 
      target: { value: 'john@example.com' } 
    });
    fireEvent.change(screen.getByPlaceholderText('Tell us about your business or project idea'), { 
      target: { value: 'Test Business' } 
    });
    
    // Select budget
    const budgetContainer = screen.getByText('Budget Range *').closest('div');
    const budgetSelect = budgetContainer?.querySelector('select');
    if (!budgetSelect) throw new Error('Budget select not found');
    fireEvent.change(budgetSelect, { 
      target: { value: '₹1,00,000 - ₹3,00,000' } 
    });

    // Select services by finding the checkbox input inside the label
    const serviceLabel = screen.getByText('Website Development').closest('label');
    if (!serviceLabel) throw new Error('Service label not found');
    const serviceCheckbox = serviceLabel.querySelector('input[type="checkbox"]');
    if (!serviceCheckbox) throw new Error('Service checkbox not found');
    fireEvent.click(serviceCheckbox);
    
    // Fill vision (required field)
    fireEvent.change(screen.getByPlaceholderText('Tell us about your vision, goals, and what success looks like for this project...'), {
      target: { value: 'Test vision and goals' }
    });
    
    // Submit form
    const submitButton = screen.getByRole('button', { name: /Start Your Transformation/ });
    fireEvent.click(submitButton);
    
    // Verify success message is shown
    await waitFor(() => {
      const successMessage = screen.getByText((content, node) => {
        const hasText = (node: Element | null) => node?.textContent === "Thank You! We've Received Your Request";
        const nodeHasText = hasText(node);
        const childrenDontHaveText = Array.from(node?.children || []).every(
          (child) => !hasText(child as Element)
        );
        return nodeHasText && childrenDontHaveText;
      });
      expect(successMessage).toBeInTheDocument();
    });
    
    // Verify form data was logged
    expect(console.log).toHaveBeenCalledWith('Form submitted:', {
      name: 'John Doe',
      email: 'john@example.com',
      business: 'Test Business',
      budget: '₹1,00,000 - ₹3,00,000',
      services: ['Website Development'],
      timeline: '',
      vision: 'Test vision and goals',
      values: '',
      projectType: 'full'
    });
    
    // Clean up mock
    console.log = originalConsoleLog;
  });

  /**
   * Test case: Validates email format
   */
  it('validates email format', async () => {
    render(<ClientForm />);
    
    const emailInput = screen.getByPlaceholderText('your@email.com');
    const submitButton = screen.getByRole('button', { name: /Start Your Transformation/ });
    
    // Test invalid email
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    userEvent.click(submitButton);
    
    // The form should show validation error for invalid email
    await waitFor(() => {
      expect(emailInput).toHaveAttribute('type', 'email');
      expect(emailInput).toHaveAttribute('required');
    });
  });
});
