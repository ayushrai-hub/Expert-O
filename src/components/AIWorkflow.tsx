import { Bot, Brain, Zap, BarChart3, Cog, ArrowRight } from 'lucide-react';

const AIWorkflow = () => {
  const aiCapabilities = [
    {
      icon: Brain,
      title: "Content Creation & Strategy",
      description: "AI-powered content generation, strategy optimization, and personalization at scale.",
      benefits: ["50% faster content production", "Personalized user experiences", "Data-driven content strategy"]
    },
    {
      icon: Zap,
      title: "Design Iteration & Optimization",
      description: "Rapid prototyping, A/B testing, and design optimization using machine learning insights.",
      benefits: ["10x faster design iterations", "User behavior-driven design", "Automated A/B testing"]
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decision Making",
      description: "Advanced analytics, predictive modeling, and business intelligence for strategic decisions.",
      benefits: ["Predictive market insights", "Automated reporting", "Risk assessment & mitigation"]
    },
    {
      icon: Cog,
      title: "Process Automation",
      description: "Intelligent workflow automation, task optimization, and operational efficiency enhancement.",
      benefits: ["80% reduction in manual tasks", "24/7 automated operations", "Error-free processes"]
    }
  ];

  const workflow = [
    {
      step: "01",
      title: "AI Assessment",
      description: "We analyze your current processes to identify AI integration opportunities."
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Custom AI strategy aligned with your business goals and technical requirements."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Seamless integration of AI tools and workflows into your existing systems."
    },
    {
      step: "04",
      title: "Training & Optimization",
      description: "Team training and continuous optimization for maximum AI ROI."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900" data-testid="ai-workflow-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 mb-6">
            <Bot 
              size={16} 
              className="mr-2 text-cyan-400" 
              aria-hidden="true" 
              role="img"
              aria-label="AI Bot"
            />
            <span className="text-sm font-medium text-cyan-300">AI-Powered Excellence</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI Empowerment
            </span>
            <br />
            <span className="text-white">In Our Workflow</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We don't just use AI—we architect it into every aspect of our process, from initial strategy 
            to final delivery, ensuring maximum efficiency and innovation.
          </p>
        </div>

        {/* AI Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {aiCapabilities.map((capability, index) => (
            <div 
              key={index}
              data-testid="capability-card"
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <capability.icon 
                    size={28} 
                    className="text-white" 
                    aria-hidden="true" 
                    role="img"
                    aria-label={`${capability.title} icon`}
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {capability.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {capability.description}
                  </p>
                  
                  <div className="space-y-2">
                    {capability.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Integration Workflow */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Our AI Integration Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflow.map((step, index) => (
              <div key={index} className="relative" data-testid="workflow-step">
                {/* Connector Line */}
                {index < workflow.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-6 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent z-10"></div>
                )}
                
                <div className="group text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-bold text-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Tools Showcase */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-2xl p-12" data-testid="ai-tools-section">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              AI Tools & Technologies We Master
            </h3>
            <p className="text-gray-300">
              Cutting-edge AI stack for maximum productivity and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
            {[
              "OpenAI GPT",
              "Claude",
              "Midjourney",
              "TensorFlow",
              "LangChain",
              "AutoGPT",
              "Stable Diffusion",
              "GitHub Copilot",
              "Notion AI",
              "Zapier",
              "Make.com",
              "Custom Models"
            ].map((tool, index) => (
              <div key={index} className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:border-cyan-400 group-hover:scale-110 transition-all duration-300">
                  <Bot 
                    size={24} 
                    className="text-cyan-400" 
                    aria-hidden="true"
                    role="img"
                    aria-label={`${tool} icon`}
                  />
                </div>
                <div className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  {tool}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16" data-testid="cta-section">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Let's explore how AI can revolutionize your workflows, enhance productivity, 
              and drive unprecedented growth for your business.
            </p>
            <button 
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              aria-label="Start AI Transformation"
            >
              Start AI Transformation
              <ArrowRight 
                size={20} 
                className="ml-2 inline-block group-hover:translate-x-1 transition-transform" 
                aria-hidden="true"
                role="img"
                aria-label="Right arrow"
                data-testid="arrow-icon"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIWorkflow;