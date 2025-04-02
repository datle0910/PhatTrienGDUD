import { useState } from 'react';

const Dashboard = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Elizabeth Lee', company: 'AvatarSystems', value: '$359', date: '10/07/2023', status: 'New' },
    { id: 2, name: 'Carlos Garcia', company: 'SmoozeShift', value: '$747', date: '24/07/2023', status: 'New' },
    { id: 3, name: 'Elizabeth Bailey', company: 'Prime Time Telecom', value: '$564', date: '08/08/2023', status: 'In-progress' },
    { id: 4, name: 'Ryan Brown', company: 'OmniTech Corporation', value: '$541', date: '31/08/2023', status: 'In-progress' },
    { id: 5, name: 'Ryan Young', company: 'DataStream Inc.', value: '$769', date: '01/05/2023', status: 'Completed' },
    { id: 6, name: 'Hailey Adams', company: 'FlowRush', value: '$922', date: '10/06/2023', status: 'Completed' },
  ]);

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
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="flex items-center px-6 py-4 border-b">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-md flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold">
              <span>L</span>
            </div>
            <span className="ml-2 font-semibold text-gray-700">Logo</span>
          </div>
        </div>
        
        <div className="px-3 py-4">
          <div className="space-y-1">
            <a href="#" className="flex items-center px-3 py-2 bg-pink-500 text-white rounded-md">
              <span className="mr-3">
                <img src="/file/BarChart2" alt="Dashboard" />
              </span>
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
              <span className="mr-3">
                <img src="/file/FileText" alt="Projects" />
              </span>
              <span>Projects</span>
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
              <span className="mr-3">
                <img src="/file/Users" alt="Teams" />
              </span>
              <span>Teams</span>
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
              <span className="mr-3">
                <img src="/file/BarChart2" alt="Analytics" />
              </span>
              <span>Analytics</span>
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
              <span className="mr-3">
                <img src="/file/MessageSquare" alt="Messages" />
              </span>
              <span>Messages</span>
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
              <span className="mr-3">
                <img src="/file/Layers" alt="Integrations" />
              </span>
              <span>Integrations</span>
            </a>
          </div>
        </div>
        
        <div className="mt-auto px-6 py-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="mb-3">
              <img src="/api/placeholder/400/200" alt="Upgrade illustration" className="w-full" />
            </div>
            <h3 className="font-medium text-gray-800">V2.0 is available</h3>
            <div className="mt-3">
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
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex items-center justify-between px-4 py-4">
            <h1 className="text-2xl font-bold text-pink-500">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <img src="/file/Search" alt="Search" />
                </div>
              </div>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <img src="/file/Bell" alt="Notifications" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <img src="/file/HelpCircle" alt="Help" />
              </button>
              <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <img src="/file/User" alt="User" />
              </button>
            </div>
          </div>
        </header>
        
        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Overview</h2>
            
            {/* Stats cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Turnover card */}
              <div className="bg-pink-50 p-6 rounded-lg border border-pink-100">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-gray-600 font-medium">Turnover</h3>
                    <p className="text-3xl font-bold mt-2">$92,405</p>
                    <div className="flex items-center mt-2 text-green-600 text-sm">
                      <span>↑ 5.39%</span>
                      <span className="ml-1 text-gray-500">period of change</span>
                    </div>
                  </div>
                  <button className="p-2 rounded-full text-pink-500 hover:bg-pink-100">
                    <img src="/file/BarChart2" alt="Bar Chart" />
                  </button>
                </div>
              </div>
              
              {/* Profit card */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-gray-600 font-medium">Profit</h3>
                    <p className="text-3xl font-bold mt-2">$32,218</p>
                    <div className="flex items-center mt-2 text-green-600 text-sm">
                      <span>↑ 5.39%</span>
                      <span className="ml-1 text-gray-500">period of change</span>
                    </div>
                  </div>
                  <button className="p-2 rounded-full text-blue-500 hover:bg-blue-100">
                    <img src="/file/BarChart2" alt="Bar Chart" />
                  </button>
                </div>
              </div>
              
              {/* New customer card */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-gray-600 font-medium">New customer</h3>
                    <p className="text-3xl font-bold mt-2">298</p>
                    <div className="flex items-center mt-2 text-green-600 text-sm">
                      <span>↑ 6.84%</span>
                      <span className="ml-1 text-gray-500">period of change</span>
                    </div>
                  </div>
                  <button className="p-2 rounded-full text-blue-500 hover:bg-blue-100">
                    <img src="/file/BarChart2" alt="Bar Chart" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Detailed report */}
            <div className="bg-white rounded-lg border border-gray-200 mt-8">
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <h3 className="font-medium text-gray-700 flex items-center">
                  <span className="mr-2 text-pink-500">
                    <img src="/file/BarChart2" alt="Bar Chart" />
                  </span>
                  Detailed report
                </h3>
                <div className="flex space-x-2">
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
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                              <img src="/file/User" alt="User" />
                            </div>
                            <div className="ml-4">
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
                            <img src="/file/Edit" alt="Edit" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Pagination */}
              <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200">
                <div className="text-sm text-gray-500">
                  63 results
                </div>
                <div className="flex space-x-1">
                  <button className="px-2 py-1 rounded-md bg-gray-200 text-gray-700">
                    <img src="/file/ChevronLeft" alt="Previous" />
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
                    <img src="/file/ChevronRight" alt="Next" />
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