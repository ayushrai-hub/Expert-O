import React, { useState } from 'react';
import { Send, Upload, CheckCircle } from 'lucide-react';

const ClientForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    budget: '',
    services: [],
    timeline: '',
    vision: '',
    values: '',
    projectType: 'full'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "Website Development",
    "App Development", 
    "UI/UX Design",
    "Brand Strategy",
    "Digital Marketing",
    "AI Integration",
    "Business Analysis",
    "Content Creation"
  ];

  const budgetRanges = [
    "₹25,000 - ₹50,000",
    "₹50,000 - ₹1,00,000", 
    "₹1,00,000 - ₹3,00,000",
    "₹3,00,000 - ₹5,00,000",
    "₹5,00,000+"
  ];

  const handleServiceToggle = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        business: '',
        budget: '',
        services: [],
        timeline: '',
        vision: '',
        values: '',
        projectType: 'full'
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-16">
            <CheckCircle size={80} className="text-green-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Thank You! We've Received Your Request
            </h3>
            <p className="text-gray-300 text-lg">
              Our polymath team will review your submission and reach out within 24 hours to discuss your vision.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Start Your Journey
            </span>
            <br />
            <span className="text-white">With Expert-O</span>
          </h2>
          <p className="text-xl text-gray-300">
            Tell us about your vision, and let's build something extraordinary together.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-2xl p-12">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-white font-medium mb-3">Full Name *</label>
              <input
                type="text"
                required
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-3">Email Address *</label>
              <input
                type="email"
                required
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          {/* Business Information */}
          <div className="mb-8">
            <label className="block text-white font-medium mb-3">Business/Project Name *</label>
            <input
              type="text"
              required
              className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Tell us about your business or project idea"
              value={formData.business}
              onChange={(e) => setFormData({...formData, business: e.target.value})}
            />
          </div>

          {/* Budget Range */}
          <div className="mb-8">
            <label className="block text-white font-medium mb-3">Budget Range *</label>
            <select
              required
              className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
              value={formData.budget}
              onChange={(e) => setFormData({...formData, budget: e.target.value})}
            >
              <option value="">Select your budget range</option>
              {budgetRanges.map((range, index) => (
                <option key={index} value={range}>{range}</option>
              ))}
            </select>
          </div>

          {/* Services Needed */}
          <div className="mb-8">
            <label className="block text-white font-medium mb-4">What services do you need? *</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {services.map((service, index) => (
                <label key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                    checked={formData.services.includes(service)}
                    onChange={() => handleServiceToggle(service)}
                  />
                  <span className="ml-2 text-gray-300 text-sm">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-8">
            <label className="block text-white font-medium mb-3">Timeline Expectations</label>
            <select
              className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
              value={formData.timeline}
              onChange={(e) => setFormData({...formData, timeline: e.target.value})}
            >
              <option value="">Select timeline</option>
              <option value="ASAP">ASAP (Rush project)</option>
              <option value="1-2 weeks">1-2 weeks</option>
              <option value="1 month">1 month</option>
              <option value="2-3 months">2-3 months</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>

          {/* Vision & Goals */}
          <div className="mb-8">
            <label className="block text-white font-medium mb-3">Your Vision & Goals *</label>
            <textarea
              required
              rows="4"
              className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              placeholder="Tell us about your vision, goals, and what success looks like for this project..."
              value={formData.vision}
              onChange={(e) => setFormData({...formData, vision: e.target.value})}
            ></textarea>
          </div>

          {/* Values Alignment */}
          <div className="mb-8">
            <label className="block text-white font-medium mb-3">Values Alignment</label>
            <textarea
              rows="3"
              className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              placeholder="Which of our five pillars resonate with you? How do you see this project making a positive impact?"
              value={formData.values}
              onChange={(e) => setFormData({...formData, values: e.target.value})}
            ></textarea>
          </div>

          {/* Project Type */}
          <div className="mb-8">
            <label className="block text-white font-medium mb-4">Project Type *</label>
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="projectType"
                  value="full"
                  className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 focus:ring-blue-500 focus:ring-2"
                  checked={formData.projectType === 'full'}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                />
                <span className="ml-3 text-gray-300">Full Project - Complete solution from start to finish</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="projectType"
                  value="retainer"
                  className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 focus:ring-blue-500 focus:ring-2"
                  checked={formData.projectType === 'retainer'}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                />
                <span className="ml-3 text-gray-300">Monthly Retainer - Ongoing partnership and support</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="projectType"
                  value="consultation"
                  className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 focus:ring-blue-500 focus:ring-2"
                  checked={formData.projectType === 'consultation'}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                />
                <span className="ml-3 text-gray-300">One-time Consultation - Strategic guidance and planning</span>
              </label>
            </div>
          </div>

          {/* File Upload */}
          <div className="mb-8">
            <label className="block text-white font-medium mb-3">
              Additional Documents (Optional)
            </label>
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
              <Upload size={48} className="text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400 mb-2">
                Upload any briefs, wireframes, or reference materials
              </p>
              <p className="text-gray-500 text-sm">
                Drag & drop files here or click to browse
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="group w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
          >
            Start Your Transformation
            <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-gray-400 text-sm text-center mt-4">
            We'll review your submission and get back to you within 24 hours.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ClientForm;