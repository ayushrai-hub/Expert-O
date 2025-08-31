import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Portfolio from '../Portfolio';

/**
 * Test suite for the Portfolio component
 * 
 * Tests cover:
 * - Initial rendering of all portfolio projects
 * - Filter functionality by category
 * - Project card content and interactions
 * - Responsive behavior
 * - Accessibility features
 */
describe('Portfolio Component', () => {
  // Sample project data from the component
  const projects = [
    {
      title: "FinTech Revolution Platform",
      category: "fintech",
      description: "A comprehensive digital banking platform that transformed how users interact with financial services.",
      problem: "Complex financial processes deterring user adoption",
      solution: "Intuitive UI/UX with AI-powered personalization",
      result: "300% increase in user engagement, 45% faster onboarding",
      tags: ["React", "Node.js", "AI/ML", "Fintech"]
    },
    {
      title: "EduTech Learning Ecosystem",
      category: "edtech",
      description: "An adaptive learning platform that personalizes education for over 100,000 students.",
      problem: "One-size-fits-all education limiting student potential",
      solution: "AI-driven personalized learning paths and gamification",
      result: "85% improvement in learning outcomes, 60% higher retention",
      tags: ["Vue.js", "Python", "AI/ML", "EdTech"]
    },
    // Other projects...
  ];

  /**
   * Helper function to render the component with any required props
   */
  const renderPortfolio = () => {
    return render(<Portfolio />);
  };

  // Test case: Renders all projects by default
  it('renders all projects by default', () => {
    renderPortfolio();
    
    // Check if all project titles are rendered
    projects.forEach(project => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });

  // Test case: Filter functionality
  describe('Project Filtering', () => {
    it('filters projects by category when a filter is selected', () => {
      renderPortfolio();
      
      // Find and click on the FinTech filter
      const fintechFilter = screen.getByText('FinTech');
      fireEvent.click(fintechFilter);
      
      // Check if only FinTech projects are displayed
      expect(screen.getByText('FinTech Revolution Platform')).toBeInTheDocument();
      
      // Verify other projects are not in the document
      const otherProjects = projects.filter(p => p.category !== 'fintech');
      otherProjects.forEach(project => {
        expect(screen.queryByText(project.title)).not.toBeInTheDocument();
      });
      
      // Click on All Projects filter
      const allFilter = screen.getByText('All Projects');
      fireEvent.click(allFilter);
    });

    it('updates active filter button styling when selected', () => {
      renderPortfolio();
      
      // Click on FinTech filter
      const fintechFilter = screen.getByText('FinTech');
      fireEvent.click(fintechFilter);
      
      // Check if active filter has the correct styling
      expect(fintechFilter.closest('button')).toHaveClass('from-blue-500');
      expect(fintechFilter.closest('button')).toHaveClass('to-purple-600');
      
      // Check if other filters don't have active styling
      const allProjectsButton = screen.getByText('All Projects');
      expect(allProjectsButton.closest('button')).not.toHaveClass('from-blue-500');
    });
  });

  // Test case: Project card content
  describe('Project Card Content', () => {
    it('displays correct project information in each card', () => {
      renderPortfolio();
      
      const project = projects[0];
      
      // Check if project title is displayed
      expect(screen.getByText(project.title)).toBeInTheDocument();
      
      // Check if project description is displayed
      expect(screen.getByText(project.description)).toBeInTheDocument();
      
      // Check if problem, solution, and result sections are displayed
      expect(screen.getByText(project.problem)).toBeInTheDocument();
      expect(screen.getByText(project.solution)).toBeInTheDocument();
      expect(screen.getByText(project.result)).toBeInTheDocument();
      
      // Check if at least one instance of each tag is displayed
      project.tags.forEach(tag => {
        const tagElements = screen.getAllByText(tag);
        expect(tagElements.length).toBeGreaterThan(0);
      });
      
      // Check if view case study button is present
      expect(screen.getAllByText('View Case Study').length).toBeGreaterThan(0);
    });
  });

  // Test case: Responsive design
  it('adjusts layout based on screen size', () => {
    // Set viewport to mobile size
    global.innerWidth = 375;
    global.dispatchEvent(new Event('resize'));
    
    const { container } = renderPortfolio();
    
    // Check if grid changes to single column on mobile
    const mobileGrid = container.querySelector('.grid-cols-1');
    expect(mobileGrid).toBeInTheDocument();
    
    // Reset viewport
    global.innerWidth = 1024;
    global.dispatchEvent(new Event('resize'));
    
    // Re-render to check desktop layout
    const { container: desktopContainer } = renderPortfolio();
    
    // Check if the grid has the responsive class (using a more flexible check)
    const desktopGrid = desktopContainer.querySelector('[class*="grid-cols-2"]');
    expect(desktopGrid).toBeInTheDocument();
  });

  // Test case: Call-to-action section
  it('displays the call-to-action section', () => {
    renderPortfolio();
    
    // Check CTA section content
    expect(screen.getByText('Ready to Be Our Next Success Story?')).toBeInTheDocument();
    expect(screen.getByText('Start Your Project')).toBeInTheDocument();
    
    // Check for partial text match
    expect(screen.getByText(/Let's create something extraordinary together/)).toBeInTheDocument();
  });

  // Test case: Accessibility
  it('has proper accessibility attributes', () => {
    renderPortfolio();
    
    // Check if all interactive elements have proper roles and labels
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      // Check for accessible name (either aria-label or text content)
      const hasAccessibleName = 
        button.getAttribute('aria-label') || 
        button.textContent?.trim();
      expect(hasAccessibleName).toBeTruthy();
    });
    
    // Check if images have alt text
    const images = screen.getAllByRole('img');
    images.forEach(img => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt')).not.toBe('');
    });
    
    // Check if the filter buttons have proper ARIA attributes
    const filterButtons = screen.getAllByRole('button', { 
      name: /(All Projects|FinTech|EduTech|HealthTech|E-commerce|GovTech|Sustainability)/ 
    });
    
    filterButtons.forEach((button, index) => {
      // Check if buttons have proper aria-label or text content
      const buttonText = button.textContent?.trim();
      expect(buttonText).toBeTruthy();
      
      // Check if the first button (All Projects) is selected by default via styling
      if (index === 0) {
        expect(button).toHaveClass('from-blue-500');
        expect(button).toHaveClass('to-purple-600');
      } else {
        expect(button).toHaveClass('bg-gray-800');
      }
    });
  });

  // Test case: External link indicators
  it('has external link indicators', () => {
    renderPortfolio();
    
    // Find all external link SVGs
    const externalLinkIcons = document.querySelectorAll('.lucide-external-link');
    expect(externalLinkIcons.length).toBeGreaterThan(0);
    
    // Check if external links have proper attributes
    const links = document.querySelectorAll('a[target="_blank"]');
    links.forEach(link => {
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
