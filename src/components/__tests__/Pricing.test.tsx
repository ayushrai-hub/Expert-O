import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pricing from '../Pricing';
import { Zap, Rocket, Crown, Calculator, Phone } from 'lucide-react';

/**
 * Test suite for the Pricing component
 * 
 * Tests cover:
 * - Initial rendering of all pricing plans
 * - Billing toggle functionality
 * - Price calculations and display
 * - Custom estimate form interaction
 * - UI elements and responsive behavior
 */
describe('Pricing Component', () => {
  // Test data
  const pricingPlans = [
    { name: "Starter Sprint", icon: Zap, price: { monthly: 2499, yearly: 24990 } },
    { name: "Growth Engine", icon: Rocket, price: { monthly: 7999, yearly: 79990 } },
    { name: "Enterprise Elite", icon: Crown, price: { monthly: 15999, yearly: 159990 } }
  ];

  /**
   * Helper function to render the component with any required props
   */
  const renderPricing = () => {
    return render(<Pricing />);
  };

  // Test case: Renders all pricing plans
  it('renders all pricing plans with correct information', () => {
    renderPricing();
    
    // Check if all plan names are rendered
    pricingPlans.forEach(plan => {
      expect(screen.getByText(plan.name)).toBeInTheDocument();
    });

    // Check if monthly prices are displayed by default
    pricingPlans.forEach(plan => {
      expect(screen.getByText(`₹${plan.price.monthly.toLocaleString()}`)).toBeInTheDocument();
    });
  });

  // Test case: Toggles between monthly and yearly billing
  it('toggles between monthly and yearly billing', () => {
    renderPricing();
    
    // Find the toggle button
    const toggleButton = screen.getByRole('switch');
    
    // Check initial state (monthly is active)
    expect(toggleButton).toHaveAttribute('aria-checked', 'false');
    
    // Verify monthly price is displayed initially
    const monthlyPrice = screen.getByText('₹2,499');
    expect(monthlyPrice).toBeInTheDocument();
    
    // Click the toggle to switch to yearly
    fireEvent.click(toggleButton);
    
    // Check if toggle state changed to yearly
    expect(toggleButton).toHaveAttribute('aria-checked', 'true');
    
    // Verify yearly price is displayed and monthly is not
    const yearlyPrice = screen.getByText('₹24,990');
    expect(yearlyPrice).toBeInTheDocument();
    expect(screen.queryByText('₹2,499')).not.toBeInTheDocument();
    
    // Verify the save text is shown
    expect(screen.getByText(/(Save 20%)/)).toBeInTheDocument();
  });

  // Test case: Displays correct features for each plan
  it('displays the correct features for each plan', () => {
    renderPricing();
    
    // Check for specific features in each plan
    expect(screen.getByText('Single project focus')).toBeInTheDocument();
    expect(screen.getByText('Custom AI workflow integration')).toBeInTheDocument();
    expect(screen.getByText('Dedicated polymath team')).toBeInTheDocument();
  });

  // Test case: Custom Estimate Form
  describe('Custom Estimate Form', () => {
    let originalConsoleLog: any;
    
    beforeEach(() => {
      // Store the original console.log
      originalConsoleLog = console.log;
      // Mock console.log to capture output
      console.log = jest.fn();
    });
    
    afterEach(() => {
      // Restore the original console.log
      console.log = originalConsoleLog;
    });

    it('allows users to fill out the custom estimate form', async () => {
      renderPricing();
      
      // Find form elements using test IDs (you'll need to add these to your component)
      const projectTypeSelect = screen.getByLabelText('Project Type');
      const timelineSelect = screen.getByLabelText('Timeline');
      const budgetSelect = screen.getByLabelText('Budget Range');
      
      // Find the form by its submit button
      const submitButton = screen.getByRole('button', { name: /get custom estimate/i });
      
      // Fill out the form
      fireEvent.change(projectTypeSelect, { target: { value: 'Website Development' } });
      fireEvent.change(timelineSelect, { target: { value: '3-4 weeks' } });
      fireEvent.change(budgetSelect, { target: { value: '1L-3L' } });
      
      // Submit the form
      fireEvent.click(submitButton);
      
      // Check if the form values were set correctly
      expect(projectTypeSelect).toHaveValue('Website Development');
      expect(timelineSelect).toHaveValue('3-4 weeks');
      expect(budgetSelect).toHaveValue('1L-3L');
    });
  });

  // Test case: Popular plan styling
  it('applies special styling to the popular plan', () => {
    renderPricing();
    
    // Find the popular plan (Growth Engine)
    const popularPlan = screen.getByText('Growth Engine').closest('div[class*="rounded-2xl"]');
    
    // Check for popular plan styling
    expect(popularPlan).toHaveClass('border-purple-500');
    expect(popularPlan).toHaveClass('shadow-2xl');
    expect(screen.getByText('MOST POPULAR')).toBeInTheDocument();
  });

  // Test case: Discovery call CTA
  it('displays the discovery call CTA section', () => {
    renderPricing();
    
    // Check for the discovery call section
    expect(screen.getByText('Not Sure Which Plan Fits?')).toBeInTheDocument();
    
    // Check for the exact text in the description
    const discoveryText = screen.getByText(
      /Book a free 30-minute discovery call with our polymaths to discuss your vision and find the perfect solution\./i
    );
    expect(discoveryText).toBeInTheDocument();
    
    // Check for the CTA button
    expect(screen.getByRole('button', { name: /book free discovery call/i })).toBeInTheDocument();
  });

  // Test case: Responsive design
  it('renders correctly on different screen sizes', () => {
    // Set viewport to mobile size
    global.innerWidth = 375;
    global.dispatchEvent(new Event('resize'));
    
    const { container } = renderPricing();
    
    // Check if the grid changes to a single column on mobile
    const grid = container.querySelector('.grid-cols-1');
    expect(grid).toBeInTheDocument();
    
    // Reset viewport
    global.innerWidth = 1024;
    global.dispatchEvent(new Event('resize'));
  });

  // Test case: Accessibility
  it('is accessible with proper ARIA attributes', () => {
    renderPricing();
    
    // Check for proper ARIA labels on interactive elements
    const toggleButton = screen.getByRole('switch');
    expect(toggleButton).toHaveAttribute('aria-label', 'Toggle billing period');
    expect(toggleButton).toHaveAttribute('aria-checked', 'false');
    
    // Check form labels are properly associated
    expect(screen.getByLabelText('Project Type')).toBeInTheDocument();
    expect(screen.getByLabelText('Timeline')).toBeInTheDocument();
    expect(screen.getByLabelText('Budget Range')).toBeInTheDocument();
    
    // Toggle the switch and check ARIA state updates
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-checked', 'true');
  });
});
