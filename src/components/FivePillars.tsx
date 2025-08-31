import React from 'react';
import { Brain, Target, Handshake, Zap, Heart } from 'lucide-react';

const FivePillars = () => {
  const pillars = [
    {
      icon: Brain,
      title: "Polymathy as Power",
      subtitle: "One mind, many disciplines. One team, infinite possibilities.",
      description: "We are not specialists in isolation—we are systems thinkers, creative disruptors, and lifelong explorers. At Expert-O, diverse experiences and cross-domain knowledge are not optional—they're our edge. Whether you're a developer who understands branding, or a writer who speaks in product flows, polymathy fuels our strategy, design, and execution.",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: Target,
      title: "Precision Over Prestige",
      subtitle: "Excellence is earned. Execution is proof.",
      description: "We don't chase titles—we chase truth, clarity, and craft. At Expert-O, skills speak louder than credentials, and impact outshines noise. Every member is held to a high standard of excellence and integrity—regardless of where they started. We believe in merit measured by momentum: what you build, solve, and ship.",
      color: "from-purple-400 to-cyan-500"
    },
    {
      icon: Handshake,
      title: "Deep Trust, Radical Ownership",
      subtitle: "We don't micromanage. We multiply trust.",
      description: "Expert-O thrives on lean, high-trust collaboration. Here, each person is a decision-maker, not a task-taker. We own outcomes, not job descriptions—knowing that distributed ownership builds faster, stronger, and more resilient ecosystems. Trust is our glue; feedback is our compass.",
      color: "from-cyan-400 to-green-500"
    },
    {
      icon: Zap,
      title: "Speed with Soul",
      subtitle: "Think clearly. Build boldly. Move consciously.",
      description: "We move fast—but never mindlessly. Our speed comes from curiosity-driven sprints, micro-POCs, and sharp iterations, backed by AI and systems thinking. We chase outcomes, not busyness. When the world overplans, we prototype. When others delay, we deploy.",
      color: "from-green-400 to-yellow-500"
    },
    {
      icon: Heart,
      title: "Impact Through Humanity",
      subtitle: "Tech is our tool. People are our purpose.",
      description: "We're not just building products—we're building a better future. Every project we touch carries the potential to shift mindsets, uplift communities, and spark cultural change. Our work spans technology, health, sustainability, education, and mental well-being—with empathy, not ego.",
      color: "from-yellow-400 to-red-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-6">
            <span className="text-sm font-medium text-blue-300">🔥 The Foundation of Excellence</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              The Five Pillars
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-4">
            The Unshakable Code of Visionary Polymaths Fueling India's Future
          </p>
          
          <p className="text-gray-400 max-w-3xl mx-auto">
            At Expert-O, these pillars aren't policies—they're the pulse of who we are. We're not a team. 
            We're a tribe of elite black sheep—visionaries, misfits, rebels—here to build what others won't, 
            at a speed others can't, with a heart they've forgotten.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="space-y-16">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              data-testid={`pillar-${index + 1}`}
              className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Icon and Visual */}
              <div className="lg:w-1/3">
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r ${pillar.color} opacity-20 rounded-3xl blur-xl group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-12 text-center group-hover:border-gray-600 transition-all duration-300">
                    <div className={`inline-flex p-6 bg-gradient-to-r ${pillar.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <pillar.icon size={64} className="text-white" />
                    </div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent mb-2`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-2/3">
                <div className="max-w-2xl">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {index + 1}. {pillar.title}
                  </h3>
                  
                  <p className={`text-lg font-semibold bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent mb-6`}>
                    {pillar.subtitle}
                  </p>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Pillars in Action?
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Join our tribe of elite polymaths and help shape India's digital future.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="px-8 py-4 border-2 border-gray-600 text-white rounded-full text-lg font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300 transform hover:scale-105">
                Join Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FivePillars;