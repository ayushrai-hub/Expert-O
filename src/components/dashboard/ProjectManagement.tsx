import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Calendar, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Edit,
  Eye,
  Trash2,
  FileText,
  Users,
  Target
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { ProjectStatus } from '../../types/auth';

interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  budget: string;
  timeline: string;
  createdAt: Date;
  updatedAt: Date;
  assignedTalent?: string;
  progress?: number;
}

const ProjectManagement = () => {
  useAuth(); // Get auth context but user not needed in this component
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'completed' | 'draft'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);

  // Mock projects data
  const [projects] = useState<Project[]>([
    {
      id: '1',
      title: 'E-commerce Platform Development',
      description: 'Full-stack e-commerce platform with payment integration and admin dashboard',
      status: ProjectStatus.ACTIVE,
      budget: '₹500,000',
      timeline: '3 months',
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-02-01'),
      assignedTalent: 'Sarah Chen',
      progress: 65
    },
    {
      id: '2',
      title: 'Mobile App for Food Delivery',
      description: 'React Native mobile app with real-time tracking and payment system',
      status: ProjectStatus.ACTIVE,
      budget: '₹300,000',
      timeline: '2 months',
      createdAt: new Date('2024-02-01'),
      updatedAt: new Date('2024-02-15'),
      assignedTalent: 'Alex Kumar',
      progress: 40
    },
    {
      id: '3',
      title: 'Brand Identity & Website',
      description: 'Complete brand identity design and responsive website development',
      status: ProjectStatus.COMPLETED,
      budget: '₹150,000',
      timeline: '1 month',
      createdAt: new Date('2023-12-01'),
      updatedAt: new Date('2024-01-15'),
      assignedTalent: 'Priya Sharma',
      progress: 100
    },
    {
      id: '4',
      title: 'AI-Powered Analytics Dashboard',
      description: 'Machine learning dashboard for business analytics and insights',
      status: ProjectStatus.DRAFT,
      budget: '₹750,000',
      timeline: '4 months',
      createdAt: new Date('2024-02-20'),
      updatedAt: new Date('2024-02-20'),
      progress: 0
    }
  ]);

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === 'all' || project.status.toLowerCase() === activeTab;
    return matchesSearch && matchesTab;
  });

  const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
      case ProjectStatus.ACTIVE:
        return 'text-green-600 bg-green-100 border-green-200';
      case ProjectStatus.COMPLETED:
        return 'text-blue-600 bg-blue-100 border-blue-200';
      case ProjectStatus.DRAFT:
        return 'text-gray-600 bg-gray-100 border-gray-200';
      case ProjectStatus.CANCELLED:
        return 'text-red-600 bg-red-100 border-red-200';
      default:
        return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getStatusIcon = (status: ProjectStatus) => {
    switch (status) {
      case ProjectStatus.ACTIVE:
        return <Clock size={16} />;
      case ProjectStatus.COMPLETED:
        return <CheckCircle size={16} />;
      case ProjectStatus.DRAFT:
        return <FileText size={16} />;
      case ProjectStatus.CANCELLED:
        return <AlertCircle size={16} />;
      default:
        return <FileText size={16} />;
    }
  };

  const tabs = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'active', label: 'Active', count: projects.filter(p => p.status === ProjectStatus.ACTIVE).length },
    { id: 'completed', label: 'Completed', count: projects.filter(p => p.status === ProjectStatus.COMPLETED).length },
    { id: 'draft', label: 'Drafts', count: projects.filter(p => p.status === ProjectStatus.DRAFT).length }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Project Management</h1>
          <p className="text-gray-600 mt-1">Track and manage your projects with Expert-O</p>
        </div>
        <button
          onClick={() => setShowNewProjectModal(true)}
          className="flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
        >
          <Plus size={20} className="mr-2" />
          New Project
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Projects</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{projects.length}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Target size={24} className="text-blue-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Active Projects</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {projects.filter(p => p.status === ProjectStatus.ACTIVE).length}
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <Clock size={24} className="text-green-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Completed</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {projects.filter(p => p.status === ProjectStatus.COMPLETED).length}
              </p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <CheckCircle size={24} className="text-blue-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Investment</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">₹1.7M</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <DollarSign size={24} className="text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="card">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
            />
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'all' | 'active' | 'completed' | 'draft')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                }`}
              >
                {tab.label}
                <span className="ml-2 bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="card hover:border-gray-300 transition-colors"
          >
            {/* Project Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <button className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <Eye size={16} />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <Edit size={16} />
                </button>
                <button className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            {/* Status and Progress */}
            <div className="flex items-center justify-between mb-4">
              <div className={`flex items-center px-3 py-1 rounded-full border text-sm font-medium ${getStatusColor(project.status)}`}>
                {getStatusIcon(project.status)}
                <span className="ml-2 capitalize">{project.status.toLowerCase()}</span>
              </div>
              {project.progress !== undefined && (
                <div className="text-right">
                  <p className="text-sm text-gray-600">Progress</p>
                  <p className="text-lg font-bold text-gray-900">{project.progress}%</p>
                </div>
              )}
            </div>

            {/* Progress Bar */}
            {project.progress !== undefined && (
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* Project Details */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center text-sm">
                <Calendar size={16} className="text-gray-500 mr-2" />
                <span className="text-gray-700">{project.timeline}</span>
              </div>
              <div className="flex items-center text-sm">
                <DollarSign size={16} className="text-gray-500 mr-2" />
                <span className="text-gray-700">{project.budget}</span>
              </div>
            </div>

            {/* Assigned Talent */}
            {project.assignedTalent && (
              <div className="flex items-center text-sm">
                <Users size={16} className="text-gray-500 mr-2" />
                <span className="text-gray-700">Assigned to: </span>
                <span className="text-blue-600 ml-1">{project.assignedTalent}</span>
              </div>
            )}

            {/* Dates */}
            <div className="flex items-center justify-between text-xs text-gray-500 mt-4 pt-4 border-t border-gray-200">
              <span>Created: {project.createdAt.toLocaleDateString()}</span>
              <span>Updated: {project.updatedAt.toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText size={32} className="text-gray-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
          <p className="text-gray-600 mb-6">
            {searchTerm ? 'Try adjusting your search terms' : 'Get started by creating your first project'}
          </p>
          {!searchTerm && (
            <button
              onClick={() => setShowNewProjectModal(true)}
              className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
            >
              Create Your First Project
            </button>
          )}
        </div>
      )}

      {/* New Project Modal Placeholder */}
      {showNewProjectModal && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur flex items-center justify-center z-50">
          <div className="bg-white border border-gray-200 rounded-xl p-6 w-full max-w-2xl mx-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Create New Project</h2>
              <button
                onClick={() => setShowNewProjectModal(false)}
                className="text-gray-500 hover:text-gray-900"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              This modal would contain a form for creating new projects. The form would include fields for project title, description, budget, timeline, and requirements.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowNewProjectModal(false)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors"
              >
                Cancel
              </button>
              <button className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300">
                Create Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectManagement;
