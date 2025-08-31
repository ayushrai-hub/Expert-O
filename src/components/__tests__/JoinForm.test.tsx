import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import JoinForm from '../JoinForm';

/**
 * Test suite for the JoinForm component
 * 
 * Tests cover:
 * - Rendering of all form fields and sections
 * - Form validation and submission
 * - Skill selection functionality
 * - Success state after submission
 * - Accessibility attributes
 * - Responsive design elements
 */
describe('JoinForm Component', () => {
  // Test data matching the component's structure
  const roles = [
    "Full-time Team Member",
    "Freelancer/Contractor", 
    "Intern/Apprentice",
    "Partner Organization",
    "Startup Collaborator"
  ];

  const skillAreas = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Brand Strategy",
    "Digital Marketing", 
    "Content Creation",
    "AI/ML Integration",
    "Business Analysis",
    "Project Management",
    "Data Science",
    "DevOps",
    "Sales & Growth"
  ];

  // Test case: Renders the main section with correct attributes
  it('renders the main section with correct attributes', () => {
    render(<JoinForm />);
    
    const section = screen.getByTestId('join-section');
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('bg-gradient-to-b', 'from-gray-900', 'to-black');
  });

  // Test case: Renders form header and description
  it('displays the form header and description', () => {
    render(<JoinForm />);
    
    expect(screen.getByText('Join the Elite')).toBeInTheDocument();
    expect(screen.getByText('Work With Us')).toBeInTheDocument();
    expect(screen.getByText(/Join our tribe of elite polymaths/i)).toBeInTheDocument();
  });

  // Test case: Renders all form fields
  it('renders all form fields', () => {
    render(<JoinForm />);
    
    // Check personal info fields
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    
    // Check role dropdown
    expect(screen.getByLabelText(/how would you like to join us?/i)).toBeInTheDocument();
    
    // Check skills section
    expect(screen.getByText(/your areas of expertise/i)).toBeInTheDocument();
    skillAreas.forEach(skill => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
    
    // Check portfolio and links
    expect(screen.getByLabelText(/portfolio\/website url/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/linkedin profile/i)).toBeInTheDocument();
    
    // Check text areas
    expect(screen.getByLabelText(/what motivates you to join expert-o?/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/which of our pillars resonates with you most?/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/what's your availability?/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/tell us about your experience/i)).toBeInTheDocument();
  });

  // Test case: Form validation works correctly
  it('validates required fields', async () => {
    render(<JoinForm />);
    
    // Try to submit empty form
    const submitButton = screen.getByRole('button', { name: /submit application/i });
    fireEvent.click(submitButton);
    
    // Check for validation errors on required fields
    const requiredFields = [
      /full name/i,
      /email address/i,
      /how would you like to join us?/i,
      /linkedin profile/i,
      /what motivates you to join expert-o?/i,
      /which of our pillars resonates with you most?/i,
      /what's your availability?/i,
      /tell us about your experience/i
    ];
    
    requiredFields.forEach(field => {
      const input = screen.getByLabelText(field);
      expect(input).toBeInvalid();
    });
  });

  // Test case: Skill selection works
  it('allows selecting and deselecting skills', () => {
    render(<JoinForm />);
    
    // Select a skill
    const firstSkill = screen.getByLabelText(skillAreas[0]);
    fireEvent.click(firstSkill);
    expect(firstSkill).toBeChecked();
    
    // Select another skill
    const secondSkill = screen.getByLabelText(skillAreas[1]);
    fireEvent.click(secondSkill);
    expect(secondSkill).toBeChecked();
    
    // Deselect the first skill
    fireEvent.click(firstSkill);
    expect(firstSkill).not.toBeChecked();
    expect(secondSkill).toBeChecked();
  });

  // Test case: Form submission works with valid data
  it('submits the form with valid data', async () => {
    // Mock console.log
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    
    render(<JoinForm />);
    
    // Fill in required fields
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/how would you like to join us?/i), { 
      target: { value: roles[0] } 
    });
    fireEvent.change(screen.getByLabelText(/linkedin profile/i), { 
      target: { value: 'https://linkedin.com/in/johndoe' } 
    });
    fireEvent.change(screen.getByLabelText(/what motivates you to join expert-o?/i), { 
      target: { value: 'I want to work with the best' } 
    });
    fireEvent.change(screen.getByLabelText(/which of our pillars resonates with you most?/i), { 
      target: { value: 'Innovation and Excellence' } 
    });
    fireEvent.change(screen.getByLabelText(/what's your availability?/i), { 
      target: { value: 'Full-time' } 
    });
    fireEvent.change(screen.getByLabelText(/tell us about your experience/i), { 
      target: { value: '5+ years in web development' } 
    });
    
    // Select some skills
    fireEvent.click(screen.getByLabelText(skillAreas[0]));
    fireEvent.click(screen.getByLabelText(skillAreas[1]));
    
    // Submit the form
    const submitButton = screen.getByRole('button', { name: /submit application/i });
    fireEvent.click(submitButton);
    
    // Check if form data was logged
    expect(consoleSpy).toHaveBeenCalledWith('Join form submitted:', {
      name: 'John Doe',
      email: 'john@example.com',
      role: roles[0],
      skills: [skillAreas[0], skillAreas[1]],
      portfolio: '',
      linkedin: 'https://linkedin.com/in/johndoe',
      motivation: 'I want to work with the best',
      pillars: 'Innovation and Excellence',
      availability: 'Full-time',
      experience: '5+ years in web development'
    });
    
    // Clean up
    consoleSpy.mockRestore();
  });

  // Test case: Success state is shown after form submission
  it('shows success state after form submission', async () => {
    // Mock the form submission
    const { container } = render(<JoinForm />);
    
    // Fill in required fields
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/how would you like to join us?/i), { 
      target: { value: roles[0] } 
    });
    fireEvent.change(screen.getByLabelText(/linkedin profile/i), { 
      target: { value: 'https://linkedin.com/in/johndoe' } 
    });
    fireEvent.change(screen.getByLabelText(/what motivates you to join expert-o?/i), { 
      target: { value: 'I want to work with the best' } 
    });
    fireEvent.change(screen.getByLabelText(/which of our pillars resonates with you most?/i), { 
      target: { value: 'Innovation and Excellence' } 
    });
    fireEvent.change(screen.getByLabelText(/what's your availability?/i), { 
      target: { value: 'Full-time' } 
    });
    fireEvent.change(screen.getByLabelText(/tell us about your experience/i), { 
      target: { value: '5+ years in web development' } 
    });
    
    // Submit the form
    const submitButton = screen.getByRole('button', { name: /submit application/i });
    fireEvent.click(submitButton);
    
    // Wait for the success message to appear
    await waitFor(() => {
      expect(screen.getByText('Welcome to the Tribe!')).toBeInTheDocument();
      expect(screen.getByText(/your application has been received/i)).toBeInTheDocument();
    });
  });

  // Test case: Accessibility
  it('has proper accessibility attributes', () => {
    render(<JoinForm />);
    
    // Check form inputs
    const inputs = screen.getAllByRole('textbox');
    inputs.forEach(input => {
      expect(input).toHaveAttribute('id');
      expect(input).toHaveAttribute('name');
      // Check for either aria-label or associated label element
      const hasAriaLabel = input.hasAttribute('aria-label');
      const hasLabel = document.querySelector(`label[for="${input.id}"]`) !== null;
      expect(hasAriaLabel || hasLabel).toBe(true);
    });
    
    // Check select elements using test IDs instead of role
    const roleSelect = screen.getByTestId('role-select');
    expect(roleSelect).toHaveAttribute('id');
    expect(roleSelect).toHaveAttribute('name');
    
    const availabilitySelect = screen.getByLabelText(/what's your availability?/i);
    expect(availabilitySelect).toHaveAttribute('id');
    expect(availabilitySelect).toHaveAttribute('name');
    
    // Check submit button
    const submitButton = screen.getByRole('button', { name: /submit application/i });
    expect(submitButton).toHaveAttribute('type', 'submit');
  });

  // Test case: Responsive design
  it('has proper responsive classes', () => {
    const { container } = render(<JoinForm />);
    
    // Get the form element
    const form = screen.getByTestId('join-form');
    expect(form).toBeInTheDocument();
    
    // Check for responsive grid layout
    const grid = container.querySelector('.grid-cols-1');
    expect(grid).toBeInTheDocument();
    
    // Check for responsive padding on the form
    expect(form).toHaveClass('p-12');
    
    // Check for responsive text on the main heading
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveClass('text-4xl', 'md:text-6xl');
  });
});
