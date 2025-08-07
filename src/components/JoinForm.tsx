import React, { useState } from 'react';
import { Users, Send, CheckCircle } from 'lucide-react';

const JoinForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    skills: [],
    portfolio: '',
    linkedin: '',
    motivation: '',
    pillars: '',
    availability: '',
    experience: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const roles = [
    "Full-time Team Member",
    "Freelancer/Contractor", 
    "Intern/Apprentice",
    "Partner Organization",
    "Startup Collaborator"
  ];

  const skillAreas = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Brand Strategy",
    "Digital Marketing", 
    "Content Creation",
    "AI/ML Integration",
    "Business Analysis",
    "Project Management",
    "Data Science",
    "DevOps",
    "Sales & Growth"
  ];

  const handleSkillToggle = (skill) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Join form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        role: '',
        skills: [],
        portfolio: '',
        linkedin: '',
        motivation: '',
        pillars: '',
        availability: '',
        experience: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="join" className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl p-16">
            <CheckCircle size={80} className="text-purple-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Welcome to the Tribe!
            </h3>
            <p className="text-gray-300 text-lg">
              Your application has been received. Our team will review it and reach out if you're a match for our polymath collective.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="join" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 mb-6">
            <Users size={16} className="mr-2 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Join the Elite</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Work With Us
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our tribe of elite polymaths and help shape India's digital future. 
            We're looking for visionaries, misfits, and rebels who think differently.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-2xl p-12">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-white font-medium mb-3">Full Name *</label>
              <input
                type="text"
                required
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
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
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          {/* Role Interest */}
          <div className="mb-8">
            <label className="block text-white font-medium mb-3">How would you like to join us? *</label>
            <select
              required
              className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
            >
              <option value="">Select your preferred role</option>
              {roles.map((role, index) => (
                <option key={index} value={role}>{role}</option>
              ))}
            </select>
          </div>

          {/* Skills & Expertise */}
          <div className="mb-8">
            <label className="block text-white font-medium mb-4">Your Areas of Expertise *</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {skillAreas.map((skill, index) => (
                <label key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-purple-500 bg-gray-700 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
                    checked={formData.skills.includes(skill)}
                    onChange={() => handleSkillToggle(skill)}
                  />
                  <span className="ml-2 text-gray-300 text-sm">{skill}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Portfolio & Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-white font-medium mb-3">Portfolio/Website URL</label>
              <input
                type="url"
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="https://yourportfolio.com"
                value={formData.portfolio}
                onChange={(e) => setFormData({...formData, portfolio: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-3">LinkedIn Profile *</label>
              <input
                type="url"
                required
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="https://linkedin.com/in/yourprofile"
                value={formData.linkedin}
                onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
              />
            </div>
          </div>

          {/* Experience Level */}
          <div className="mb-8">
            <label className="block text-white font-medium mb-3">Experience Level *</label>
            <select
              required
              className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
              value={formData.experience}
              onChange={(e) => setFormData({...formData, experience: e.target.value})}
            >
              <option value="">Select your experience level</option>
              <option value="0-1 years">0-1 years (Entry Level)</option>
              <option value="2-3 years">2-3 years (Junior)</option>
              <option value="4-6 years">4-6 years (Mid-Level)</option>
              <option value="7-10 years">7-10 years (Senior)</option>
              <option value="10+ years">10+ years (Expert/Lead)</option>
            </select>
          </div>

          {/* Availability */}
          <div className="mb-8">
            <label className="block text-white font-medium mb-3">Availability *</label>
            <select
              required
              className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
              value={formData.availability}
              onChange={(e) => setFormData({...formData, availability: e.target.value})}
            >
              <option value="">Select your availability</option>
              <option value="Full-time">Full-time (40+ hours/week)</option>
              <option value="Part-time">Part-time (20-30 hours/week)</option>
              <option value="Project-based">Project-based (Flexible)</option>
              <option value="Weekends only">Weekends only</option>
              <option value="Evening hours">Evening hours only</option>
            </select>
          </div>

          {/* Motivation */}
          <div className="mb-8">
            <label className="block text-white font-medium mb-3">Why do you want to join Expert-O? *</label>
            <textarea
              required
              rows="4"
              className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
              placeholder="Tell us what excites you about our mission and how you'd contribute to our polymath collective..."
              value={formData.motivation}
              onChange={(e) => setFormData({...formData, motivation: e.target.value})}
            ></textarea>
          </div>

          {/* Pillars Alignment */}
          <div className="mb-8">
            <label className="block text-white font-medium mb-3">Which of our Five Pillars resonates with you most? *</label>
            <textarea
              required
              rows="3"
              className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
              placeholder="Reflect on our pillars: Polymathy as Power, Precision Over Prestige, Deep Trust & Radical Ownership, Speed with Soul, Impact Through Humanity..."
              value={formData.pillars}
              onChange={(e) => setFormData({...formData, pillars: e.target.value})}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="group w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
          >
            Join the Tribe
            <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-gray-400 text-sm text-center mt-4">
            We review applications carefully and respond within 48-72 hours.
          </p>
        </form>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              What We Look For
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-purple-400 font-semibold mb-2">Mindset</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Growth mindset & continuous learning</li>
                  <li>• Systems thinking across domains</li>
                  <li>• Radical ownership of outcomes</li>
                  <li>• Empathy-driven problem solving</li>
                </ul>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">Skills</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Demonstrable expertise in chosen field</li>
                  <li>• Cross-functional collaboration ability</li>
                  <li>• AI-tool proficiency (preferred)</li>
                  <li>• Clear communication skills</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinForm;