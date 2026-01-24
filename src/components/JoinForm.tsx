import React, { useState } from 'react';
import { Users, Send, CheckCircle } from 'lucide-react';

const JoinForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    skills: [] as string[],
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

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
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
      <section id="join" className="py-24 bg-white" data-testid="join-section">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="card-elevated p-16" data-testid="success-message">
            <CheckCircle size={80} className="text-green-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to the Tribe!
            </h3>
            <p className="text-gray-600 text-lg">
              Your application has been received. Our team will review it and reach out if you're a match for our polymath collective.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="join" className="py-24 bg-white" data-testid="join-section">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full border border-gray-200 mb-6">
            <Users size={16} className="mr-2 text-gray-700" />
            <span className="text-sm font-medium text-gray-900">Join the Elite</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Work With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our tribe of elite polymaths and help shape India's digital future. 
            We're looking for visionaries, misfits, and rebels who think differently.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="card-elevated p-12" data-testid="join-form">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label htmlFor="name" className="block text-gray-900 font-medium mb-3">Full Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full p-4 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                data-testid="name-input"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-900 font-medium mb-3">Email Address *</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full p-4 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                data-testid="email-input"
              />
            </div>
          </div>

          {/* Role Interest */}
          <div className="mb-8">
            <label htmlFor="role" className="block text-gray-900 font-medium mb-3">How would you like to join us? *</label>
            <select
              id="role"
              name="role"
              required
              className="w-full p-4 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-gray-400 transition-colors"
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
              data-testid="role-select"
            >
              <option value="">Select your preferred role</option>
              {roles.map((role, index) => (
                <option key={index} value={role}>{role}</option>
              ))}
            </select>
          </div>

          {/* Skills & Expertise */}
          <div className="mb-8">
            <label className="block text-gray-900 font-medium mb-4">Your Areas of Expertise *</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3" data-testid="skills-grid">
              {skillAreas.map((skill, index) => (
                <label key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-gray-700 bg-white border-gray-300 rounded focus:ring-gray-400 focus:ring-2"
                    checked={formData.skills.includes(skill)}
                    onChange={() => handleSkillToggle(skill)}
                    data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                  />
                  <span className="ml-2 text-gray-600 text-sm">{skill}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Portfolio & Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label htmlFor="portfolio" className="block text-gray-900 font-medium mb-3">Portfolio/Website URL</label>
              <input
                id="portfolio"
                name="portfolio"
                type="url"
                className="w-full p-4 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                placeholder="https://yourportfolio.com"
                value={formData.portfolio}
                onChange={(e) => setFormData({...formData, portfolio: e.target.value})}
                data-testid="portfolio-input"
              />
            </div>

            <div>
              <label htmlFor="linkedin" className="block text-gray-900 font-medium mb-3">LinkedIn Profile *</label>
              <input
                id="linkedin"
                name="linkedin"
                type="url"
                required
                className="w-full p-4 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                placeholder="https://linkedin.com/in/yourprofile"
                value={formData.linkedin}
                onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
                data-testid="linkedin-input"
              />
            </div>
          </div>

          {/* Motivation */}
          <div className="mb-8">
            <label htmlFor="motivation" className="block text-gray-900 font-medium mb-3">What motivates you to join Expert-O? *</label>
            <textarea
              id="motivation"
              name="motivation"
              required
              rows={3}
              className="w-full p-4 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors resize-none"
              placeholder="Tell us what excites you about joining our team..."
              value={formData.motivation}
              onChange={(e) => setFormData({...formData, motivation: e.target.value})}
              data-testid="motivation-textarea"
            ></textarea>
          </div>

          {/* Pillars */}
          <div className="mb-8">
            <label htmlFor="pillars" className="block text-gray-900 font-medium mb-3">Which of our pillars resonates with you most? *</label>
            <textarea
              id="pillars"
              name="pillars"
              required
              rows={2}
              className="w-full p-4 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors resize-none"
              placeholder="Innovation, Excellence, or Collaboration? Let us know..."
              value={formData.pillars}
              onChange={(e) => setFormData({...formData, pillars: e.target.value})}
              data-testid="pillars-textarea"
            ></textarea>
          </div>

          {/* Availability */}
          <div className="mb-8">
            <label htmlFor="availability" className="block text-gray-900 font-medium mb-3">What's your availability? *</label>
            <select
              id="availability"
              name="availability"
              required
              className="w-full p-4 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-gray-400 transition-colors"
              value={formData.availability}
              onChange={(e) => setFormData({...formData, availability: e.target.value})}
              data-testid="availability-select"
            >
              <option value="">Select your availability</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Freelance">Freelance/Project-based</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <label htmlFor="experience" className="block text-gray-900 font-medium mb-3">Tell us about your experience *</label>
            <textarea
              id="experience"
              name="experience"
              required
              rows={4}
              className="w-full p-4 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors resize-none"
              placeholder="Share your professional journey and relevant experience..."
              value={formData.experience}
              onChange={(e) => setFormData({...formData, experience: e.target.value})}
              data-testid="experience-textarea"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-4 px-8 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            data-testid="submit-button"
          >
            Submit Application
            <Send size={20} className="ml-2" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default JoinForm;
