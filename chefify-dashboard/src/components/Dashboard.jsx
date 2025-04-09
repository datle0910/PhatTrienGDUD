import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import dashboardIcon from '../assets/dashboard.png';
import folderIcon from '../assets/folder-management.png';
import team from '../assets/group-chat.png';
import analytic from '../assets/analytic.png';
import message from '../assets/message.png';
import intergation from '../assets/collaborate.png';
import trynow from '../assets/trynow.png';
import cart from '../assets/shopping-cart.png';
import dolas from '../assets/dollar.png';
import account from '../assets/account.png';
import search from '../assets/search.png';
import bell from '../assets/bell.png';
import help from '../assets/help.png';
import profile from '../assets/profile.png';
import pen from '../assets/pen.png';
import left from '../assets/left.png';
import next from '../assets/next.png';
import report from '../assets/report.png';

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('https://67c79f2bc19eb8753e7a30c6.mockapi.io/customers')
      .then(response => response.json())
      .then(data => setCustomers(data))
      .catch(error => console.error('Error fetching customers:', error));
  }, []);

  const renderStatus = (status) => {
    switch(status) {
      case 'New':
        return <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-600">New</span>;
      case 'In-progress':
        return <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-600">In-progress</span>;
      case 'Completed':
        return <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-600">Completed</span>;
      default:
        return <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">{status}</span>;
    }
  }

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
            <a href="#" className="grid grid-cols-[auto_1fr] items-center px-3 py-2 bg-pink-500 text-white rounded-md">
              <span className="mr-3">
                <img src={dashboardIcon} alt="Dashboard" className="w-[20px]" />
              </span>
              <span>Dashboard</span>
            </a>
            <a href="#" className="grid grid-cols-[auto_1fr] items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
              <span className="mr-3">
                <img src={folderIcon} alt="Projects" className="w-[20px]"/>
              </span>
              <span>Projects</span>
            </a>
            <a href="#" className="grid grid-cols-[auto_1fr] items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
              <span className="mr-3">
                <img src={team} alt="Teams" className="w-[20px]" />
              </span>
              <span>Teams</span>
            </a>
            <a href="#" className="grid grid-cols-[auto_1fr] items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
              <span className="mr-3">
                <img src={analytic} alt="Analytics" className="w-[20px]"/>
              </span>
              <span>Analytics</span>
            </a>
            <a href="#" className="grid grid-cols-[auto_1fr] items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
              <span className="mr-3">
                <img src={message} alt="Messages" className="w-[20px]"/>
              </span>
              <span>Messages</span>
            </a>
            <a href="#" className="grid grid-cols-[auto_1fr] items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
              <span className="mr-3">
                <img src={intergation} alt="Integrations" className="w-[20px]"/>
              </span>
              <span>Integrations</span>
            </a>
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
            <h1 className="text-2xl font-bold text-pink-500">Dashboard</h1>
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
        
        {/* Main content */}
        <main className="overflow-y-auto p-6 bg-gray-50">
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Overview</h2>
            
            {/* Stats cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Turnover card */}
              <div className="bg-pink-50 p-6 rounded-lg border border-pink-100">
                <div className="grid grid-cols-[1fr_auto] items-start">
                  <div className="grid gap-2">
                    <h3 className="text-gray-600 font-medium">Turnover</h3>
                    <p className="text-3xl font-bold">$92,405</p>
                    <div className="flex items-center text-green-600 text-sm">
                      <span>↑ 5.39%</span>
                      <span className="ml-1 text-gray-500">period of change</span>
                    </div>
                  </div>
                  <button className="p-2 rounded-full text-pink-500 hover:bg-pink-100">
                    <img src={cart} alt="Bar Chart" className="w-[20px]" />
                  </button>
                </div>
              </div>
              
              {/* Profit card */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <div className="grid grid-cols-[1fr_auto] items-start">
                  <div className="grid gap-2">
                    <h3 className="text-gray-600 font-medium">Profit</h3>
                    <p className="text-3xl font-bold">$32,218</p>
                    <div className="flex items-center text-green-600 text-sm">
                      <span>↑ 5.39%</span>
                      <span className="ml-1 text-gray-500">period of change</span>
                    </div>
                  </div>
                  <button className="p-2 rounded-full text-blue-500 hover:bg-blue-100">
                    <img src={dolas} alt="Bar Chart" className="w-[20px]" />
                  </button>
                </div>
              </div>
              
              {/* New customer card */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <div className="grid grid-cols-[1fr_auto] items-start">
                  <div className="grid gap-2">
                    <h3 className="text-gray-600 font-medium">New customer</h3>
                    <p className="text-3xl font-bold">298</p>
                    <div className="flex items-center text-green-600 text-sm">
                      <span>↑ 6.84%</span>
                      <span className="ml-1 text-gray-500">period of change</span>
                    </div>
                  </div>
                  <button className="p-2 rounded-full text-blue-500 hover:bg-blue-100">
                    <img src={account} alt="Bar Chart" className="w-[20px]" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Detailed report */}
            <div className="bg-white rounded-lg border border-gray-200 mt-8 grid grid-rows-[auto_1fr_auto]">
              <div className="grid grid-cols-[1fr_auto] items-center p-4 border-b border-gray-200">
                <h3 className="font-medium text-gray-700 flex items-center">
                  <span className="mr-2 text-pink-500">
                    <img src={report} alt="Bar Chart" />
                  </span>
                  Detailed report
                </h3>
                <div className="grid grid-flow-col gap-2">
                  <button className="px-4 py-2 border border-pink-200 text-pink-500 rounded-md hover:bg-pink-50 flex items-center">
                    <span>Import</span>
                  </button>
                  <button className="px-4 py-2 border border-pink-200 text-pink-500 rounded-md hover:bg-pink-50 flex items-center">
                    <span>Export</span>
                  </button>
                </div>
              </div>
              
              {/* Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="w-12 px-4 py-3">
                        <input type="checkbox" className="rounded text-blue-500" />
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer Name
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Company
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Order Value
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Order Date
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="relative px-4 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {customers.map((customer) => (
                      <tr key={customer.id} className="hover:bg-gray-50">
                        <td className="px-4 py-4 whitespace-nowrap">
                          <input type="checkbox" className="rounded text-blue-500" />
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                              <img src={profile} alt="User" className="w-[20px]"/>
                            </div>  
                            <div>
                              <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{customer.company}</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{customer.value}</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{customer.date}</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          {renderStatus(customer.status)}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-gray-400 hover:text-gray-900">
                            <img src={pen} alt="Edit" className="w-[20px]" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Pagination */}
              <div className="px-4 py-3 grid grid-cols-[auto_1fr] items-center border-t border-gray-200">
                <div className="text-sm text-gray-500">
                  63 results
                </div>
                <div className="grid grid-flow-col justify-end gap-1">
                  <button className="px-2 py-1 rounded-md bg-gray-200 text-gray-700">
                    <img src={left} alt="Previous" className="w-[20px]"/>
                  </button>
                  <button className="px-3 py-1 rounded-md bg-pink-500 text-white">
                    1
                  </button>
                  <button className="px-3 py-1 rounded-md hover:bg-gray-100">
                    2
                  </button>
                  <button className="px-3 py-1 rounded-md hover:bg-gray-100">
                    3
                  </button>
                  <button className="px-3 py-1 rounded-md hover:bg-gray-100">
                    4
                  </button>
                  <span className="px-3 py-1">...</span>
                  <button className="px-3 py-1 rounded-md hover:bg-gray-100">
                    10
                  </button>
                  <button className="px-3 py-1 rounded-md hover:bg-gray-100">
                    11
                  </button>
                  <button className="px-2 py-1 rounded-md hover:bg-gray-100">
                    <img src={next} alt="Next" className="w-[20px]"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;