import React, { useState } from 'react';
import { 
  Users, 
  BarChart3, 
  FileText, 
  Settings, 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye,
  MoreHorizontal,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Calendar,
  CheckCircle,
  AlertCircle,
  Clock,
  UserPlus,
  Project,
  MessageSquare
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
  const { user } = useAuth();
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
  const [users, setUsers] = useState<User[]>([
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
    { id: 'projects', label: 'Projects', icon: Project },
    { id: 'content', label: 'Content', icon: FileText },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'inactive':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'pending':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const getRoleColor = (role: Role) => {
    switch (role) {
      case Role.ADMIN:
        return 'text-purple-400 bg-purple-400/10';
      case Role.CLIENT:
        return 'text-blue-400 bg-blue-400/10';
      case Role.TALENT:
        return 'text-green-400 bg-green-400/10';
      default:
        return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <p className="text-gray-400 mt-1">Manage users, projects, and platform analytics</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
            <Settings size={20} className="mr-2" />
            Settings
          </button>
        </div>
      </div>

      {/* Analytics Cards */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">Total Users</p>
                <p className="text-2xl font-bold text-white mt-1">{analytics.totalUsers.toLocaleString()}</p>
                <p className="text-green-400 text-sm mt-1">+{analytics.growthRate}% from last month</p>
              </div>
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <Users size={24} className="text-blue-400" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">Active Users</p>
                <p className="text-2xl font-bold text-white mt-1">{analytics.activeUsers.toLocaleString()}</p>
                <p className="text-green-400 text-sm mt-1">+12% from last week</p>
              </div>
              <div className="p-3 bg-green-500/20 rounded-lg">
                <CheckCircle size={24} className="text-green-400" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">Total Projects</p>
                <p className="text-2xl font-bold text-white mt-1">{analytics.totalProjects}</p>
                <p className="text-blue-400 text-sm mt-1">{analytics.completedProjects} completed</p>
              </div>
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <Project size={24} className="text-purple-400" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">Revenue</p>
                <p className="text-2xl font-bold text-white mt-1">{analytics.revenue}</p>
                <p className="text-green-400 text-sm mt-1">+18% from last month</p>
              </div>
              <div className="p-3 bg-yellow-500/20 rounded-lg">
                <DollarSign size={24} className="text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      )}

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
        {activeTab === 'users' && (
          <div className="space-y-6">
            {/* User Management Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">User Management</h3>
                <p className="text-gray-400 text-sm">Manage platform users and their permissions</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  />
                </div>
                <button className="flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                  <UserPlus size={16} className="mr-2" />
                  Add User
                </button>
              </div>
            </div>

            {/* Users Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">User</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Role</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Projects</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Joined</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Last Active</th>
                    <th className="text-right py-3 px-4 text-gray-400 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="border-b border-gray-700/50 hover:bg-gray-700/30">
                      <td className="py-4 px-4">
                        <div>
                          <p className="text-white font-medium">{user.name}</p>
                          <p className="text-gray-400 text-sm">{user.email}</p>
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
                        <span className="text-white">{user.projectsCount}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-gray-400 text-sm">{user.joinedAt.toLocaleDateString()}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-gray-400 text-sm">{user.lastActive.toLocaleDateString()}</span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <button className="p-1 text-gray-400 hover:text-white">
                            <Eye size={16} />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-white">
                            <Edit size={16} />
                          </button>
                          <button className="p-1 text-red-400 hover:text-red-300">
                            <Trash2 size={16} />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-white">
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
                <h3 className="text-xl font-bold text-white">Project Management</h3>
                <p className="text-gray-400 text-sm">Monitor and manage all platform projects</p>
              </div>
              <button className="flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                <Plus size={16} className="mr-2" />
                Create Project
              </button>
            </div>
            <div className="text-center py-12">
              <Project size={48} className="text-gray-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Project Management</h4>
              <p className="text-gray-400">Project management interface will be implemented here</p>
            </div>
          </div>
        )}

        {activeTab === 'content' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">Content Management</h3>
                <p className="text-gray-400 text-sm">Manage blog posts, portfolio items, and platform content</p>
              </div>
              <button className="flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                <Plus size={16} className="mr-2" />
                Add Content
              </button>
            </div>
            <div className="text-center py-12">
              <FileText size={48} className="text-gray-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Content Management</h4>
              <p className="text-gray-400">Content management interface will be implemented here</p>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">Analytics Dashboard</h3>
                <p className="text-gray-400 text-sm">Detailed platform analytics and insights</p>
              </div>
            </div>
            <div className="text-center py-12">
              <BarChart3 size={48} className="text-gray-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Analytics Dashboard</h4>
              <p className="text-gray-400">Advanced analytics and charts will be implemented here</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
