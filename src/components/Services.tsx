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
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications that engage users and drive business growth.",
      category: "development",
      workflow: "Strategy → Prototyping → Development → Testing → Deployment",
      color: "from-purple-400 to-blue-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions that create intuitive, beautiful, and conversion-focused digital experiences.",
      category: "design",
      workflow: "Research → Wireframes → Prototypes → Visual Design → Testing",
      color: "from-pink-400 to-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Product & Brand Strategy",
      description: "Comprehensive strategy development to position your brand and products for maximum market impact.",
      category: "strategy",
      workflow: "Analysis → Strategy → Brand Identity → Guidelines → Implementation",
      color: "from-green-400 to-blue-500"
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Data-driven marketing campaigns that reach your target audience and convert prospects into customers.",
      category: "marketing",
      workflow: "Audit → Strategy → Campaign Creation → Launch → Optimization",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: Bot,
      title: "AI Integrations & Workflows",
      description: "Custom AI solutions and automation workflows to streamline operations and enhance productivity.",
      category: "ai",
      workflow: "Assessment → AI Strategy → Development → Integration → Training",
      color: "from-cyan-400 to-green-500"
    },
    {
      icon: BarChart3,
      title: "Business Analysis",
      description: "Deep dive into your business processes to identify opportunities for growth and optimization.",
      category: "strategy",
      workflow: "Discovery → Analysis → Recommendations → Implementation → Monitoring",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Search,
      title: "Research & Insights",
      description: "Market research, user studies, and competitive analysis to inform strategic decision-making.",
      category: "strategy",
      workflow: "Planning → Data Collection → Analysis → Insights → Recommendations",
      color: "from-indigo-400 to-purple-500"
    },
    {
      icon: PenTool,
      title: "Creative Writing / Content Ops",
      description: "Compelling content creation and content operations that engage audiences and drive conversions.",
      category: "marketing",
      workflow: "Strategy → Content Planning → Creation → Optimization → Distribution",
      color: "from-teal-400 to-blue-500"
    },
    {
      icon: Zap,
      title: "Advertising & Social Media Strategy",
      description: "Comprehensive advertising campaigns and social media strategies that amplify your brand reach.",
      category: "marketing",
      workflow: "Audit → Strategy → Creative → Campaign Launch → Optimization",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: Rocket,
      title: "End-to-end Launch Systems",
      description: "Complete product launch orchestration from concept to market success with ongoing support.",
      category: "strategy",
      workflow: "Planning → Development → Pre-launch → Launch → Post-launch Support",
      color: "from-purple-400 to-cyan-500"
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
    <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Services We Offer
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions powered by polymathic thinking and AI-augmented execution
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Gradient Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 blur-xl`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex p-4 bg-gradient-to-r ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={32} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Workflow */}
                <div className="mb-6">
                  <div className="text-sm font-semibold text-gray-400 mb-2">WORKFLOW</div>
                  <div className="text-sm text-gray-500">
                    {service.workflow}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3">
                  <button className={`flex items-center justify-center px-4 py-2 bg-gradient-to-r ${service.color} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 group-hover:shadow-lg`}>
                    Get Started
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg font-medium hover:border-gray-500 hover:text-white transition-colors">
                    Get Pricing
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Our polymaths excel at creating bespoke solutions tailored to your unique challenges and vision.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Let's Talk Custom Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;