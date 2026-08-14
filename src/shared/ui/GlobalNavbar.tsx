import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { exploreNav, headerNav } from '../navigation/siteNavigation';
import ThemeToggle from './ThemeToggle';

const GlobalNavbar = () => {
  const [exploreOpen, setExploreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const exploreRef = useRef<HTMLDivElement>(null);
  const exploreMenuId = useId();
  const location = useLocation();

  const closeAll = useCallback(() => {
    setExploreOpen(false);
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    closeAll();
  }, [location.pathname, location.hash, closeAll]);

  useEffect(() => {
    if (!exploreOpen) return undefined;

    const onPointerDown = (event: MouseEvent) => {
      if (exploreRef.current && !exploreRef.current.contains(event.target as Node)) {
        setExploreOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setExploreOpen(false);
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [exploreOpen]);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[70] focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:shadow"
      >
        Skip to content
      </a>

      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="font-display text-xl text-stone-950 hover:text-stone-700 transition-colors">
              Expert-O
            </Link>

            <nav className="hidden md:flex items-center space-x-8" aria-label="Primary">
              <div ref={exploreRef} className="relative">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 text-stone-600 hover:text-stone-900 text-sm font-medium transition-colors"
                  aria-expanded={exploreOpen}
                  aria-controls={exploreMenuId}
                  aria-haspopup="true"
                  onClick={() => setExploreOpen((open) => !open)}
                >
                  Explore
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${exploreOpen ? 'rotate-180' : ''}`}
                    aria-hidden
                  />
                </button>

                {exploreOpen && (
                  <div
                    id={exploreMenuId}
                    role="menu"
                    aria-label="Explore"
                    className="absolute left-0 top-full z-50 mt-2 min-w-[12rem] rounded-lg border border-stone-200 bg-white py-1 shadow-lg"
                  >
                    {exploreNav.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        role="menuitem"
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-sm transition-colors ${
                            isActive
                              ? 'bg-stone-100 font-medium text-stone-900'
                              : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                          }`
                        }
                        onClick={() => setExploreOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {headerNav.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-stone-600 hover:text-stone-900 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              <div className="flex items-center space-x-3">
                <ThemeToggle />
                <Link to="/#contact" className="btn-primary text-sm">
                  Start a conversation
                </Link>
              </div>
            </nav>

            <div className="md:hidden flex items-center space-x-3">
              <ThemeToggle />
              <button
                type="button"
                className="text-stone-600 hover:text-stone-900"
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                onClick={() => setMobileOpen((open) => !open)}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <nav id="mobile-nav" aria-label="Mobile" className="md:hidden border-t border-stone-200 bg-white">
            <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto px-4 py-4">
              <p className="px-3 text-xs font-semibold uppercase tracking-wide text-stone-500 mb-1">
                Explore
              </p>
              {exploreNav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-sm font-medium rounded-lg ${
                      isActive
                        ? 'bg-stone-100 text-stone-900'
                        : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                    }`
                  }
                  onClick={closeAll}
                >
                  {item.name}
                </NavLink>
              ))}

              <div className="mt-3 border-t border-stone-200 pt-3">
                {headerNav.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="block px-3 py-2 text-sm font-medium rounded-lg text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                    onClick={closeAll}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="mt-4">
                <Link to="/#contact" className="block w-full btn-primary text-sm text-center" onClick={closeAll}>
                  Start a conversation
                </Link>
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default GlobalNavbar;
