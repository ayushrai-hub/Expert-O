import React from 'react';
import { ArrowRight, Sparkles, Zap, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 section-container text-center">
        {/* Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full border border-gray-200 mb-6">
            <Sparkles size={16} className="mr-2 text-gray-700" />
            <span className="text-sm font-medium text-gray-900">Elite Polymath Collective</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
            Elite Polymaths,
            <br />
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Powerful Execution</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
            Shape the Future with Expert-O
          </p>
          
          <p className="text-base text-gray-500 max-w-2xl mx-auto mb-10">
            Visionary collective driving next-gen growth through cutting-edge technology, 
            AI workflows, and transformative digital experiences.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="group btn-primary px-6 py-3 text-base">
            Work With Us
            <ArrowRight size={18} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="btn-secondary px-6 py-3 text-base">
            Explore Services
          </button>
          
          <button className="btn-accent px-6 py-3 text-base">
            Join Us
          </button>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="group">
            <div className="flex items-center justify-center mb-3">
              <div className="p-3 bg-gray-100 rounded-xl border border-gray-200 group-hover:border-gray-300 transition-all shadow-soft">
                <Zap size={24} className="text-gray-700" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">5x</div>
            <div className="text-sm text-gray-500">Faster Execution</div>
          </div>
          
          <div className="group">
            <div className="flex items-center justify-center mb-3">
              <div className="p-3 bg-gray-100 rounded-xl border border-gray-200 group-hover:border-gray-300 transition-all shadow-soft">
                <Users size={24} className="text-gray-700" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
            <div className="text-sm text-gray-500">Elite Polymaths</div>
          </div>
          
          <div className="group">
            <div className="flex items-center justify-center mb-3">
              <div className="p-3 bg-gray-100 rounded-xl border border-gray-200 group-hover:border-gray-300 transition-all shadow-soft">
                <Sparkles size={24} className="text-gray-700" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
            <div className="text-sm text-gray-500">AI-Augmented</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
