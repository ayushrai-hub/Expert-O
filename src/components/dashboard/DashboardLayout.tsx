import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Home, 
  User, 
  Briefcase, 
  Settings, 
  LogOut, 
  Bell,
  ChevronDown,
  Users,
  BarChart3,
  FileText,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Role } from '../../types/auth';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getNavigationItems = () => {
    if (!user) return [];

    const baseItems = [
      { name: 'Dashboard', href: '/dashboard', icon: Home },
    ];

    switch (user.role) {
      case Role.ADMIN:
        return [
          ...baseItems,
          { name: 'Users', href: '/admin/users', icon: Users },
          { name: 'Projects', href: '/admin/projects', icon: Briefcase },
          { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
          { name: 'Content', href: '/admin/content', icon: FileText },
        ];
      
      case Role.CLIENT:
        return [
          ...baseItems,
          { name: 'My Projects', href: '/client/projects', icon: Briefcase },
          { name: 'Submit Project', href: '/client/submit', icon: FileText },
          { name: 'Communication', href: '/client/communication', icon: MessageSquare },
          { name: 'Billing', href: '/client/billing', icon: BarChart3 },
        ];
      
      case Role.TALENT:
        return [
          ...baseItems,
          { name: 'Profile', href: '/talent/profile', icon: User },
          { name: 'Portfolio', href: '/talent/portfolio', icon: Briefcase },
          { name: 'Skills', href: '/talent/skills', icon: FileText },
          { name: 'Availability', href: '/talent/availability', icon: Calendar },
          { name: 'Communication', href: '/talent/communication', icon: MessageSquare },
        ];
      
      default:
        return baseItems;
    }
  };

  const navigationItems = getNavigationItems();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 shadow-lg">
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
            <div className="text-xl font-bold text-gray-900">
              Expert-O
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-gray-500 hover:text-gray-900"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="mt-6 px-3">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === item.href
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon size={20} className="mr-3" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200 shadow-lg">
          <div className="flex items-center h-16 px-6 border-b border-gray-200">
            <div className="text-xl font-bold text-gray-900">
              Expert-O
            </div>
          </div>
          <nav className="flex-1 mt-6 px-3 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === item.href
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <item.icon size={20} className="mr-3" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-500 hover:text-gray-900"
            >
              <Menu size={24} />
            </button>

            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="text-gray-500 hover:text-gray-900 relative">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>

              {/* User menu */}
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                >
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-700">
                      {user?.name?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="hidden md:block text-sm font-medium">{user?.name}</span>
                  <ChevronDown size={16} />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-1">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className="text-sm text-gray-900 font-medium">{user?.name}</p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                    <Link
                      to="/profile"
                      className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <User size={16} className="mr-2" />
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <Settings size={16} className="mr-2" />
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    >
                      <LogOut size={16} className="mr-2" />
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
