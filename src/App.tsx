import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { ThemeProvider } from './shared/contexts/ThemeContext';
import ErrorBoundary from './shared/ui/ErrorBoundary';
import RootLayout from './shared/ui/RootLayout';
import {
  LandingPage,
  OurStoryPage,
  ServicesPage,
  PortfolioPage,
  PricingPage,
} from './features/landing';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/our-story" element={<OurStoryPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/pricing" element={<PricingPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
        <Analytics />
        <SpeedInsights />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
