import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Role } from '../../types/auth';
import ProjectManagement from './ProjectManagement';
import TalentProfile from './TalentProfile';
import AdminDashboard from './AdminDashboard';

const Dashboard = () => {
  const { user } = useAuth();

  const getDashboardContent = () => {
    if (!user) return null;

    switch (user.role) {
      case Role.ADMIN:
        return <AdminDashboard />;
      case Role.CLIENT:
        return <ClientDashboard />;
      case Role.TALENT:
        return <TalentDashboard />;
      default:
        return <DefaultDashboard />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="card rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {user?.name}! 👋
        </h1>
        <p className="text-gray-600">
          Here's what's happening with your {user?.role.toLowerCase()} account today.
        </p>
      </div>

      {/* Dashboard Content */}
      {getDashboardContent()}
    </div>
  );
};

// AdminDashboard is now imported from separate component

const ClientDashboard = () => {
  return <ProjectManagement />;
};

const TalentDashboard = () => {
  return <TalentProfile />;
};

const DefaultDashboard = () => {
  return (
    <div className="card rounded-2xl p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Welcome to Expert-O</h2>
      <p className="text-gray-600">
        Your dashboard is being set up. Please contact support if you need assistance.
      </p>
    </div>
  );
};

export default Dashboard;
