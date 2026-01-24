import React from 'react';
import { Brain, Target, Handshake, Zap, Heart } from 'lucide-react';

const FivePillars = () => {
  const pillars = [
    {
      icon: Brain,
      title: "Polymathy as Power",
      subtitle: "One mind, many disciplines. One team, infinite possibilities.",
      description: "We are not specialists in isolation—we are systems thinkers, creative disruptors, and lifelong explorers. At Expert-O, diverse experiences and cross-domain knowledge are not optional—they're our edge. Whether you're a developer who understands branding, or a writer who speaks in product flows, polymathy fuels our strategy, design, and execution.",
      color: "gray"
    },
    {
      icon: Target,
      title: "Precision Over Prestige",
      subtitle: "Excellence is earned. Execution is proof.",
      description: "We don't chase titles—we chase truth, clarity, and craft. At Expert-O, skills speak louder than credentials, and impact outshines noise. Every member is held to a high standard of excellence and integrity—regardless of where they started. We believe in merit measured by momentum: what you build, solve, and ship.",
      color: "gray"
    },
    {
      icon: Handshake,
      title: "Deep Trust, Radical Ownership",
      subtitle: "We don't micromanage. We multiply trust.",
      description: "Expert-O thrives on lean, high-trust collaboration. Here, each person is a decision-maker, not a task-taker. We own outcomes, not job descriptions—knowing that distributed ownership builds faster, stronger, and more resilient ecosystems. Trust is our glue; feedback is our compass.",
      color: "gray"
    },
    {
      icon: Zap,
      title: "Speed with Soul",
      subtitle: "Think clearly. Build boldly. Move consciously.",
      description: "We move fast—but never mindlessly. Our speed comes from curiosity-driven sprints, micro-POCs, and sharp iterations, backed by AI and systems thinking. We chase outcomes, not busyness. When the world overplans, we prototype. When others delay, we deploy.",
      color: "gray"
    },
    {
      icon: Heart,
      title: "Impact Through Humanity",
      subtitle: "Tech is our tool. People are our purpose.",
      description: "We're not just building products—we're building a better future. Every project we touch carries the potential to shift mindsets, uplift communities, and spark cultural change. Our work spans technology, health, sustainability, education, and mental well-being—with empathy, not ego.",
      color: "gray"
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case 'gray':
        return 'text-gray-700';
      default:
        return 'text-gray-700';
    }
  };

  return (
    <section className="section bg-gray-50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-gray-200 mb-6">
            <span className="text-sm font-medium text-gray-900">The Foundation of Excellence</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            The Five Pillars
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-3">
            The unshakable code of visionary polymaths
          </p>
          
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            At Expert-O, these pillars define who we are—a tribe of visionaries building what others won't, 
            at a speed others can't, with a heart they've forgotten.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="space-y-12">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              data-testid={`pillar-${index + 1}`}
              className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Icon and Visual */}
              <div className="lg:w-1/4">
                <div className="relative group">
                  <div className="card p-8 text-center hover:shadow-strong transition-all">
                    <div className={`inline-flex p-4 bg-gray-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform ${getColorClass(pillar.color)}`}>
                      <pillar.icon size={36} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-3/4">
                <div className="max-w-2xl">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {index + 1}. {pillar.title}
                  </h3>
                  
                  <p className="text-base font-semibold text-gray-600 mb-4">
                    {pillar.subtitle}
                  </p>
                  
                  <p className="text-gray-500 text-base leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="card-elevated p-10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to Experience the Pillars in Action?
            </h3>
            <p className="text-gray-600 text-base mb-6">
              Join our tribe and help shape the digital future.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary px-6 py-3 text-base">
                Start Your Project
              </button>
              <button className="btn-secondary px-6 py-3 text-base">
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
