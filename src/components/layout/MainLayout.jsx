import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Derive page title from route
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/') return 'Family Dashboard';
    if (path.startsWith('/profiles')) return 'Family Profiles';
    if (path.startsWith('/monitoring')) return 'Health Monitoring';
    if (path.startsWith('/medications')) return 'Medications Tracker';
    if (path.startsWith('/appointments')) return 'Appointments';
    if (path.startsWith('/records')) return 'Health Records';
    if (path.startsWith('/chat')) return 'AI Health Assistant';
    if (path.startsWith('/emergency')) return 'Emergency Services';
    if (path.startsWith('/reports')) return 'Reports & Analytics';
    if (path.startsWith('/settings')) return 'Settings';
    return 'FamilyCare';
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#F0F4FF]">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden lg:pl-64 transition-all duration-300">
        <Header toggleSidebar={toggleSidebar} pageTitle={getPageTitle()} />
        
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 pb-20 sm:pb-6">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
