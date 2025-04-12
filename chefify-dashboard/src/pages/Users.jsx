// File: /pages/Users.jsx
import { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';

const Users = () => {
  // State management
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'User',
    status: 'Active'
  });

  // Fetch users on component mount
  useEffect(() => {
    // For demo purposes, using mock data
    // In a real app, you'd fetch from your API
    const mockUsers = [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', lastLogin: '2025-04-10' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', lastLogin: '2025-04-08' },
      { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Manager', status: 'Inactive', lastLogin: '2025-03-22' },
      { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', role: 'User', status: 'Active', lastLogin: '2025-04-11' },
      { id: 5, name: 'David Brown', email: 'david@example.com', role: 'User', status: 'Pending', lastLogin: null },
    ];
    
    setUsers(mockUsers);
    setLoading(false);
  }, []);

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (currentUser) {
      // Edit existing user
      const updatedUsers = users.map(user => 
        user.id === currentUser.id ? { ...user, ...formData } : user
      );
      setUsers(updatedUsers);
    } else {
      // Add new user
      const newUser = {
        id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
        ...formData,
        lastLogin: null
      };
      setUsers([...users, newUser]);
    }
    
    // Close modal and reset form
    closeModal();
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status
    });
    setIsModalOpen(true);
  };

  const handleDelete = (user) => {
    setCurrentUser(user);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    const updatedUsers = users.filter(user => user.id !== currentUser.id);
    setUsers(updatedUsers);
    setIsDeleteModalOpen(false);
    setCurrentUser(null);
  };

  const openAddModal = () => {
    setCurrentUser(null);
    setFormData({
      name: '',
      email: '',
      role: 'User',
      status: 'Active'
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentUser(null);
    setFormData({
      name: '',
      email: '',
      role: 'User',
      status: 'Active'
    });
  };

  // Define table columns
  const columns = [
    { 
      header: 'Name', 
      accessor: 'name',
      cell: (row) => (
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
            {row.name.charAt(0).toUpperCase()}
          </div>
          <span className="font-medium text-gray-900">{row.name}</span>
        </div>
      )
    },
    { 
      header: 'Email', 
      accessor: 'email' 
    },
    { 
      header: 'Role', 
      accessor: 'role',
      cell: (row) => {
        let bgColor = 'bg-gray-100 text-gray-800';
        if (row.role === 'Admin') bgColor = 'bg-purple-100 text-purple-800';
        if (row.role === 'Manager') bgColor = 'bg-blue-100 text-blue-800';
        
        return (
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${bgColor}`}>
            {row.role}
          </span>
        );
      }
    },
    { 
      header: 'Status', 
      accessor: 'status',
      cell: (row) => {
        let bgColor = 'bg-green-100 text-green-800';
        if (row.status === 'Inactive') bgColor = 'bg-gray-100 text-gray-800';
        if (row.status === 'Pending') bgColor = 'bg-yellow-100 text-yellow-800';
        
        return (
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${bgColor}`}>
            {row.status}
          </span>
        );
      }
    },
    { 
      header: 'Last Login', 
      accessor: 'lastLogin',
      cell: (row) => {
        if (!row.lastLogin) return <span className="text-gray-400">Never</span>;
        
        const date = new Date(row.lastLogin);
        return date.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric' 
        });
      }
    },
    {
      header: 'Actions',
      accessor: 'actions',
      cell: (row) => (
        <div className="flex space-x-2">
          <button 
            className="p-1 text-blue-600 hover:text-blue-800"
            onClick={() => handleEdit(row)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
          <button 
            className="p-1 text-red-600 hover:text-red-800"
            onClick={() => handleDelete(row)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">User Management</h2>
          <p className="text-gray-500">View and manage system users</p>
        </div>
        <button 
          className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
          onClick={openAddModal}
        >
          + Add User
        </button>
      </div>
      
      {loading ? (
        <div className="flex justify-center p-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
        </div>
      ) : (
        <DataTable 
          data={users} 
          columns={columns} 
          pageSize={10}
        />
      )}
      
      {/* Add/Edit User Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md mx-4 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">
                {currentUser ? 'Edit User' : 'Add New User'}
              </h3>
              <button 
                className="text-gray-400 hover:text-gray-600"
                onClick={closeModal}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Enter full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Enter email address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Role
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    <option value="User">User</option>
                    <option value="Manager">Manager</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Pending">Pending</option>
                  </select>
                </div>
              </div>
              
              <div className="px-6 py-4 bg-gray-50 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
                >
                  {currentUser ? 'Update User' : 'Add User'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md mx-4 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Confirm Deletion</h3>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700">
                Are you sure you want to delete the user <span className="font-medium">{currentUser.name}</span>? 
                This action cannot be undone.
              </p>
            </div>
            
            <div className="px-6 py-4 bg-gray-50 flex justify-end space-x-2">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;