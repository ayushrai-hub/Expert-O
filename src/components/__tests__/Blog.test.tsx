import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Blog from '../Blog';
import { Clock, ArrowRight, TrendingUp } from 'lucide-react';

// Mock the lucide-react icons
jest.mock('lucide-react', () => ({
  Clock: () => <div data-testid="clock-icon">Clock</div>,
  ArrowRight: () => <div data-testid="arrow-right">→</div>,
  TrendingUp: () => <div data-testid="trending-up">↑</div>
}));

describe('Blog Component', () => {
  beforeEach(() => {
    render(<Blog />);
  });

  it('renders the main header with title and description', () => {
    // Check main title with gradient
    const mainTitle = screen.getByText('Blog & Insights');
    expect(mainTitle).toBeInTheDocument();
    expect(mainTitle).toHaveClass('bg-gradient-to-r');
    
    // Check description
    const description = screen.getByText(/Deep thoughts on technology, culture, and the future from our polymath collective/i);
    expect(description).toBeInTheDocument();
  });

  it('renders the featured posts section with correct content', () => {
    const featuredSection = screen.getByRole('heading', { name: /Featured Articles/i });
    expect(featuredSection).toBeInTheDocument();
    
    // Check if featured posts are rendered
    expect(screen.getByText('The Future of Polymathic Thinking in Tech')).toBeInTheDocument();
    expect(screen.getByText('AI-Augmented Workflows: 5x Productivity Guide')).toBeInTheDocument();
    
    // Check if categories are present
    expect(screen.getByText('Thought Leadership')).toBeInTheDocument();
    expect(screen.getByText('AI & Productivity')).toBeInTheDocument();
  });

  it('renders the regular posts section with correct content', () => {
    const regularSection = screen.getByRole('heading', { name: /Latest Insights/i });
    expect(regularSection).toBeInTheDocument();
    
    // Check if regular posts are rendered
    expect(screen.getByText('Building Trust in Distributed Teams')).toBeInTheDocument();
    expect(screen.getByText("India's Digital Transformation: Opportunities Ahead")).toBeInTheDocument();
    expect(screen.getByText('Sustainable Tech: Building for Tomorrow')).toBeInTheDocument();
    
    // Check if read times are displayed
    expect(screen.getByText('6 min read')).toBeInTheDocument();
    expect(screen.getByText('10 min read')).toBeInTheDocument();
    expect(screen.getByText('7 min read')).toBeInTheDocument();
  });

  it('renders the newsletter signup section', () => {
    const newsletterTitle = screen.getByRole('heading', { 
      name: /Stay Updated with Expert-O Insights/i 
    });
    expect(newsletterTitle).toBeInTheDocument();
    
    // Check email input using the exact placeholder text from the component
    const emailInput = screen.getByPlaceholderText('Enter your email address');
    expect(emailInput).toBeInTheDocument();
    
    // Check subscribe button
    const subscribeButton = screen.getByRole('button', { name: /Subscribe/i });
    expect(subscribeButton).toBeInTheDocument();
  });

  it('renders the correct number of posts', () => {
    // Should have 6 posts in total (2 featured + 4 regular)
    const articles = screen.getAllByRole('article');
    expect(articles).toHaveLength(6);
    
    // Check that the featured posts are in the featured section
    const featuredSection = screen.getByText('Featured Articles').closest('div');
    const featuredArticles = within(featuredSection as HTMLElement).getAllByRole('article');
    expect(featuredArticles.length).toBe(2);
      
    // Check that the regular posts are in the regular section
    const regularSection = screen.getByText('Latest Insights').closest('div');
    const regularArticles = within(regularSection as HTMLElement).getAllByRole('article');
    expect(regularArticles.length).toBe(4);
  });

  it('applies correct styling classes to elements', () => {
    // Check gradient text on main title
    const mainTitle = screen.getByText('Blog & Insights');
    expect(mainTitle).toHaveClass('bg-gradient-to-r');
    
    // Check featured post card styling
    const featuredPost = screen.getByText('The Future of Polymathic Thinking in Tech')
      .closest('article');
    expect(featuredPost).toHaveClass('group');
    
    // Check regular post card styling
    const regularPost = screen.getByText('Building Trust in Distributed Teams')
      .closest('article');
    expect(regularPost).toHaveClass('group');
  });
});