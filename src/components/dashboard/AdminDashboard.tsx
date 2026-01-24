import React, { useState } from 'react';
import {
  Users,
  BarChart3,
  FileText,
  Settings,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  MoreHorizontal,
  TrendingUp,
  DollarSign,
  CheckCircle,
  UserPlus,
  FolderOpen
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Role } from '../../types/auth';

interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: 'active' | 'inactive' | 'pending';
  joinedAt: Date;
  lastActive: Date;
  projectsCount: number;
}

interface AnalyticsData {
  totalUsers: number;
  activeUsers: number;
  totalProjects: number;
  completedProjects: number;
  revenue: string;
  growthRate: number;
}

const AdminDashboard = () => {
  useAuth(); // Get auth context but user not needed in this component
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'projects' | 'content' | 'analytics'>('overview');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock analytics data
  const analytics: AnalyticsData = {
    totalUsers: 1247,
    activeUsers: 892,
    totalProjects: 156,
    completedProjects: 89,
    revenue: '₹2.4M',
    growthRate: 23.5
  };

  // Mock users data
  const [users] = useState<User[]>([
    {
      id: '1',
      name: 'John Client',
      email: 'john@example.com',
      role: Role.CLIENT,
      status: 'active',
      joinedAt: new Date('2024-01-15'),
      lastActive: new Date('2024-02-20'),
      projectsCount: 3
    },
    {
      id: '2',
      name: 'Sarah Talent',
      email: 'sarah@example.com',
      role: Role.TALENT,
      status: 'active',
      joinedAt: new Date('2024-01-20'),
      lastActive: new Date('2024-02-19'),
      projectsCount: 8
    },
    {
      id: '3',
      name: 'Mike Developer',
      email: 'mike@example.com',
      role: Role.TALENT,
      status: 'pending',
      joinedAt: new Date('2024-02-15'),
      lastActive: new Date('2024-02-15'),
      projectsCount: 0
    },
    {
      id: '4',
      name: 'Lisa Designer',
      email: 'lisa@example.com',
      role: Role.TALENT,
      status: 'inactive',
      joinedAt: new Date('2023-12-01'),
      lastActive: new Date('2024-01-15'),
      projectsCount: 5
    }
  ]);

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'content', label: 'Content', icon: FileText },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-100 border-green-200';
      case 'inactive':
        return 'text-red-600 bg-red-100 border-red-200';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      default:
        return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getRoleColor = (role: Role) => {
    switch (role) {
      case Role.ADMIN:
        return 'text-purple-600 bg-purple-100';
      case Role.CLIENT:
        return 'text-blue-600 bg-blue-100';
      case Role.TALENT:
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage users, projects, and platform analytics</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
            <Settings size={20} className="mr-2" />
            Settings
          </button>
        </div>
      </div>

      {/* Analytics Cards */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Users</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{analytics.totalUsers.toLocaleString()}</p>
                <p className="text-green-600 text-sm mt-1">+{analytics.growthRate}% from last month</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users size={24} className="text-blue-600" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Users</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{analytics.activeUsers.toLocaleString()}</p>
                <p className="text-green-600 text-sm mt-1">+12% from last week</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle size={24} className="text-green-600" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Projects</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{analytics.totalProjects}</p>
                <p className="text-blue-600 text-sm mt-1">{analytics.completedProjects} completed</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <FolderOpen size={24} className="text-purple-600" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Revenue</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{analytics.revenue}</p>
                <p className="text-green-600 text-sm mt-1">+18% from last month</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-lg">
                <DollarSign size={24} className="text-yellow-600" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="card p-2">
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'overview' | 'users' | 'projects' | 'content' | 'analytics')}
              className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <tab.icon size={18} className="mr-2" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="card">
        {activeTab === 'users' && (
          <div className="space-y-6">
            {/* User Management Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">User Management</h3>
                <p className="text-gray-600 text-sm">Manage platform users and their permissions</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                  />
                </div>
                <button className="flex items-center bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
                  <UserPlus size={16} className="mr-2" />
                  Add User
                </button>
              </div>
            </div>

            {/* Users Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-gray-600 font-medium">User</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-medium">Role</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-medium">Status</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-medium">Projects</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-medium">Joined</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-medium">Last Active</th>
                    <th className="text-right py-3 px-4 text-gray-600 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div>
                          <p className="text-gray-900 font-medium">{user.name}</p>
                          <p className="text-gray-600 text-sm">{user.email}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 rounded-full border text-xs font-medium ${getStatusColor(user.status)}`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-gray-900">{user.projectsCount}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-gray-600 text-sm">{user.joinedAt.toLocaleDateString()}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-gray-600 text-sm">{user.lastActive.toLocaleDateString()}</span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <button className="p-1 text-gray-500 hover:text-gray-900">
                            <Eye size={16} />
                          </button>
                          <button className="p-1 text-gray-500 hover:text-gray-900">
                            <Edit size={16} />
                          </button>
                          <button className="p-1 text-red-600 hover:text-red-700">
                            <Trash2 size={16} />
                          </button>
                          <button className="p-1 text-gray-500 hover:text-gray-900">
                            <MoreHorizontal size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Project Management</h3>
                <p className="text-gray-600 text-sm">Monitor and manage all platform projects</p>
              </div>
              <button className="flex items-center bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
                <Plus size={16} className="mr-2" />
                Create Project
              </button>
            </div>
            <div className="text-center py-12">
              <FolderOpen size={48} className="text-gray-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Project Management</h4>
              <p className="text-gray-600">Project management interface will be implemented here</p>
            </div>
          </div>
        )}

        {activeTab === 'content' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Content Management</h3>
                <p className="text-gray-600 text-sm">Manage blog posts, portfolio items, and platform content</p>
              </div>
              <button className="flex items-center bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
                <Plus size={16} className="mr-2" />
                Add Content
              </button>
            </div>
            <div className="text-center py-12">
              <FileText size={48} className="text-gray-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Content Management</h4>
              <p className="text-gray-600">Content management interface will be implemented here</p>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Analytics Dashboard</h3>
                <p className="text-gray-600 text-sm">Detailed platform analytics and insights</p>
              </div>
            </div>
            <div className="text-center py-12">
              <BarChart3 size={48} className="text-gray-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Analytics Dashboard</h4>
              <p className="text-gray-600">Advanced analytics and charts will be implemented here</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
