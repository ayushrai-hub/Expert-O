import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import FivePillars from './components/FivePillars';
import OurStory from './components/OurStory';
import Services from './components/Services';
import ClientForm from './components/ClientForm';
import JoinForm from './components/JoinForm';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import AIWorkflow from './components/AIWorkflow';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Our Story', href: '#story' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Join Us', href: '#join' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Expert-O
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
                  Work With Us
                </button>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 rounded-lg mt-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 mt-4">
                  Work With Us
                </button>
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
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                Expert-O
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Elite Polymaths, Powerful Execution – Shaping the Future with Visionary Innovation and AI-Driven Excellence.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Instagram</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Web Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">App Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">AI Integration</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <p className="text-gray-400 text-center">
              © 2025 Expert-O. All rights reserved. Built by polymaths, for the future.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;