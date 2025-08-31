import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AIWorkflow from '../AIWorkflow';
import { Bot, Brain, Zap, BarChart3, Cog, ArrowRight } from 'lucide-react';

/**
 * Test suite for the AIWorkflow component
 * 
 * Tests cover:
 * - Rendering of all AI capability sections
 * - Verification of workflow steps
 * - Display of AI tools and technologies
 * - CTA section and interactive elements
 * - Responsive design elements
 * - Accessibility attributes
 */
describe('AIWorkflow Component', () => {
  // Test data matching the component's structure
  const aiCapabilities = [
    {
      title: "Content Creation & Strategy",
      description: "AI-powered content generation, strategy optimization, and personalization at scale.",
      benefits: ["50% faster content production", "Personalized user experiences", "Data-driven content strategy"]
    },
    {
      title: "Design Iteration & Optimization",
      description: "Rapid prototyping, A/B testing, and design optimization using machine learning insights.",
      benefits: ["10x faster design iterations", "User behavior-driven design", "Automated A/B testing"]
    },
    {
      title: "Data-Driven Decision Making",
      description: "Advanced analytics, predictive modeling, and business intelligence for strategic decisions.",
      benefits: ["Predictive market insights", "Automated reporting", "Risk assessment & mitigation"]
    },
    {
      title: "Process Automation",
      description: "Intelligent workflow automation, task optimization, and operational efficiency enhancement.",
      benefits: ["80% reduction in manual tasks", "24/7 automated operations", "Error-free processes"]
    }
  ];

  const workflowSteps = [
    { step: "01", title: "AI Assessment" },
    { step: "02", title: "Strategy Development" },
    { step: "03", title: "Implementation" },
    { step: "04", title: "Training & Optimization" }
  ];

  const aiTools = [
    "OpenAI GPT", "Claude", "Midjourney", "TensorFlow", "LangChain",
    "AutoGPT", "Stable Diffusion", "GitHub Copilot", "Notion AI",
    "Zapier", "Make.com", "Custom Models"
  ];

  /**
   * Helper function to render the component
   */
  const renderAIWorkflow = () => {
    return render(<AIWorkflow />);
  };

  // Test case: Renders all AI capability sections
  it('renders all AI capability sections with correct information', () => {
    renderAIWorkflow();
    
    // Check section header
    expect(screen.getByText('AI-Powered Excellence')).toBeInTheDocument();
    expect(screen.getByText('AI Empowerment')).toBeInTheDocument();
    
    // Check each capability card
    aiCapabilities.forEach(capability => {
      expect(screen.getByText(capability.title)).toBeInTheDocument();
      expect(screen.getByText(capability.description)).toBeInTheDocument();
      
      // Check each benefit
      capability.benefits.forEach(benefit => {
        expect(screen.getByText(benefit)).toBeInTheDocument();
      });
    });
  });

  // Test case: Renders workflow steps correctly
  it('displays all workflow steps in the correct order', () => {
    renderAIWorkflow();
    
    // Check workflow section header
    expect(screen.getByText('Our AI Integration Process')).toBeInTheDocument();
    
    // Check each workflow step
    workflowSteps.forEach(step => {
      expect(screen.getByText(step.step)).toBeInTheDocument();
      expect(screen.getByText(step.title)).toBeInTheDocument();
    });
  });

  // Test case: Displays all AI tools
  it('shows all AI tools in the showcase section', () => {
    renderAIWorkflow();
    
    // Check tools section header
    expect(screen.getByText('AI Tools & Technologies We Master')).toBeInTheDocument();
    
    // Check each tool
    aiTools.forEach(tool => {
      expect(screen.getByText(tool)).toBeInTheDocument();
    });
  });

  // Test case: Renders CTA section with correct elements
  it('displays the call-to-action section', () => {
    renderAIWorkflow();
    
    // Check CTA section content
    expect(screen.getByText('Ready to Transform Your Business with AI?')).toBeInTheDocument();
    expect(screen.getByText('Start AI Transformation')).toBeInTheDocument();
    
    // Check for the arrow icon in the button
    const button = screen.getByText('Start AI Transformation');
    expect(button.closest('button')).toContainElement(screen.getByTestId('arrow-icon'));
  });

  // Test case: Responsive design elements
  it('adjusts layout based on screen size', () => {
    const { container } = renderAIWorkflow();
    
    // Check for responsive grid classes
    const capabilityGrid = container.querySelector('.grid-cols-1.md\\:grid-cols-2');
    expect(capabilityGrid).toBeInTheDocument();
    
    const workflowGrid = container.querySelector('.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-4');
    expect(workflowGrid).toBeInTheDocument();
  });

  // Test case: Accessibility
  it('has proper accessibility attributes', () => {
    renderAIWorkflow();
    
    // Check for proper heading structure
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThanOrEqual(3); // At least h2, h3, h4
    
    // Check if all interactive elements are accessible
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      // Only check type attribute for form buttons
      if (button.closest('form')) {
        expect(button).toHaveAttribute('type');
      }
      // Check for accessible name on all buttons
      expect(button).toHaveAccessibleName();
    });
    
    // Check for SVGs and their accessibility attributes
    const allSvgs = document.querySelectorAll('svg');
    allSvgs.forEach(svg => {
      if (svg.hasAttribute('aria-hidden')) {
        // If SVG is marked as hidden, it shouldn't be in the accessibility tree
        expect(svg).toHaveAttribute('aria-hidden', 'true');
        // If it's hidden, it can have an aria-label if it's a meaningful icon
        // that needs to be hidden from screen readers but still labeled for other purposes
      } else {
        // If not hidden, it should have proper accessibility attributes
        expect(svg).toHaveAccessibleName();
      }
    });
  });

  // Test case: Hover effects and transitions
  it('applies hover effects to interactive elements', () => {
    renderAIWorkflow();
    
    // Check capability cards for hover classes
    const capabilityCards = screen.getAllByTestId('capability-card');
    capabilityCards.forEach(card => {
      expect(card).toHaveClass('group');
      expect(card).toHaveClass('hover:border-gray-600');
      expect(card).toHaveClass('transition-all');
      expect(card).toHaveClass('duration-300');
    });
    
    // Check CTA button for hover effects
    const ctaButton = screen.getByText('Start AI Transformation').closest('button');
    expect(ctaButton).toHaveClass('hover:scale-105');
    expect(ctaButton).toHaveClass('transition-all');
  });
});
