import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '../../../shared/contexts/ThemeContext';
import GlobalNavbar from '../../../shared/ui/GlobalNavbar';
import LandingPage from '../LandingPage';
import OurStoryPage from '../pages/OurStoryPage';
import ServicesPage from '../pages/ServicesPage';
import PortfolioPage from '../pages/PortfolioPage';
import PricingPage from '../pages/PricingPage';

const renderSite = (path = '/') =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <ThemeProvider>
        <GlobalNavbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </ThemeProvider>
    </MemoryRouter>
  );

describe('Explore dropdown opens dedicated pages', () => {
  it('lists Our Story, Services, Portfolio, and Pricing as page links', async () => {
    const user = userEvent.setup();
    renderSite();

    await user.click(screen.getByRole('button', { name: /^explore$/i }));

    const menu = screen.getByRole('menu', { name: /explore/i });
    expect(within(menu).getByRole('menuitem', { name: /our story/i })).toHaveAttribute(
      'href',
      '/our-story'
    );
    expect(within(menu).getByRole('menuitem', { name: /^services$/i })).toHaveAttribute(
      'href',
      '/services'
    );
    expect(within(menu).getByRole('menuitem', { name: /^portfolio$/i })).toHaveAttribute(
      'href',
      '/portfolio'
    );
    expect(within(menu).getByRole('menuitem', { name: /^pricing$/i })).toHaveAttribute(
      'href',
      '/pricing'
    );
  });

  it('navigates to the Pricing page from Explore', async () => {
    const user = userEvent.setup();
    renderSite();

    await user.click(screen.getByRole('button', { name: /^explore$/i }));
    await user.click(screen.getByRole('menuitem', { name: /^pricing$/i }));

    expect(screen.getByRole('heading', { name: /how we price work/i })).toBeInTheDocument();
  });

  it('does not expose sign-in or register actions', () => {
    renderSite();
    expect(screen.queryByRole('button', { name: /sign in/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /sign in/i })).not.toBeInTheDocument();
    expect(screen.queryByText(/dashboard/i)).not.toBeInTheDocument();
  });
});
