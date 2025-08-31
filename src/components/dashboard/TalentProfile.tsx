import React, { useState } from 'react';
import { 
  User, 
  Edit, 
  Save, 
  X, 
  Plus, 
  Trash2, 
  Star, 
  Calendar, 
  MapPin, 
  Globe, 
  Mail,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  Upload,
  Award,
  Briefcase,
  BookOpen,
  Clock,
  CheckCircle
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface Skill {
  id: string;
  name: string;
  level: number;
  category: string;
}

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  technologies: string[];
  completedAt: Date;
}

interface Availability {
  day: string;
  available: boolean;
  hours: string;
}

const TalentProfile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'skills' | 'portfolio' | 'availability'>('profile');

  // Mock profile data
  const [profile, setProfile] = useState({
    name: user?.name || 'Sarah Talent',
    email: user?.email || 'talent@example.com',
    bio: 'Full-stack developer with 5+ years of experience building scalable web applications. Passionate about clean code, user experience, and emerging technologies. Specialized in React, Node.js, and cloud architecture.',
    location: 'Bangalore, India',
    phone: '+91 98765 43210',
    website: 'https://sarahtalent.dev',
    linkedin: 'https://linkedin.com/in/sarahtalent',
    github: 'https://github.com/sarahtalent',
    hourlyRate: '₹2,500',
    experience: '5+ years',
    education: 'B.Tech in Computer Science',
    languages: ['English', 'Hindi', 'Kannada']
  });

  const [skills, setSkills] = useState<Skill[]>([
    { id: '1', name: 'React', level: 95, category: 'Frontend' },
    { id: '2', name: 'TypeScript', level: 88, category: 'Frontend' },
    { id: '3', name: 'Node.js', level: 92, category: 'Backend' },
    { id: '4', name: 'Python', level: 85, category: 'Backend' },
    { id: '5', name: 'AWS', level: 78, category: 'Cloud' },
    { id: '6', name: 'Docker', level: 82, category: 'DevOps' },
    { id: '7', name: 'UI/UX Design', level: 75, category: 'Design' },
    { id: '8', name: 'MongoDB', level: 80, category: 'Database' }
  ]);

  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce platform with payment integration, admin dashboard, and real-time inventory management.',
      image: '/api/placeholder/400/300',
      link: 'https://ecommerce-demo.com',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      completedAt: new Date('2024-01-15')
    },
    {
      id: '2',
      title: 'AI-Powered Analytics Dashboard',
      description: 'Machine learning dashboard for business analytics with real-time data visualization and predictive insights.',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js'],
      completedAt: new Date('2023-11-20')
    },
    {
      id: '3',
      title: 'Mobile App for Food Delivery',
      description: 'React Native mobile app with real-time tracking, payment integration, and push notifications.',
      image: '/api/placeholder/400/300',
      link: 'https://food-delivery-app.com',
      technologies: ['React Native', 'Firebase', 'Google Maps API'],
      completedAt: new Date('2023-09-10')
    }
  ]);

  const [availability, setAvailability] = useState<Availability[]>([
    { day: 'Monday', available: true, hours: '9:00 AM - 6:00 PM' },
    { day: 'Tuesday', available: true, hours: '9:00 AM - 6:00 PM' },
    { day: 'Wednesday', available: true, hours: '9:00 AM - 6:00 PM' },
    { day: 'Thursday', available: true, hours: '9:00 AM - 6:00 PM' },
    { day: 'Friday', available: true, hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', available: false, hours: 'Not Available' },
    { day: 'Sunday', available: false, hours: 'Not Available' }
  ]);

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'availability', label: 'Availability', icon: Calendar }
  ];

  const skillCategories = ['Frontend', 'Backend', 'Cloud', 'DevOps', 'Design', 'Database'];

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'from-green-500 to-emerald-500';
    if (level >= 80) return 'from-blue-500 to-cyan-500';
    if (level >= 70) return 'from-yellow-500 to-orange-500';
    return 'from-gray-500 to-gray-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Profile Management</h1>
          <p className="text-gray-400 mt-1">Manage your professional profile and showcase your expertise</p>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            isEditing
              ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
              : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
          }`}
        >
          {isEditing ? <Save size={20} className="mr-2" /> : <Edit size={20} className="mr-2" />}
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>

      {/* Profile Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm font-medium">Projects Completed</p>
              <p className="text-2xl font-bold text-white mt-1">24</p>
            </div>
            <div className="p-3 bg-green-500/20 rounded-lg">
              <CheckCircle size={24} className="text-green-400" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm font-medium">Client Rating</p>
              <p className="text-2xl font-bold text-white mt-1">4.9</p>
            </div>
            <div className="p-3 bg-yellow-500/20 rounded-lg">
              <Star size={24} className="text-yellow-400" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm font-medium">Skills</p>
              <p className="text-2xl font-bold text-white mt-1">{skills.length}</p>
            </div>
            <div className="p-3 bg-blue-500/20 rounded-lg">
              <Award size={24} className="text-blue-400" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm font-medium">Hourly Rate</p>
              <p className="text-2xl font-bold text-white mt-1">{profile.hourlyRate}</p>
            </div>
            <div className="p-3 bg-purple-500/20 rounded-lg">
              <Clock size={24} className="text-purple-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-xl p-2">
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              <tab.icon size={18} className="mr-2" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-xl p-6">
        {activeTab === 'profile' && (
          <div className="space-y-6">
            {/* Basic Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  value={profile.name}
                  disabled={!isEditing}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white disabled:opacity-50 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={profile.email}
                  disabled={!isEditing}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white disabled:opacity-50 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  value={profile.phone}
                  disabled={!isEditing}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white disabled:opacity-50 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Location</label>
                <input
                  type="text"
                  value={profile.location}
                  disabled={!isEditing}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white disabled:opacity-50 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Bio */}
            <div>
              <label className="block text-white font-medium mb-2">Bio</label>
              <textarea
                value={profile.bio}
                disabled={!isEditing}
                rows={4}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white disabled:opacity-50 focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">Website</label>
                <input
                  type="url"
                  value={profile.website}
                  disabled={!isEditing}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white disabled:opacity-50 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">LinkedIn</label>
                <input
                  type="url"
                  value={profile.linkedin}
                  disabled={!isEditing}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white disabled:opacity-50 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">GitHub</label>
                <input
                  type="url"
                  value={profile.github}
                  disabled={!isEditing}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white disabled:opacity-50 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Professional Info */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">Experience</label>
                <input
                  type="text"
                  value={profile.experience}
                  disabled={!isEditing}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white disabled:opacity-50 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Education</label>
                <input
                  type="text"
                  value={profile.education}
                  disabled={!isEditing}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white disabled:opacity-50 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Hourly Rate</label>
                <input
                  type="text"
                  value={profile.hourlyRate}
                  disabled={!isEditing}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white disabled:opacity-50 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Skills & Expertise</h3>
              {isEditing && (
                <button className="flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                  <Plus size={16} className="mr-2" />
                  Add Skill
                </button>
              )}
            </div>

            {skillCategories.map((category) => {
              const categorySkills = skills.filter(skill => skill.category === category);
              if (categorySkills.length === 0) return null;

              return (
                <div key={category} className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">{category}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categorySkills.map((skill) => (
                      <div key={skill.id} className="bg-gray-700/50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="text-gray-400 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-600 rounded-full h-2">
                          <div
                            className={`bg-gradient-to-r ${getSkillColor(skill.level)} h-2 rounded-full transition-all duration-300`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'portfolio' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Portfolio Projects</h3>
              {isEditing && (
                <button className="flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                  <Plus size={16} className="mr-2" />
                  Add Project
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {portfolio.map((item) => (
                <div key={item.id} className="bg-gray-700/50 rounded-xl overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                    <BookOpen size={48} className="text-gray-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-bold text-white">{item.title}</h4>
                      {isEditing && (
                        <div className="flex space-x-2">
                          <button className="p-1 text-gray-400 hover:text-white">
                            <Edit size={16} />
                          </button>
                          <button className="p-1 text-red-400 hover:text-red-300">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">
                        Completed: {item.completedAt.toLocaleDateString()}
                      </span>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-400 hover:text-blue-300 text-sm"
                        >
                          <ExternalLink size={16} className="mr-1" />
                          View Project
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'availability' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Availability Schedule</h3>
              <p className="text-gray-400 text-sm">Set your working hours and availability</p>
            </div>

            <div className="space-y-4">
              {availability.map((day) => (
                <div key={day.day} className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <span className="text-white font-medium w-24">{day.day}</span>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={day.available}
                        disabled={!isEditing}
                        className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-gray-400 text-sm">
                        {day.available ? 'Available' : 'Not Available'}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <input
                      type="text"
                      value={day.hours}
                      disabled={!isEditing || !day.available}
                      className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm disabled:opacity-50 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TalentProfile;
