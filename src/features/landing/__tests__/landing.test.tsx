import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ClientForm, Contact, JoinForm } from '../forms';
import { FivePillars, Hero, OurStory, Services, Work } from '../sections';

describe('Landing sections', () => {
  it('states who Expert-O is without fabricated metrics', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/polymaths/i);
    expect(screen.queryByText('50+')).not.toBeInTheDocument();
    expect(screen.queryByText('100%')).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: /start a conversation/i })).toHaveAttribute('href', '#contact');
  });

  it('explains why the collective exists', () => {
    render(<OurStory />);
    expect(screen.getByRole('heading', { name: /why expert-o exists/i })).toBeInTheDocument();
  });

  it('renders the five operating principles', () => {
    render(<FivePillars />);
    expect(screen.getByText(/polymaths in action/i)).toBeInTheDocument();
    expect(screen.getByText(/humans first, always/i)).toBeInTheDocument();
  });

  it('lists concrete capabilities', () => {
    render(<Services />);
    expect(screen.getByRole('heading', { name: /what we help with/i })).toBeInTheDocument();
    expect(screen.getByText(/web & product engineering/i)).toBeInTheDocument();
  });

  it('describes engagement types without invented ROI percentages', () => {
    render(<Work />);
    expect(screen.getByRole('heading', { name: /how engagements usually look/i })).toBeInTheDocument();
    expect(screen.getByText(/do not publish invented metrics/i)).toBeInTheDocument();
    expect(screen.queryByText(/300% increase/i)).not.toBeInTheDocument();
  });
});

describe('Landing mailto forms', () => {
  it('collects a project brief', () => {
    render(<ClientForm />);
    expect(screen.getByRole('heading', { name: /brief a project/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/project brief/i)).toBeInTheDocument();
  });

  it('asks for a concrete introduction', () => {
    render(<JoinForm />);
    expect(screen.getByRole('heading', { name: /join the collective/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/what do you do best/i)).toBeInTheDocument();
  });

  it('renders a real next step via mailto', async () => {
    const user = userEvent.setup();
    delete (window as { location?: Location }).location;
    (window as { location: { href: string } }).location = { href: '' };

    render(<Contact />);
    await user.type(screen.getByLabelText(/name/i), 'Ada');
    await user.type(screen.getByLabelText(/email/i), 'ada@example.com');
    await user.type(screen.getByLabelText(/what are you trying/i), 'Need a product rebuild');
    await user.click(screen.getByRole('button', { name: /continue in email/i }));
    expect(window.location.href).toMatch(/^mailto:hello@expert-o\.com/);
    await screen.findByText(/mail client should open/i);
  });
});
