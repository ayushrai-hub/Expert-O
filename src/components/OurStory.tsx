import React from 'react';
import { Brain, Target, Heart, Zap } from 'lucide-react';

const OurStory = () => {
  return (
    <section id="story" className="py-24 bg-gradient-to-b from-black to-gray-900" data-testid="our-story-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" data-testid="story-header">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent" data-testid="story-title">
              Our Story
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="story-description">
            Born from the belief that the future belongs to polymaths who think systemically, 
            execute rapidly, and build with purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-2xl p-8" data-testid="polymath-advantage-card">
              <Brain size={48} className="text-blue-400 mb-6" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-white mb-4">The Polymath Advantage</h3>
              <p className="text-gray-300 mb-6">
                We believe in the power of diverse expertise. Our team members aren't just specialists—they're 
                systems thinkers who understand the interconnections between technology, design, business, and human behavior.
              </p>
              <p className="text-gray-400">
                This cross-domain knowledge isn't optional—it's our competitive edge. It's what allows us to see 
                opportunities others miss and create solutions that truly transform businesses.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8" data-testid="mission-card">
                <Target size={48} className="text-purple-400 mb-6" aria-hidden="true" />
                <h3 className="text-2xl font-bold text-white mb-4">Mission: Reshape India's Future</h3>
                <p className="text-gray-300 mb-6">
                  We're not just building websites and apps. We're architecting the digital infrastructure 
                  that will power India's next wave of innovation and growth.
                </p>
                <div className="space-y-3" data-testid="mission-points">
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Transform traditional businesses into digital leaders
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Empower startups with enterprise-grade solutions
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Democratize access to cutting-edge technology
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-2xl p-8" data-testid="culture-card">
              <Zap size={48} className="text-cyan-400 mb-6" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-white mb-4">Culture of Excellence</h3>
              <p className="text-gray-300 mb-6">
                Our culture is built on radical ownership, deep trust, and the pursuit of excellence. 
                We move fast but never mindlessly—every sprint is curiosity-driven, every iteration is purposeful.
              </p>
              <div className="grid grid-cols-2 gap-4" data-testid="culture-metrics">
                <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                  <div className="text-2xl font-bold text-blue-400 mb-1">∞</div>
                  <div className="text-sm text-gray-400">Learning</div>
                </div>
                <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                  <div className="text-2xl font-bold text-purple-400 mb-1">5x</div>
                  <div className="text-sm text-gray-400">Speed</div>
                </div>
                <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">100%</div>
                  <div className="text-sm text-gray-400">Trust</div>
                </div>
                <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">1st</div>
                  <div className="text-sm text-gray-400">Impact</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8" data-testid="humans-first-card">
                <Heart size={48} className="text-red-400 mb-6" aria-hidden="true" />
                <h3 className="text-2xl font-bold text-white mb-4">Humans First, Always</h3>
                <p className="text-gray-300 mb-6">
                  Technology is our tool, but people are our purpose. Every project we touch carries the 
                  potential to shift mindsets, uplift communities, and spark cultural change.
                </p>
                <p className="text-gray-400 mb-4">We champion causes close to our hearts:</p>
                <div className="space-y-2" data-testid="champion-causes">
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Sustainability & Climate Action
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Education Empowerment
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Mental & Physical Health
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Equality & Transparency
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;