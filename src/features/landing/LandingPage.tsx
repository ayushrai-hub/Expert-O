import { Link } from 'react-router-dom';
import { Hero, OurStory, FivePillars, Services, Work } from './sections';
import { ClientForm, JoinForm, Contact } from './forms';
import { Pricing } from './PricingSection';

const LandingPage = () => (
  <div className="min-h-screen bg-white">
    <main id="main">
      <Hero />
      <OurStory />
      <FivePillars />
      <Services />
      <Work />
      <Pricing />
      <ClientForm />
      <JoinForm />
      <Contact />
    </main>

    <footer className="bg-stone-50 border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="font-display text-lg text-stone-950">Expert-O</p>
            <p className="mt-3 text-sm text-stone-600 leading-relaxed max-w-sm">
              A polymath collective that designs, builds, and ships product work with ownership—not theater.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-stone-900 mb-3">Explore</p>
            <ul className="space-y-2 text-sm text-stone-600">
              <li>
                <Link to="/our-story" className="hover:text-stone-900">
                  Our story
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-stone-900">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-stone-900">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-stone-900">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-stone-900 mb-3">Connect</p>
            <ul className="space-y-2 text-sm text-stone-600">
              <li>
                <a href="#join" className="hover:text-stone-900">
                  Join
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-stone-900">
                  Contact
                </a>
              </li>
              <li>
                <a href="mailto:hello@expert-o.com" className="hover:text-stone-900">
                  hello@expert-o.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 pt-6 border-t border-stone-200 text-xs text-stone-500">
          © {new Date().getFullYear()} Expert-O. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
);

export default LandingPage;
