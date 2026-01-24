import React, { useState } from 'react';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import ThemeToggle from './ThemeToggle';
import Hero from './Hero';
import FivePillars from './FivePillars';
import OurStory from './OurStory';
import Services from './Services';
import ClientForm from './ClientForm';
import JoinForm from './JoinForm';
import Pricing from './Pricing';
import Portfolio from './Portfolio';
import AIWorkflow from './AIWorkflow';
import Blog from './Blog';
import Contact from './Contact';

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Our Story', href: '#story' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Join Us', href: '#join' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleAuthAction = (action: 'login' | 'register') => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate(`/${action}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors">
                Expert-O
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-baseline space-x-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
                
              {/* Theme Toggle & Auth Buttons */}
              <div className="flex items-center space-x-3">
                <ThemeToggle />
                
                {isAuthenticated ? (
                  <button 
                    onClick={() => navigate('/dashboard')}
                    className="btn-primary text-sm"
                  >
                    Dashboard
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => handleAuthAction('login')}
                      className="flex items-center text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                    >
                      <LogIn size={16} className="mr-1.5" />
                      Sign In
                    </button>
                    <button
                      onClick={() => handleAuthAction('register')}
                      className="btn-primary text-sm flex items-center"
                    >
                      <UserPlus size={16} className="mr-1.5" />
                      Join Us
                    </button>
                  </>
                )}
              </div>
            </div>
            
            <div className="md:hidden flex items-center space-x-3">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {mobileMenuOpen && (
            <div className="md:hidden py-4">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-sm font-medium rounded-lg hover:bg-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                
                {/* Mobile Auth Buttons */}
                {isAuthenticated ? (
                  <button 
                    onClick={() => {
                      navigate('/dashboard');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full btn-primary text-sm mt-4"
                  >
                    Dashboard
                  </button>
                ) : (
                  <div className="space-y-2 mt-4">
                    <button
                      onClick={() => {
                        handleAuthAction('login');
                        setMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center justify-center text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-100"
                    >
                      <LogIn size={16} className="mr-1.5" />
                      Sign In
                    </button>
                    <button
                      onClick={() => {
                        handleAuthAction('register');
                        setMobileMenuOpen(false);
                      }}
                      className="w-full btn-primary text-sm flex items-center justify-center"
                    >
                      <UserPlus size={16} className="mr-1.5" />
                      Join Us
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Hero />
        <OurStory />
        <FivePillars />
        <Services />
        <Portfolio />
        <AIWorkflow />
        <Pricing />
        <ClientForm />
        <JoinForm />
        <Blog />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-xl font-semibold text-gray-900 mb-4">
                Expert-O
              </div>
              <p className="text-gray-600 text-sm mb-4 max-w-md">
                Elite polymaths delivering powerful execution for the future.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Twitter</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Instagram</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-gray-900 font-semibold text-sm mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Web Development</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">App Development</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">AI Integration</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-gray-900 font-semibold text-sm mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-10 pt-8">
            <p className="text-gray-500 text-center text-sm">
              © 2025 Expert-O. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
