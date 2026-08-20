import React from 'react';
import { Menu, Bell, Search, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Header = ({ toggleSidebar, pageTitle }) => {
  const navigate = useNavigate();

  return (
    <header className="glass-header h-16 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-20">
      <div className="flex items-center">
        <button 
          onClick={toggleSidebar}
          className="mr-4 lg:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100"
        >
          <Menu className="h-6 w-6" />
        </button>
        <h1 className="text-xl sm:text-2xl font-bold text-[#1E293B] truncate">
          {pageTitle || 'Dashboard'}
        </h1>
      </div>

      <div className="flex items-center space-x-3 sm:space-x-5">
        <div className="hidden md:flex relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-9 pr-4 py-2 bg-gray-100 border-transparent rounded-full text-sm focus:bg-white focus:ring-2 focus:ring-[#2563EB]/50 focus:border-transparent transition-all w-64"
          />
        </div>

        <button className="relative p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors">
          <Bell className="h-6 w-6" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <button 
          onClick={() => navigate('/emergency')}
          className="hidden sm:flex items-center bg-red-50 hover:bg-red-100 text-[#EF4444] px-3 py-1.5 rounded-full border border-red-200 transition-colors"
        >
          <AlertTriangle className="h-4 w-4 mr-1.5" />
          <span className="text-sm font-semibold">SOS</span>
        </button>
      </div>
    </header>
  );
};
