import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ayushrai0211@gmail.com",
      action: "mailto:ayushrai0211@gmail.com",
      testId: "email-contact"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7440567944",
      action: "tel:+917440567944",
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
    { name: "LinkedIn", url: "#", testId: "linkedin-link" },
    { name: "Twitter", url: "#", testId: "twitter-link" },
    { name: "Instagram", url: "#", testId: "instagram-link" },
    { name: "GitHub", url: "#", testId: "github-link" }
  ];

  return (
    <section id="contact" className="section bg-gray-50" data-testid="contact-section">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Contact Us
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Ready to transform your vision into reality? Let's start the conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Let's Build Something Extraordinary
              </h3>
              <p className="text-gray-600 text-base mb-6">
                Whether you're a startup with a big vision, an enterprise ready for transformation, 
                or a fellow polymath looking to collaborate—we're here to create together.
              </p>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center group" data-testid={info.testId}>
                    <div className="p-3 bg-gray-100 rounded-lg border border-gray-200 group-hover:border-gray-300 transition-all">
                      <info.icon size={20} className="text-gray-700" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm text-gray-500">{info.label}</div>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="text-gray-900 text-base font-semibold hover:text-gray-700 transition-colors"
                          data-testid={`${info.testId}-link`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-gray-900 text-base font-semibold">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h4 className="text-base font-semibold text-gray-900 mb-4">
                Follow Our Journey
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="btn-secondary text-sm"
                    data-testid={social.testId}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Live Chat Option */}
            <div className="card p-6" data-testid="live-chat-section">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-green-100 rounded-lg mr-3">
                  <MessageCircle size={20} className="text-green-600" />
                </div>
                <h4 className="text-base font-semibold text-gray-900">Instant Connect</h4>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Need immediate assistance? Our team is ready to help.
              </p>
              <button 
                className="btn-primary text-sm w-full"
                data-testid="live-chat-button"
              >
                Start Live Chat
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-elevated p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-gray-900 text-sm font-semibold mb-2">Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="input"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    data-testid="name-input"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-900 text-sm font-semibold mb-2">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="input"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    data-testid="email-input"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-900 text-sm font-semibold mb-2">Subject *</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="input"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  data-testid="subject-input"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-900 text-sm font-semibold mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="input resize-none"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  data-testid="message-textarea"
                ></textarea>
              </div>

              <button
                type="submit"
                className="group btn-primary w-full text-base py-3"
                data-testid="submit-button"
              >
                Send Message
                <Send size={18} className="ml-2 inline-block group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
