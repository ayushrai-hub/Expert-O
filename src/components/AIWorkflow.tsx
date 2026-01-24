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
    <section className="py-16 bg-white" data-testid="ai-workflow-section">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full border border-gray-200 mb-4">
            <Bot 
              size={12} 
              className="mr-1.5 text-gray-700" 
              aria-hidden="true" 
              role="img"
              aria-label="AI Bot"
            />
            <span className="text-xs font-medium text-gray-700">AI-Powered Excellence</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-gray-900">
            AI Empowerment In Our Workflow
          </h2>
          
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            We architect AI into every aspect of our process, from strategy 
            to delivery, ensuring maximum efficiency.
          </p>
        </div>

        {/* AI Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {aiCapabilities.map((capability, index) => (
            <div 
              key={index}
              data-testid="capability-card"
              className="group bg-white border border-gray-200 rounded-lg p-5 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors">
                  <capability.icon 
                    size={18} 
                    className="text-gray-700" 
                    aria-hidden="true" 
                    role="img"
                    aria-label={`${capability.title} icon`}
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    {capability.title}
                  </h3>
                  
                  <p className="text-gray-600 text-xs mb-3">
                    {capability.description}
                  </p>
                  
                  <div className="space-y-1">
                    {capability.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-xs text-gray-500">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
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
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-center text-gray-900 mb-6">
            Our AI Integration Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflow.map((step, index) => (
              <div key={index} className="relative" data-testid="workflow-step">
                {/* Connector Line */}
                {index < workflow.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-4 h-0.5 bg-gray-300 z-10"></div>
                )}
                
                <div className="group text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 rounded-full text-white font-semibold text-sm mb-3 group-hover:bg-gray-800 transition-colors">
                    {step.step}
                  </div>
                  
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h4>
                  
                  <p className="text-gray-600 text-xs">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Tools Showcase */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6" data-testid="ai-tools-section">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              AI Tools & Technologies We Master
            </h3>
            <p className="text-gray-600 text-xs">
              Cutting-edge AI stack for maximum productivity
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
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
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center mb-2 mx-auto group-hover:border-gray-300 group-hover:bg-gray-50 transition-all">
                  <Bot 
                    size={16} 
                    className="text-gray-700" 
                    aria-hidden="true"
                    role="img"
                    aria-label={`${tool} icon`}
                  />
                </div>
                <div className="text-xs text-gray-600 group-hover:text-gray-900 transition-colors">
                  {tool}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8" data-testid="cta-section">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Let's explore how AI can revolutionize your workflows and drive growth.
            </p>
            <button 
              className="group bg-gray-900 text-white px-5 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors"
              aria-label="Start AI Transformation"
            >
              Start AI Transformation
              <ArrowRight 
                size={14} 
                className="ml-1.5 inline-block group-hover:translate-x-0.5 transition-transform" 
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