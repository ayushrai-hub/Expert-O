import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ayushrai0211@gmail.com",
      action: "mailto:hello@expert-o.com",
      testId: "email-contact"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7440567944",
      action: "tel:+919876543210",
      testId: "phone-contact"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
      action: null,
      testId: "location-contact"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      action: null,
      testId: "response-time-contact"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "#", color: "text-blue-400 hover:text-blue-300", testId: "linkedin-link" },
    { name: "Twitter", url: "#", color: "text-cyan-400 hover:text-cyan-300", testId: "twitter-link" },
    { name: "Instagram", url: "#", color: "text-pink-400 hover:text-pink-300", testId: "instagram-link" },
    { name: "GitHub", url: "#", color: "text-gray-400 hover:text-white", testId: "github-link" }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-black" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your vision into reality? Let's start the conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-white mb-6">
                Let's Build Something Extraordinary
              </h3>
              <p className="text-gray-300 text-lg mb-8">
                Whether you're a startup with a big vision, an enterprise ready for transformation, 
                or a fellow polymath looking to collaborate—we're here to listen and create together.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center group" data-testid={info.testId}>
                    <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30 group-hover:border-blue-400 transition-colors">
                      <info.icon size={24} className="text-blue-400" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm text-gray-400">{info.label}</div>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="text-white font-medium hover:text-blue-400 transition-colors"
                          data-testid={`${info.testId}-link`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-white font-medium">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">
                Follow Our Journey
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-110 ${social.color}`}
                    data-testid={social.testId}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Live Chat Option */}
            <div className="mt-12 p-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl" data-testid="live-chat-section">
              <div className="flex items-center mb-4">
                <MessageCircle size={24} className="text-green-400 mr-3" />
                <h4 className="text-xl font-bold text-white">Instant Connect</h4>
              </div>
              <p className="text-gray-300 mb-4">
                Need immediate assistance? Our team is online and ready to help.
              </p>
              <button 
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                data-testid="live-chat-button"
              >
                Start Live Chat
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    data-testid="name-input"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    data-testid="email-input"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">Subject *</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  data-testid="subject-input"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell us about your project, questions, or how we can help you..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  data-testid="message-textarea"
                ></textarea>
              </div>

              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                data-testid="submit-button"
              >
                Send Message
                <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;