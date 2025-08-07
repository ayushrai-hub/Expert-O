import React from 'react';
import { ArrowRight, Sparkles, Zap, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Main Tagline */}
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-6">
            <Sparkles size={16} className="mr-2 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">India's Elite Polymath Collective</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Elite Polymaths,
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Powerful Execution
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Shape the Future with Expert-O
          </p>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            We are the visionary collective of polymaths driving India's next-gen growth through 
            cutting-edge technology, AI workflows, and transformative digital experiences.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
          <button className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25">
            Work With Us
            <ArrowRight size={20} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="px-8 py-4 border-2 border-gray-600 text-white rounded-full text-lg font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300 transform hover:scale-105">
            Explore Services
          </button>
          
          <button className="px-8 py-4 bg-gray-800/50 backdrop-blur border border-gray-700 text-white rounded-full text-lg font-semibold hover:bg-gray-700/50 hover:border-purple-500 hover:text-purple-400 transition-all duration-300 transform hover:scale-105">
            Join the Tribe
          </button>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30">
                <Zap size={32} className="text-blue-400" />
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">5x</div>
            <div className="text-gray-400">Faster Execution</div>
          </div>
          
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="p-4 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30">
                <Users size={32} className="text-purple-400" />
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400">Elite Polymaths</div>
          </div>
          
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
                <Sparkles size={32} className="text-cyan-400" />
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-400">AI-Augmented</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-transparent rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;