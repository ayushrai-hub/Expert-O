import React from 'react';
import { Brain, Target, Heart, Zap } from 'lucide-react';

const OurStory = () => {
  return (
    <section id="story" className="section bg-gray-50" data-testid="our-story-section">
      <div className="section-container">
        <div className="text-center mb-12" data-testid="story-header">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900" data-testid="story-title">
            Our Story
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto" data-testid="story-description">
            The future belongs to polymaths who think systemically, 
            execute rapidly, and build with purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start mb-8">
          <div className="order-2 lg:order-1">
            <div className="card p-8 h-full" data-testid="polymath-advantage-card">
              <div className="inline-flex p-3 bg-gray-100 rounded-xl mb-4">
                <Brain size={28} className="text-gray-700" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Polymath Advantage</h3>
              <p className="text-gray-600 text-base mb-4">
                Our team members aren't just specialists—they're systems thinkers who understand the interconnections between technology, design, business, and human behavior.
              </p>
              <p className="text-gray-500 text-sm">
                This cross-domain knowledge allows us to see opportunities others miss and create solutions that transform businesses.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="card-elevated p-8 h-full" data-testid="mission-card">
              <div className="inline-flex p-3 bg-gray-100 rounded-xl mb-4">
                <Target size={28} className="text-gray-700" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mission: Reshape India's Future</h3>
              <p className="text-gray-600 text-base mb-4">
                We're architecting the digital infrastructure that will power India's next wave of innovation.
              </p>
              <div className="space-y-3" data-testid="mission-points">
                <div className="flex items-center text-gray-900 text-sm">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                  Transform businesses into digital leaders
                </div>
                <div className="flex items-center text-gray-900 text-sm">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                  Empower startups with enterprise solutions
                </div>
                <div className="flex items-center text-gray-900 text-sm">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                  Democratize access to technology
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div>
            <div className="card p-8 h-full" data-testid="culture-card">
              <div className="inline-flex p-3 bg-gray-100 rounded-xl mb-4">
                <Zap size={28} className="text-gray-700" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Culture of Excellence</h3>
              <p className="text-gray-600 text-base mb-6">
                Built on radical ownership, deep trust, and excellence. 
                We move fast but purposefully—every sprint is curiosity-driven.
              </p>
              <div className="grid grid-cols-2 gap-4" data-testid="culture-metrics">
                <div className="text-center p-4 bg-gray-100 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-gray-900 mb-1">∞</div>
                  <div className="text-sm text-gray-600">Learning</div>
                </div>
                <div className="text-center p-4 bg-gray-100 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-gray-900 mb-1">5x</div>
                  <div className="text-sm text-gray-600">Speed</div>
                </div>
                <div className="text-center p-4 bg-gray-100 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Trust</div>
                </div>
                <div className="text-center p-4 bg-gray-100 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-gray-900 mb-1">1st</div>
                  <div className="text-sm text-gray-600">Impact</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="card p-8 h-full" data-testid="humans-first-card">
              <div className="inline-flex p-3 bg-gray-100 rounded-xl mb-4">
                <Heart size={28} className="text-gray-700" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Humans First, Always</h3>
              <p className="text-gray-600 text-base mb-4">
                Technology is our tool, but people are our purpose. Every project carries the 
                potential to shift mindsets and spark change.
              </p>
              <p className="text-gray-900 text-sm mb-3 font-semibold">We champion:</p>
              <div className="space-y-3" data-testid="champion-causes">
                <div className="flex items-center text-gray-600 text-sm">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Sustainability & Climate Action
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Education Empowerment
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Mental & Physical Health
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Equality & Transparency
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
