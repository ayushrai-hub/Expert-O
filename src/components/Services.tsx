import React, { useState } from 'react';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  Megaphone, 
  Bot,
  BarChart3,
  Search,
  PenTool,
  Zap,
  Rocket,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Modern, responsive websites built with cutting-edge technologies and optimized for performance and user experience.",
      category: "development",
      workflow: "Discovery → Design → Development → Testing → Launch",
      color: "from-gray-600 to-gray-400"
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications that engage users and drive business growth.",
      category: "development",
      workflow: "Strategy → Prototyping → Development → Testing → Deployment",
      color: "from-gray-600 to-gray-400"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions that create intuitive, beautiful, and conversion-focused digital experiences.",
      category: "design",
      workflow: "Research → Wireframes → Prototypes → Visual Design → Testing",
      color: "from-gray-600 to-gray-400"
    },
    {
      icon: TrendingUp,
      title: "Product & Brand Strategy",
      description: "Comprehensive strategy development to position your brand and products for maximum market impact.",
      category: "strategy",
      workflow: "Analysis → Strategy → Brand Identity → Guidelines → Implementation",
      color: "from-gray-600 to-gray-400"
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Data-driven marketing campaigns that reach your target audience and convert prospects into customers.",
      category: "marketing",
      workflow: "Audit → Strategy → Campaign Creation → Launch → Optimization",
      color: "from-gray-600 to-gray-400"
    },
    {
      icon: Bot,
      title: "AI Integrations & Workflows",
      description: "Custom AI solutions and automation workflows to streamline operations and enhance productivity.",
      category: "ai",
      workflow: "Assessment → AI Strategy → Development → Integration → Training",
      color: "from-gray-600 to-gray-400"
    },
    {
      icon: BarChart3,
      title: "Business Analysis",
      description: "Deep dive into your business processes to identify opportunities for growth and optimization.",
      category: "strategy",
      workflow: "Discovery → Analysis → Recommendations → Implementation → Monitoring",
      color: "from-gray-600 to-gray-400"
    },
    {
      icon: Search,
      title: "Research & Insights",
      description: "Market research, user studies, and competitive analysis to inform strategic decision-making.",
      category: "strategy",
      workflow: "Planning → Data Collection → Analysis → Insights → Recommendations",
      color: "from-gray-600 to-gray-400"
    },
    {
      icon: PenTool,
      title: "Creative Writing / Content Ops",
      description: "Compelling content creation and content operations that engage audiences and drive conversions.",
      category: "marketing",
      workflow: "Strategy → Content Planning → Creation → Optimization → Distribution",
      color: "from-gray-600 to-gray-400"
    },
    {
      icon: Zap,
      title: "Advertising & Social Media Strategy",
      description: "Comprehensive advertising campaigns and social media strategies that amplify your brand reach.",
      category: "marketing",
      workflow: "Audit → Strategy → Creative → Campaign Launch → Optimization",
      color: "from-gray-600 to-gray-400"
    },
    {
      icon: Rocket,
      title: "End-to-end Launch Systems",
      description: "Complete product launch orchestration from concept to market success with ongoing support.",
      category: "strategy",
      workflow: "Planning → Development → Pre-launch → Launch → Post-launch Support",
      color: "from-gray-600 to-gray-400"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'development', label: 'Development' },
    { id: 'design', label: 'Design' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'ai', label: 'AI Solutions' }
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  return (
    <section id="services" className="section bg-gray-50" data-testid="services-section">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12" data-testid="services-header">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900" data-testid="services-title">
            Services We Offer
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto" data-testid="services-description">
            Comprehensive solutions powered by polymathic thinking
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-testid="filter-tabs">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeFilter === category.id
                  ? 'bg-gray-900 text-white shadow-medium'
                  : 'btn-secondary'
              }`}
              data-testid={`filter-${category.id}`}
              aria-pressed={activeFilter === category.id}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="services-grid">
          {filteredServices.map((service, index) => (
            <article 
              key={index} 
              className="card group p-6 hover:shadow-strong"
              data-testid="service-card"
              data-category={service.category}
            >
              {/* Icon */}
              <div 
                className="inline-flex p-3 bg-gray-100 rounded-xl mb-4 group-hover:scale-110 transition-transform"
                data-testid="service-icon"
              >
                <service.icon size={24} className="text-gray-700" aria-hidden="true" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3" data-testid="service-title">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 leading-relaxed" data-testid="service-description">
                {service.description}
              </p>

              {/* Workflow */}
              <div className="mb-5" data-testid="service-workflow">
                <div className="text-xs font-semibold text-gray-900 mb-2">Workflow</div>
                <div className="text-xs text-gray-500 leading-relaxed">
                  {service.workflow}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3" data-testid="service-cta">
                <button 
                  className="flex-1 flex items-center justify-center btn-primary text-sm"
                  data-testid="get-started-button"
                >
                  Get Started
                  <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  className="flex-1 btn-secondary text-sm"
                  data-testid="pricing-button"
                >
                  Pricing
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="card-elevated p-10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 text-base mb-6">
              Our polymaths excel at creating bespoke solutions tailored to your unique challenges.
            </p>
            <button className="btn-primary px-8 py-3 text-base">
              Let's Talk Custom Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
