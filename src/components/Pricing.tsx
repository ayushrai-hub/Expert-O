import React, { useState } from 'react';
import { Check, Zap, Crown, Rocket, Calculator, Phone } from 'lucide-react';

const Pricing = () => {
  const [billingType, setBillingType] = useState('monthly');
  const [estimateForm, setEstimateForm] = useState({
    projectType: '',
    timeline: '',
    budget: '',
    features: []
  });

  const pricingPlans = [
    {
      name: "Starter Sprint",
      icon: Zap,
      price: { monthly: 2499, yearly: 24990 },
      description: "Perfect for startups and small businesses ready to make an impact",
      features: [
        "Single project focus",
        "2-week rapid delivery",
        "Basic AI integration",
        "Mobile-responsive design",
        "SEO optimization",
        "2 rounds of revisions",
        "Email support"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Growth Engine",
      icon: Rocket,
      price: { monthly: 7999, yearly: 79990 },
      description: "For growing businesses that need comprehensive solutions",
      features: [
        "Up to 3 concurrent projects",
        "Custom AI workflow integration",
        "Advanced analytics setup",
        "Brand strategy consultation",
        "Multi-platform deployment",
        "Unlimited revisions",
        "Priority support",
        "Monthly strategy calls"
      ],
      popular: true,
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Enterprise Elite",
      icon: Crown,
      price: { monthly: 15999, yearly: 159990 },
      description: "For enterprises seeking transformational digital solutions",
      features: [
        "Unlimited projects",
        "Dedicated polymath team",
        "Custom AI model development",
        "Full-scale system architecture",
        "24/7 priority support",
        "Quarterly business reviews",
        "Training & knowledge transfer",
        "White-label solutions"
      ],
      popular: false,
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const projectTypes = [
    "Website Development",
    "Mobile App Development",
    "UI/UX Design",
    "Brand Strategy",
    "AI Integration",
    "Full Digital Transformation"
  ];

  const handleEstimateSubmit = (e) => {
    e.preventDefault();
    // Handle estimate form submission
    console.log('Estimate form submitted:', estimateForm);
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Pricing Models
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transparent pricing that scales with your ambition. Choose the plan that fits your vision.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${billingType === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingType(billingType === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-14 h-7 bg-gray-700 rounded-full transition-colors focus:outline-none"
            >
              <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                billingType === 'yearly' ? 'translate-x-7' : 'translate-x-1'
              }`}></div>
            </button>
            <span className={`text-sm ${billingType === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
              <span className="text-green-400 text-xs ml-1">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'border-purple-500 shadow-2xl shadow-purple-500/20' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className={`inline-flex p-3 bg-gradient-to-r ${plan.color} rounded-xl mb-6`}>
                <plan.icon size={32} className="text-white" />
              </div>

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-white mb-3">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">
                    ₹{billingType === 'monthly' ? plan.price.monthly.toLocaleString() : plan.price.yearly.toLocaleString()}
                  </span>
                  <span className="text-gray-400 ml-2">
                    /{billingType === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
                {billingType === 'yearly' && (
                  <div className="text-sm text-green-400 mt-1">
                    Save ₹{(plan.price.monthly * 12 - plan.price.yearly).toLocaleString()} annually
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-8">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check size={20} className="text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 shadow-lg hover:shadow-purple-500/25'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Custom Estimate Generator */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-2xl p-12">
          <div className="text-center mb-10">
            <Calculator size={48} className="text-blue-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Custom Project Estimator
            </h3>
            <p className="text-gray-300">
              Get a personalized quote based on your specific requirements
            </p>
          </div>

          <form onSubmit={handleEstimateSubmit} className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-3">Project Type</label>
                <select 
                  className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  value={estimateForm.projectType}
                  onChange={(e) => setEstimateForm({...estimateForm, projectType: e.target.value})}
                >
                  <option value="">Select project type</option>
                  {projectTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-3">Timeline</label>
                <select 
                  className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  value={estimateForm.timeline}
                  onChange={(e) => setEstimateForm({...estimateForm, timeline: e.target.value})}
                >
                  <option value="">Select timeline</option>
                  <option value="1-2 weeks">1-2 weeks (Rush)</option>
                  <option value="3-4 weeks">3-4 weeks (Standard)</option>
                  <option value="2-3 months">2-3 months (Complex)</option>
                  <option value="3+ months">3+ months (Enterprise)</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-white font-medium mb-3">Budget Range</label>
                <select 
                  className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  value={estimateForm.budget}
                  onChange={(e) => setEstimateForm({...estimateForm, budget: e.target.value})}
                >
                  <option value="">Select budget range</option>
                  <option value="<50k">Under ₹50,000</option>
                  <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                  <option value="1L-3L">₹1,00,000 - ₹3,00,000</option>
                  <option value="3L-5L">₹3,00,000 - ₹5,00,000</option>
                  <option value="5L+">₹5,00,000+</option>
                </select>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Custom Estimate
            </button>
          </form>
        </div>

        {/* Free Discovery Call CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-2xl p-12 max-w-4xl mx-auto">
            <Phone size={48} className="text-green-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Not Sure Which Plan Fits?
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Book a free 30-minute discovery call with our polymaths to discuss your vision and find the perfect solution.
            </p>
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
              Book Free Discovery Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;