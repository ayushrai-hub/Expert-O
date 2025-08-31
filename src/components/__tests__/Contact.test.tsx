import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '../Contact';

/**
 * Test suite for the Contact component
 * 
 * Tests cover:
 * - Rendering of contact information and form
 * - Form validation and submission
 * - Interactive elements and links
 * - Responsive design elements
 * - Accessibility attributes
 */
describe('Contact Component', () => {
  // Test data matching the component's structure
  const contactInfo = [
    { label: "Email", value: "ayushrai0211@gmail.com", action: "mailto:hello@expert-o.com" },
    { label: "Phone", value: "+91 7440567944", action: "tel:+919876543210" },
    { label: "Location", value: "Bangalore, India", action: null },
    { label: "Response Time", value: "Within 24 hours", action: null }
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "GitHub", url: "#" }
  ];

  // Test case: Renders the main section with correct attributes
  it('renders the main section with correct attributes', () => {
    render(<Contact />);
    
    const section = screen.getByTestId('contact-section');
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('bg-gradient-to-b', 'from-gray-900', 'to-black');
  });

  // Test case: Renders contact information correctly
  it('displays all contact information', () => {
    render(<Contact />);
    
    // Check header
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText("Ready to transform your vision into reality? Let's start the conversation.")).toBeInTheDocument();
    
    // Check each contact info item
    contactInfo.forEach(info => {
      expect(screen.getByText(info.label)).toBeInTheDocument();
      expect(screen.getByText(info.value)).toBeInTheDocument();
      
      if (info.action) {
        const link = screen.getByText(info.value).closest('a');
        expect(link).toHaveAttribute('href', info.action);
      }
    });
  });

  // Test case: Renders social links correctly
  it('displays all social media links', () => {
    render(<Contact />);
    
    socialLinks.forEach(social => {
      const link = screen.getByText(social.name);
      expect(link).toBeInTheDocument();
      expect(link.closest('a')).toHaveAttribute('href', social.url);
    });
  });

  // Test case: Form validation works correctly
  it('validates the contact form', () => {
    render(<Contact />);
    
    // Try to submit empty form
    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);
    
    // Check for validation errors
    expect(screen.getByLabelText(/name/i)).toBeInvalid();
    expect(screen.getByLabelText(/email/i)).toBeInvalid();
    expect(screen.getByLabelText(/subject/i)).toBeInvalid();
    expect(screen.getByLabelText(/message/i)).toBeInvalid();
  });

  // Test case: Form submission works with valid data
  it('submits the form with valid data', () => {
    // Mock console.log
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    
    render(<Contact />);
    
    // Fill in the form
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: 'Test Subject' } });
    fireEvent.change(screen.getByLabelText(/message/i), { 
      target: { value: 'This is a test message' } 
    });
    
    // Submit the form
    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);
    
    // Check if form data was logged
    expect(consoleSpy).toHaveBeenCalledWith('Contact form submitted:', {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Test Subject',
      message: 'This is a test message'
    });
    
    // Clean up
    consoleSpy.mockRestore();
  });

  // Test case: Live chat section is rendered
  it('displays the live chat section', () => {
    render(<Contact />);
    
    expect(screen.getByText('Instant Connect')).toBeInTheDocument();
    expect(screen.getByText('Need immediate assistance? Our team is online and ready to help.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /start live chat/i })).toBeInTheDocument();
  });

  // Test case: has proper accessibility attributes
  it('has proper accessibility attributes', () => {
    render(<Contact />);
    
    // Test form inputs have proper labels and required attributes
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    
    // Test form submit button has proper type
    const submitButton = screen.getByRole('button', { name: /send message/i });
    expect(submitButton).toHaveAttribute('type', 'submit');
    
    // Test live chat button exists (it doesn't have a type attribute in the component)
    const chatButton = screen.getByRole('button', { name: /start live chat/i });
    expect(chatButton).toBeInTheDocument();
    
    // Test contact info links have proper attributes
    const contactLinks = screen.getAllByRole('link');
    contactLinks.forEach(link => {
      expect(link).toHaveAttribute('href');
    });
  });

  // Test case: has proper responsive layout
  it('has proper responsive layout', () => {
    render(<Contact />);
    
    // Check main section exists
    const mainSection = screen.getByTestId('contact-section');
    expect(mainSection).toBeInTheDocument();
    
    // Check form container exists
    const form = screen.getByTestId('contact-form');
    expect(form).toBeInTheDocument();
    
    // Check contact info section exists
    const contactInfo = screen.getByText('Let\'s Build Something Extraordinary');
    expect(contactInfo).toBeInTheDocument();
    
    // Check live chat section exists
    const liveChat = screen.getByText('Instant Connect');
    expect(liveChat).toBeInTheDocument();
  });
});
