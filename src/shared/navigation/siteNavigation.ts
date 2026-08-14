/**
 * Central navigation registry for public routes and landing sections.
 */

export const appRoutes = {
  home: '/',
  ourStory: '/our-story',
  services: '/services',
  portfolio: '/portfolio',
  pricing: '/pricing',
} as const;

export const exploreNav = [
  { name: 'Our Story', to: appRoutes.ourStory },
  { name: 'Services', to: appRoutes.services },
  { name: 'Portfolio', to: appRoutes.portfolio },
  { name: 'Pricing', to: appRoutes.pricing },
] as const;

export const headerNav = [
  { name: 'Join Us', to: '/#join' },
  { name: 'Contact', to: '/#contact' },
] as const;
