import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "FinTech Revolution Platform",
      category: "fintech",
      description: "A comprehensive digital banking platform that transformed how users interact with financial services.",
      problem: "Complex financial processes deterring user adoption",
      solution: "Intuitive UI/UX with AI-powered personalization",
      result: "300% increase in user engagement, 45% faster onboarding",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
      tags: ["React", "Node.js", "AI/ML", "Fintech"]
    },
    {
      title: "EduTech Learning Ecosystem",
      category: "edtech",
      description: "An adaptive learning platform that personalizes education for over 100,000 students.",
      problem: "One-size-fits-all education limiting student potential",
      solution: "AI-driven personalized learning paths and gamification",
      result: "85% improvement in learning outcomes, 60% higher retention",
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg",
      tags: ["Vue.js", "Python", "AI/ML", "EdTech"]
    },
    {
      title: "Sustainable Commerce Hub",
      category: "ecommerce",
      description: "An eco-friendly marketplace connecting conscious consumers with sustainable brands.",
      problem: "Difficulty finding and verifying sustainable products",
      solution: "Blockchain-verified sustainability scores and seamless discovery",
      result: "500% growth in sustainable product sales, 2M+ active users",
      image: "https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg",
      tags: ["Next.js", "Blockchain", "Sustainability", "E-commerce"]
    },
    {
      title: "HealthTech Diagnostic AI",
      category: "healthtech",
      description: "AI-powered diagnostic tool helping doctors make faster, more accurate diagnoses.",
      problem: "Time-intensive diagnostic processes in healthcare",
      solution: "Computer vision AI for rapid medical image analysis",
      result: "70% faster diagnosis, 95% accuracy rate, 50+ hospitals deployed",
      image: "https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg",
      tags: ["Python", "TensorFlow", "Computer Vision", "HealthTech"]
    },
    {
      title: "Smart City Dashboard",
      category: "govtech",
      description: "Comprehensive urban management platform for smart city initiatives.",
      problem: "Fragmented city data hampering efficient governance",
      solution: "Unified dashboard with real-time analytics and predictive insights",
      result: "40% reduction in response times, 25% cost savings in operations",
      image: "https://images.pexels.com/photos/3862600/pexels-photo-3862600.jpeg",
      tags: ["React", "IoT", "Data Analytics", "GovTech"]
    },
    {
      title: "Climate Action Network",
      category: "sustainability",
      description: "Platform connecting climate activists, organizations, and funding for environmental projects.",
      problem: "Disconnected climate action efforts reducing overall impact",
      solution: "Network platform with project matching and impact tracking",
      result: "1000+ projects funded, $10M+ raised, 50 countries connected",
      image: "https://images.pexels.com/photos/3648269/pexels-photo-3648269.jpeg",
      tags: ["Vue.js", "Node.js", "Impact Tracking", "Sustainability"]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fintech', label: 'FinTech' },
    { id: 'edtech', label: 'EduTech' },
    { id: 'healthtech', label: 'HealthTech' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'govtech', label: 'GovTech' },
    { id: 'sustainability', label: 'Sustainability' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real impact, measurable results. See how our polymathic approach transforms businesses across industries.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Filter size={20} className="text-gray-400 mr-2 mt-3" />
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <ExternalLink size={20} className="text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {project.description}
                </p>

                {/* Problem-Solution-Result */}
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-sm font-semibold text-red-400 mb-1">PROBLEM</div>
                    <div className="text-sm text-gray-400">{project.problem}</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-blue-400 mb-1">SOLUTION</div>
                    <div className="text-sm text-gray-400">{project.solution}</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-green-400 mb-1">RESULT</div>
                    <div className="text-sm text-gray-400">{project.result}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors group-hover:translate-x-2 transition-transform duration-300">
                  View Case Study
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Be Our Next Success Story?
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Let's create something extraordinary together. Your vision + our execution = transformative results.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;