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
      color: "from-gray-600 to-gray-400"
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
      color: "from-gray-600 to-gray-400"
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
      color: "from-gray-600 to-gray-400"
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

  const handleEstimateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle estimate form submission
    console.log('Estimate form submitted:', estimateForm);
  };

  const isYearly = billingType === 'yearly';

  const toggleBillingPeriod = () => {
    setBillingType(isYearly ? 'monthly' : 'yearly');
  };

  return (
    <section id="pricing" className="section bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Pricing Models
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto mb-8">
            Transparent pricing that scales with your ambition.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className="text-sm text-gray-600 font-medium">Monthly</span>
            <button
              role="switch"
              aria-checked={isYearly}
              aria-label="Toggle billing period"
              onClick={toggleBillingPeriod}
              className={`relative w-14 h-7 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 ${
                isYearly ? 'bg-gray-900' : 'bg-gray-200'
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
                  isYearly ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
            <span className="text-sm text-gray-600 font-medium">
              Yearly
              <span className="text-green-600 text-sm ml-2">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative ${
                plan.popular 
                  ? 'card-elevated border-2 border-gray-900 scale-105' 
                  : 'card'
              } p-8 transition-all hover:scale-105`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-medium">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="inline-flex p-3 bg-gray-100 rounded-xl mb-5">
                <plan.icon size={28} className="text-gray-700" />
              </div>

              {/* Plan Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-5">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">
                    ₹{billingType === 'monthly' ? plan.price.monthly.toLocaleString() : plan.price.yearly.toLocaleString()}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">
                    /{billingType === 'monthly' ? 'mo' : 'yr'}
                  </span>
                </div>
                {billingType === 'yearly' && (
                  <div className="text-sm text-green-600 mt-2 font-medium">
                    Save ₹{(plan.price.monthly * 12 - plan.price.yearly).toLocaleString()} annually
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check size={18} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-900 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-3 rounded-lg text-base font-semibold transition-all ${
                plan.popular
                  ? 'btn-primary'
                  : 'btn-secondary'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Custom Estimate Generator */}
        <div className="card-elevated p-10 md:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex p-4 bg-gray-100 rounded-2xl mb-5">
              <Calculator size={40} className="text-gray-700" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Custom Project Estimator
            </h3>
            <p className="text-gray-600 text-base">
              Get a personalized quote based on your specific requirements
            </p>
          </div>

          <form onSubmit={handleEstimateSubmit} className="space-y-6">
            <div>
              <label htmlFor="projectType" className="block text-sm font-semibold text-gray-900 mb-2">
                Project Type
              </label>
              <select
                id="projectType"
                value={estimateForm.projectType}
                onChange={(e) => setEstimateForm({...estimateForm, projectType: e.target.value})}
                className="input"
                required
              >
                <option value="">Select project type</option>
                {projectTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="timeline" className="block text-sm font-semibold text-gray-900 mb-2">
                Timeline
              </label>
              <select 
                id="timeline"
                value={estimateForm.timeline}
                onChange={(e) => setEstimateForm({...estimateForm, timeline: e.target.value})}
                className="input"
                required
              >
                <option value="">Select timeline</option>
                <option value="1-2 weeks">1-2 weeks (Rush)</option>
                <option value="3-4 weeks">3-4 weeks (Standard)</option>
                <option value="2-3 months">2-3 months (Complex)</option>
                <option value="3+ months">3+ months (Enterprise)</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-semibold text-gray-900 mb-2">
                Budget Range
              </label>
              <select 
                id="budget"
                value={estimateForm.budget}
                onChange={(e) => setEstimateForm({...estimateForm, budget: e.target.value})}
                className="input"
                required
              >
                <option value="">Select budget range</option>
                <option value="<50k">Under ₹50,000</option>
                <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                <option value="1L-3L">₹1,00,000 - ₹3,00,000</option>
                <option value="3L-5L">₹3,00,000 - ₹5,00,000</option>
                <option value="5L+">₹5,00,000+</option>
              </select>
            </div>

            <button 
              type="submit"
              className="w-full bg-gray-900 text-white py-3.5 rounded-lg text-base font-semibold hover:shadow-strong transition-all duration-300"
            >
              Get Custom Estimate
            </button>
          </form>
        </div>

        {/* Free Discovery Call CTA */}
        <div className="text-center mt-16">
          <div className="card-elevated p-10 md:p-12 max-w-4xl mx-auto">
            <div className="inline-flex p-4 bg-green-100 rounded-2xl mb-5">
              <Phone size={40} className="text-green-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Not Sure Which Plan Fits?
            </h3>
            <p className="text-gray-600 text-base mb-8 max-w-2xl mx-auto">
              Book a free 30-minute discovery call with our polymaths to discuss your vision and find the perfect solution.
            </p>
            <button className="bg-gray-900 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:shadow-strong transition-all duration-300">
              Book Free Discovery Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
