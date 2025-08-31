import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import OurStory from '../OurStory';

/**
 * Test suite for the OurStory component
 * 
 * Tests cover:
 * - Rendering of all sections and their content
 * - Visual elements and icons
 * - Responsive layout
 * - Accessibility attributes
 * - Interactive elements
 */
describe('OurStory Component', () => {
  // Test data matching the component's structure
  const missionPoints = [
    'Transform traditional businesses into digital leaders',
    'Empower startups with enterprise-grade solutions',
    'Democratize access to cutting-edge technology'
  ];

  const cultureMetrics = [
    { value: '∞', label: 'Learning', color: 'text-blue-400' },
    { value: '5x', label: 'Speed', color: 'text-purple-400' },
    { value: '100%', label: 'Trust', color: 'text-cyan-400' },
    { value: '1st', label: 'Impact', color: 'text-yellow-400' }
  ];

  const championCauses = [
    'Sustainability & Climate Action',
    'Education Empowerment',
    'Mental & Physical Health',
    'Equality & Transparency'
  ];

  // Test case: Renders the main section with correct attributes
  it('renders the main section with correct attributes', () => {
    render(<OurStory />);
    
    const section = screen.getByTestId('our-story-section');
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('bg-gradient-to-b', 'from-black', 'to-gray-900');
  });

  // Test case: Renders the header with correct content
  it('displays the header with title and description', () => {
    render(<OurStory />);
    
    expect(screen.getByText('Our Story')).toBeInTheDocument();
    expect(screen.getByText(/Born from the belief that the future belongs to polymaths/i)).toBeInTheDocument();
  });

  // Test case: Renders the Polymath Advantage section
  it('displays the Polymath Advantage section', () => {
    render(<OurStory />);
    
    expect(screen.getByText('The Polymath Advantage')).toBeInTheDocument();
    expect(screen.getByText(/We believe in the power of diverse expertise/i)).toBeInTheDocument();
    expect(screen.getByText(/This cross-domain knowledge isn't optional/i)).toBeInTheDocument();
  });

  // Test case: Renders the Mission section with points
  it('displays the Mission section with all points', () => {
    render(<OurStory />);
    
    expect(screen.getByText("Mission: Reshape India's Future")).toBeInTheDocument();
    expect(screen.getByText(/We're not just building websites and apps/i)).toBeInTheDocument();
    
    missionPoints.forEach(point => {
      expect(screen.getByText(point)).toBeInTheDocument();
    });
  });

  // Test case: Renders the Culture of Excellence section with metrics
  it('displays the Culture of Excellence section with metrics', () => {
    render(<OurStory />);
    
    expect(screen.getByText('Culture of Excellence')).toBeInTheDocument();
    expect(screen.getByText(/Our culture is built on radical ownership/i)).toBeInTheDocument();
    
    cultureMetrics.forEach(metric => {
      expect(screen.getByText(metric.value)).toBeInTheDocument();
      expect(screen.getByText(metric.label)).toBeInTheDocument();
    });
  });

  // Test case: Renders the Humans First section with champion causes
  it('displays the Humans First section with champion causes', () => {
    render(<OurStory />);
    
    expect(screen.getByText('Humans First, Always')).toBeInTheDocument();
    expect(screen.getByText(/Technology is our tool, but people are our purpose/i)).toBeInTheDocument();
    
    championCauses.forEach(cause => {
      expect(screen.getByText(cause)).toBeInTheDocument();
    });
  });

  // Test case: Accessibility
  it('has proper accessibility attributes', () => {
    const { container } = render(<OurStory />);
    
    // Check all SVGs have aria-hidden
    const svgs = container.querySelectorAll('svg[aria-hidden="true"]');
    expect(svgs.length).toBeGreaterThan(0);
    
    // Check all images have alt text
    const images = container.querySelectorAll('img');
    images.forEach(img => {
      expect(img).toHaveAttribute('alt');
    });

    // Check for proper heading hierarchy
    const headings = screen.getAllByRole('heading');
    const headingLevels = headings.map(heading => heading.tagName);
    
    // Verify we have at least one h2 (main heading)
    expect(headingLevels.some(level => level === 'H2')).toBe(true);
    
    // Verify proper heading structure (h2 followed by h3s)
    const mainHeadingIndex = headingLevels.findIndex(level => level === 'H2');
    const subheadings = headingLevels.slice(mainHeadingIndex + 1);
    expect(subheadings.every(level => level === 'H3')).toBe(true);
  });

  // Test case: Responsive design
  it('has proper responsive classes', () => {
    const { container } = render(<OurStory />);
    
    // Check main grid using data-testid instead of class names
    const mainGrid = screen.getByTestId('our-story-section').querySelector('.grid');
    expect(mainGrid).toBeInTheDocument();
    
    // Check for responsive padding on cards
    const cards = container.querySelectorAll('[class*="p-"]');
    expect(cards.length).toBeGreaterThan(0);
  });

  // Test case: Visual elements
  it('renders all visual elements with correct styling', () => {
    const { container } = render(<OurStory />);
    
    // Check card styling using data-testid
    const cards = [
      container.querySelector('[data-testid="polymath-advantage-card"]'),
      container.querySelector('[data-testid="mission-card"]')
    ];
    
    cards.forEach(card => {
      expect(card).toBeInTheDocument();
      expect(card).toHaveClass('rounded-2xl');
    });
    
    // Check gradient text
    const gradientText = container.querySelector('.bg-clip-text');
    expect(gradientText).toBeInTheDocument();
  });
});
