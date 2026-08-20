import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, Users, Activity, Pill, Calendar, 
  FileText, MessageCircle, AlertTriangle, 
  BarChart, Settings, LogOut 
} from 'lucide-react';

export const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: Home },
    { name: 'Family Profiles', path: '/profiles', icon: Users },
    { name: 'Health Monitoring', path: '/monitoring', icon: Activity },
    { name: 'Medications', path: '/medications', icon: Pill },
    { name: 'Appointments', path: '/appointments', icon: Calendar },
    { name: 'Health Records', path: '/records', icon: FileText },
    { name: 'AI Health Chat', path: '/chat', icon: MessageCircle },
    { name: 'Reports & Analytics', path: '/reports', icon: BarChart },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside className={`
        fixed top-0 left-0 z-30 h-screen w-64 bg-white border-r border-[#E2E8F0] shadow-sm
        transition-transform duration-300 ease-in-out flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-[#E2E8F0]">
          <div className="flex items-center gap-2 text-[#2563EB]">
            <Activity className="h-8 w-8" />
            <span className="text-xl font-bold text-[#1E293B]">FamilyCare</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 hide-scrollbar">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `
                flex items-center px-3 py-2.5 rounded-lg transition-colors group
                ${isActive 
                  ? 'bg-[#2563EB]/10 text-[#2563EB] font-medium' 
                  : 'text-[#64748B] hover:bg-gray-50 hover:text-[#1E293B]'}
              `}
              end={item.path === '/'}
            >
              <item.icon className={`h-5 w-5 mr-3 flex-shrink-0`} />
              {item.name}
            </NavLink>
          ))}
          
          <div className="pt-4 mt-4 border-t border-gray-100">
            <NavLink
              to="/emergency"
              className={({ isActive }) => `
                flex items-center px-3 py-2.5 rounded-lg transition-colors group
                ${isActive 
                  ? 'bg-[#EF4444] text-white font-medium shadow-md shadow-red-500/20' 
                  : 'bg-red-50 text-[#EF4444] hover:bg-[#EF4444] hover:text-white font-medium'}
              `}
            >
              <AlertTriangle className="h-5 w-5 mr-3 flex-shrink-0 animate-pulse" />
              Emergency SOS
            </NavLink>
          </div>
        </nav>

        {/* User Profile */}
        <div className="border-t border-[#E2E8F0] p-4">
          <div className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
            <img 
              src="https://i.pravatar.cc/150?u=admin" 
              alt="Admin" 
              className="w-10 h-10 rounded-full object-cover border border-gray-200"
            />
            <div className="ml-3 flex-1 overflow-hidden">
              <p className="text-sm font-medium text-[#1E293B] truncate">Sarah Johnson</p>
              <p className="text-xs text-[#64748B] truncate">Account Admin</p>
            </div>
            <LogOut className="h-5 w-5 text-[#64748B]" />
          </div>
        </div>
      </aside>
    </>
  );
};
