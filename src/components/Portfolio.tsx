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
    <section id="portfolio" className="section bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Portfolio
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Real impact, measurable results across industries.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          <Filter size={18} className="text-gray-500" />
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeFilter === category.id
                  ? 'bg-gray-900 text-white shadow-medium'
                  : 'btn-secondary'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="card group overflow-hidden hover:shadow-strong transition-all"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                    <ExternalLink size={18} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-5">
                  {project.description}
                </p>

                {/* Problem-Solution-Result */}
                <div className="space-y-3 mb-5">
                  <div>
                    <div className="text-sm font-semibold text-red-600 mb-1">Problem</div>
                    <div className="text-sm text-gray-500">{project.problem}</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-1">Solution</div>
                    <div className="text-sm text-gray-500">{project.solution}</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-green-600 mb-1">Result</div>
                    <div className="text-sm text-gray-500">{project.result}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-900 text-xs rounded-lg border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="flex items-center text-gray-700 text-sm font-semibold hover:text-gray-900 transition-colors group">
                  View Case Study
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="card-elevated p-10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to Be Our Next Success Story?
            </h3>
            <p className="text-gray-600 text-base mb-6">
              Let's create something extraordinary together.
            </p>
            <button className="btn-primary px-8 py-3 text-base">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
