//import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';
import '@testing-library/jest-dom';

describe('Hero Component', () => {
  beforeEach(() => {
    render(<Hero />);
  });

  it('renders the main heading', () => {
    // Check for the main heading text
    expect(screen.getByRole('heading', { 
      name: /Elite Polymaths, Powerful Execution/ 
    })).toBeInTheDocument();
  });

  it('displays the tagline and description', () => {
    expect(screen.getByText(/Shape the Future with Expert-O/)).toBeInTheDocument();
    expect(
      screen.getByText(
        /We are the visionary collective of polymaths driving India's next-gen growth/
      )
    ).toBeInTheDocument();
  });

  it('renders the CTA buttons', () => {
    const workButton = screen.getByRole('button', { name: /Work With Us/ });
    const exploreButton = screen.getByRole('button', { name: /Explore Services/ });
    const joinButton = screen.getByRole('button', { name: /Join the Tribe/ });
    
    expect(workButton).toBeInTheDocument();
    expect(exploreButton).toBeInTheDocument();
    expect(joinButton).toBeInTheDocument();
  });

  it('displays the key stats section', () => {
    // Check for stats by their unique values
    expect(screen.getByText('5x')).toBeInTheDocument();
    expect(screen.getByText('Faster Execution')).toBeInTheDocument();
    
    expect(screen.getByText('50+')).toBeInTheDocument();
    
    // Find the specific instance of "Elite Polymaths" in the stats section
    const statsSections = screen.getAllByText('Elite Polymaths');
    const statsSection = statsSections.find(el => 
      el.className.includes('text-gray-400')
    );
    expect(statsSection).toBeInTheDocument();
    
    expect(screen.getByText('100%')).toBeInTheDocument();
    expect(screen.getByText('AI-Augmented')).toBeInTheDocument();
  });

  it('renders the scroll indicator', () => {
    // The scroll indicator is a div with specific classes
    const scrollIndicator = document.querySelector('.absolute.bottom-8');
    expect(scrollIndicator).toBeInTheDocument();
  });

  it('has the correct background gradient', () => {
    // The hero section is the main section with the gradient classes
    const heroSection = document.querySelector('section.relative');
    expect(heroSection).toHaveClass('bg-gradient-to-br', 'from-black', 'via-gray-900', 'to-black');
  });
});
