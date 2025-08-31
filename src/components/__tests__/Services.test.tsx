import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Services from '../Services';

/**
 * Test suite for the Services component
 * 
 * Tests cover:
 * - Rendering of all service categories and items
 * - Filter functionality
 * - Service card interactions
 * - Responsive layout
 * - Accessibility attributes
 * - Visual elements and hover effects
 */
describe('Services Component', () => {
  // Test data matching the component's structure
  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'development', label: 'Development' },
    { id: 'design', label: 'Design' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'ai', label: 'AI Solutions' }
  ];

  const sampleService = {
    icon: 'Globe',
    title: 'Website Development',
    description: 'Modern, responsive websites built with cutting-edge technologies and optimized for performance and user experience.',
    category: 'development',
    workflow: 'Discovery → Design → Development → Testing → Launch',
    color: 'from-blue-400 to-cyan-500'
  };

  // Test case: Renders the main section with correct attributes
  it('renders the main section with correct attributes', () => {
    render(<Services />);
    
    const section = screen.getByTestId('services-section');
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('bg-gradient-to-b', 'from-black', 'to-gray-900');
  });

  // Test case: Renders the header with title and description
  it('displays the header with title and description', () => {
    render(<Services />);
    
    expect(screen.getByText('Services We Offer')).toBeInTheDocument();
    expect(screen.getByText(/Comprehensive solutions powered by polymathic thinking/i)).toBeInTheDocument();
  });

  // Test case: Renders all category filters
  it('displays all category filter buttons', () => {
    render(<Services />);
    
    categories.forEach(category => {
      expect(screen.getByText(category.label)).toBeInTheDocument();
    });
  });

  // Test case: Filters services when a category is selected
  it('filters services when a category is selected', () => {
    render(<Services />);
    
    // Click on the Design category
    const designButton = screen.getByText('Design');
    fireEvent.click(designButton);
    
    // Check if the active filter is updated
    expect(designButton).toHaveClass('bg-gradient-to-r');
    expect(designButton).toHaveClass('from-blue-500');
    
    // Check if only design services are shown
    const developmentService = screen.queryByText('Website Development');
    expect(developmentService).not.toBeInTheDocument();
  });

  // Test case: Displays all services when "All Services" is selected
  it('shows all services when "All Services" is selected', () => {
    render(<Services />);
    
    // First select a specific category
    fireEvent.click(screen.getByText('Design'));
    // Then click "All Services"
    fireEvent.click(screen.getByText('All Services'));
    
    // Check if services from different categories are visible
    expect(screen.getByText('Website Development')).toBeInTheDocument();
    expect(screen.getByText('UI/UX Design')).toBeInTheDocument();
  });

  // Test case: Renders service cards with all required information
  it('renders service cards with all required information', () => {
    render(<Services />);
    
    // Get all service cards
    const serviceCards = screen.getAllByTestId('service-card');
    
    // Check first service card
    const firstCard = serviceCards[0];
    
    // Check title
    const title = within(firstCard).getByTestId('service-title');
    expect(title).toBeInTheDocument();
    
    // Check description
    const description = within(firstCard).getByTestId('service-description');
    expect(description).toBeInTheDocument();
    
    // Check workflow - now using getAllByText since there are multiple
    const workflowLabels = screen.getAllByText('WORKFLOW');
    expect(workflowLabels.length).toBeGreaterThan(0);
    
    // Check CTA buttons
    const getStartedButtons = screen.getAllByRole('button', { name: /get started/i });
    const getPricingButtons = screen.getAllByRole('button', { name: /get pricing/i });
    
    expect(getStartedButtons.length).toBeGreaterThan(0);
    expect(getPricingButtons.length).toBeGreaterThan(0);
  });

  // Test case: Has proper accessibility attributes
  it('has proper accessibility attributes', () => {
    render(<Services />);
    
    // Check all filter buttons have proper roles
    const filterButtons = screen.getAllByRole('button', { name: /services|development|design|strategy|marketing|ai solutions/i });
    expect(filterButtons.length).toBe(categories.length);
    
    // Check service cards have proper structure
    const serviceCards = screen.getAllByRole('article');
    expect(serviceCards.length).toBeGreaterThan(0);
    
    // Check all interactive elements have proper labels
    const ctaButtons = screen.getAllByRole('button', { name: /get started|get pricing/i });
    expect(ctaButtons.length).toBeGreaterThan(0);
  });

  // Test case: Has proper responsive classes
  it('has proper responsive classes', () => {
    render(<Services />);
    
    // Check services grid using data-testid
    const servicesGrid = screen.getByTestId('services-grid');
    expect(servicesGrid).toHaveClass('grid-cols-1');
    
    // Check filter buttons container
    const filtersContainer = screen.getByTestId('filter-tabs');
    expect(filtersContainer).toHaveClass('flex');
    expect(filtersContainer).toHaveClass('flex-wrap');
    expect(filtersContainer).toHaveClass('justify-center');
  });

  // Test case: Applies hover effects to service cards
  it('applies hover effects to service cards', () => {
    render(<Services />);
    
    const firstServiceCard = screen.getAllByTestId('service-card')[0];
    
    // Check initial state classes
    expect(firstServiceCard).toHaveClass('group');
    expect(firstServiceCard).toHaveClass('hover:transform');
    expect(firstServiceCard).toHaveClass('hover:scale-105');
    
    // Check for hover gradient effect using data-testid
    const gradientDiv = within(firstServiceCard).getByTestId('service-glow');
    expect(gradientDiv).toHaveClass('group-hover:opacity-10');
  });

  // Test case: Displays correct number of services per category
  it('displays correct number of services per category', () => {
    render(<Services />);
    
    // Count services in each category
    const serviceCounts = {
      development: 2,
      design: 1,
      strategy: 4,
      marketing: 3,
      ai: 1
    };
    
    // Test each category
    Object.entries(serviceCounts).forEach(([category, count]) => {
      // Click the category
      fireEvent.click(screen.getByText(
        category === 'ai' ? 'AI Solutions' : 
        category.charAt(0).toUpperCase() + category.slice(1)
      ));
      
      // Check the number of services
      const serviceCards = screen.getAllByRole('article');
      expect(serviceCards).toHaveLength(count);
      
      // Go back to all services
      fireEvent.click(screen.getByText('All Services'));
    });
  });
});
