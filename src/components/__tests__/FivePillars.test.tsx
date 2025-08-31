import { render, screen } from '@testing-library/react';
import FivePillars from '../FivePillars';
import '@testing-library/jest-dom';

describe('FivePillars Component', () => {
  const pillars = [
    {
      title: 'Polymathy as Power',
      subtitle: 'One mind, many disciplines. One team, infinite possibilities.',
      color: 'from-blue-400 to-purple-500'
    },
    {
      title: 'Precision Over Prestige',
      subtitle: 'Excellence is earned. Execution is proof.',
      color: 'from-purple-400 to-cyan-500'
    },
    {
      title: 'Deep Trust, Radical Ownership',
      subtitle: "We don't micromanage. We multiply trust.",
      color: 'from-cyan-400 to-green-500'
    },
    {
      title: 'Speed with Soul',
      subtitle: 'Think clearly. Build boldly. Move consciously.',
      color: 'from-green-400 to-yellow-500'
    },
    {
      title: 'Impact Through Humanity',
      subtitle: 'Tech is our tool. People are our purpose.',
      color: 'from-yellow-400 to-red-500'
    }
  ];

  beforeEach(() => {
    render(<FivePillars />);
  });

  it('renders the section header correctly', () => {
    expect(screen.getByText('🔥 The Foundation of Excellence')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /The Five Pillars/ })).toBeInTheDocument();
    expect(screen.getByText(/The Unshakable Code of Visionary Polymaths/)).toBeInTheDocument();
  });

  it('renders all five pillars', () => {
    pillars.forEach((pillar, index) => {
      // Find the title by checking if the text includes the title
      const titleElement = screen.getByText((content, element) => {
        // Check if the element has the title text and is in a heading
        const hasText = (node) => node.textContent.includes(`${index + 1}. ${pillar.title}`);
        const nodeHasText = hasText({ textContent: content });
        const childrenDontHaveText = Array.from(element?.children || []).every(
          child => !hasText(child)
        );
        return nodeHasText && childrenDontHaveText;
      }, { selector: 'h3' });
      
      expect(titleElement).toBeInTheDocument();
      expect(screen.getByText(pillar.subtitle)).toBeInTheDocument();
    });
  });

  it('applies correct gradient colors to each pillar', () => {
    pillars.forEach((pillar) => {
      // Find the title element by partial text match
      const titleElement = screen.getByText((content, element) => {
        return element?.textContent?.includes(pillar.title) || false;
      }, { selector: 'h3' });
      
      // Check if the gradient class is applied to any parent element
      const gradientClass = pillar.color.split(' ')[0];
      const hasGradient = titleElement.closest('div')?.classList?.contains(gradientClass) ||
                        titleElement.closest('div')?.querySelector(`.${gradientClass}`) !== null;
      
      expect(hasGradient).toBe(true);
    });
  });

  it('renders pillar numbers in correct format', () => {
    pillars.forEach((_, index) => {
      const numberElement = screen.getByText(
        String(index + 1).padStart(2, '0'), 
        { selector: 'div' }
      );
      expect(numberElement).toBeInTheDocument();
    });
  });

  it('has alternating layout for desktop view', () => {
    // Get all pillar containers by their data-testid
    const pillarContainers = screen.getAllByTestId(/^pillar-\d+$/);
    
    pillarContainers.forEach((container, index) => {
      // Check if the container has the correct alternating class
      if (index % 2 === 1) {
        expect(container).toHaveClass('lg:flex-row-reverse');
      } else {
        expect(container).toHaveClass('lg:flex-row');
      }
    });
  });
});
