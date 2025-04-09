// File: /layouts/RootLayout.js
import { useState } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import dashboardIcon from '../assets/dashboard.png';
import folderIcon from '../assets/folder-management.png';
import team from '../assets/group-chat.png';
import analytic from '../assets/analytic.png';
import message from '../assets/message.png';
import intergation from '../assets/collaborate.png';
import trynow from '../assets/trynow.png';
import search from '../assets/search.png';
import bell from '../assets/bell.png';
import help from '../assets/help.png';
import profile from '../assets/profile.png';

const RootLayout = () => {
  const location = useLocation();
  
  // Determine current page title based on path
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/') return 'Dashboard';
    if (path === '/projects') return 'Projects';
    if (path === '/teams') return 'Teams';
    if (path === '/analytics') return 'Analytics';
    if (path === '/messages') return 'Messages';
    if (path === '/integrations') return 'Integrations';
    return 'Dashboard';
  };

  return (
    <div className="grid grid-cols-[256px_1fr] h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="bg-white border-r border-gray-200 grid grid-rows-[auto_1fr_auto]">
        <div className="px-6 py-4 border-b">
          <div className="grid grid-cols-[auto_1fr] items-center gap-2">
            <div className="w-8 h-8 rounded-md flex items-center justify-center">
              <img src={logo} alt="" />
            </div>
            <span className="font-semibold text-gray-700">Logo</span>
          </div>
        </div>
        
        <div className="px-3 py-4">
          <div className="grid gap-1">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => 
                `grid grid-cols-[auto_1fr] items-center px-3 py-2 rounded-md ${
                  isActive ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <span className="mr-3">
                <img src={dashboardIcon} alt="Dashboard" className="w-[20px]" />
              </span>
              <span>Dashboard</span>
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `grid grid-cols-[auto_1fr] items-center px-3 py-2 rounded-md ${
                  isActive ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <span className="mr-3">
                <img src={folderIcon} alt="Projects" className="w-[20px]"/>
              </span>
              <span>Projects</span>
            </NavLink>
            <NavLink 
              to="/teams" 
              className={({ isActive }) => 
                `grid grid-cols-[auto_1fr] items-center px-3 py-2 rounded-md ${
                  isActive ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <span className="mr-3">
                <img src={team} alt="Teams" className="w-[20px]" />
              </span>
              <span>Teams</span>
            </NavLink>
            <NavLink 
              to="/analytics" 
              className={({ isActive }) => 
                `grid grid-cols-[auto_1fr] items-center px-3 py-2 rounded-md ${
                  isActive ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <span className="mr-3">
                <img src={analytic} alt="Analytics" className="w-[20px]"/>
              </span>
              <span>Analytics</span>
            </NavLink>
            <NavLink 
              to="/messages" 
              className={({ isActive }) => 
                `grid grid-cols-[auto_1fr] items-center px-3 py-2 rounded-md ${
                  isActive ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <span className="mr-3">
                <img src={message} alt="Messages" className="w-[20px]"/>
              </span>
              <span>Messages</span>
            </NavLink>
            <NavLink 
              to="/integrations" 
              className={({ isActive }) => 
                `grid grid-cols-[auto_1fr] items-center px-3 py-2 rounded-md ${
                  isActive ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <span className="mr-3">
                <img src={intergation} alt="Integrations" className="w-[20px]"/>
              </span>
              <span>Integrations</span>
            </NavLink>
          </div>
        </div>
        
        <div className="px-6 py-4">
          <div className="p-4 bg-blue-50 rounded-lg grid gap-3">
            <div>
              <img src={trynow} alt="Upgrade illustration" className="w-full" />
            </div>
            <h3 className="font-medium text-gray-800">V2.0 is available</h3>
            <div>
              <button className="w-full px-4 py-2 text-sm text-blue-600 bg-white border border-blue-300 rounded-lg hover:bg-blue-50">
                Try now
              </button>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500 flex items-center">
            Made with 
            <span className="mx-1 text-blue-600 font-semibold">Visily</span>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="grid grid-rows-[auto_1fr] overflow-hidden">
        {/* Top header */}
        <header className="bg-white border-b border-gray-200">
          <div className="grid grid-cols-[1fr_auto] items-center px-4 py-4 gap-4">
            <h1 className="text-2xl font-bold text-pink-500">{getPageTitle()}</h1>
            <div className="grid grid-flow-col items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <img src={search} alt="Search" className="w-[20px]" />
                </div>
              </div>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <img src={bell} alt="Notifications" className="w-[20px]"/>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <img src={help} alt="Help" className="w-[20px]"/>
              </button>
              <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <img src={profile} alt="User" className="w-[20px]" />
              </button>
            </div>
          </div>
        </header>
        
        {/* Page content - Outlet for rendering child routes */}
        <main className="overflow-y-auto bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;











