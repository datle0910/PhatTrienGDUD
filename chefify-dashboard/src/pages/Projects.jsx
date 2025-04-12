// File: /pages/Projects.js
import { useState } from 'react';
import DataTable from '../components/DataTable';

const Projects = () => {
  // Sample project data
  const projectsData = [
    { id: 1, name: "Website Redesign", status: "In Progress", team: "Design", progress: 75, dueDate: "2025-04-25" },
    { id: 2, name: "Mobile App Development", status: "Planning", team: "Development", progress: 20, dueDate: "2025-06-15" },
    { id: 3, name: "Marketing Campaign", status: "Completed", team: "Marketing", progress: 100, dueDate: "2025-03-30" },
    { id: 4, name: "User Research", status: "In Progress", team: "Research", progress: 60, dueDate: "2025-05-10" },
    { id: 5, name: "Database Migration", status: "On Hold", team: "Development", progress: 45, dueDate: "2025-05-22" },
    { id: 6, name: "UI Component Library", status: "In Progress", team: "Design", progress: 30, dueDate: "2025-07-05" },
    { id: 7, name: "Content Strategy", status: "Planning", team: "Content", progress: 15, dueDate: "2025-06-01" },
    { id: 8, name: "SEO Optimization", status: "Completed", team: "Marketing", progress: 100, dueDate: "2025-04-05" },
    { id: 9, name: "Integration Testing", status: "In Progress", team: "QA", progress: 85, dueDate: "2025-04-20" },
    { id: 10, name: "Payment Gateway", status: "On Hold", team: "Development", progress: 50, dueDate: "2025-06-30" },
    { id: 11, name: "Analytics Dashboard", status: "Planning", team: "Data", progress: 10, dueDate: "2025-07-15" },
    { id: 12, name: "Security Audit", status: "In Progress", team: "Security", progress: 40, dueDate: "2025-05-18" },
    { id: 13, name: "Cloud Migration", status: "Planning", team: "DevOps", progress: 25, dueDate: "2025-08-01" },
    { id: 14, name: "Email Templates", status: "Completed", team: "Design", progress: 100, dueDate: "2025-04-10" },
    { id: 15, name: "Customer Onboarding", status: "In Progress", team: "Success", progress: 70, dueDate: "2025-05-05" }
  ];

  // Define table columns
  const columns = [
    { 
      header: "ID", 
      accessor: "id" 
    },
    { 
      header: "Project Name", 
      accessor: "name",
      cell: (row) => (
        <span className="font-medium text-gray-900">{row.name}</span>
      )
    },
    { 
      header: "Status", 
      accessor: "status",
      cell: (row) => {
        let bgColor = "bg-gray-100 text-gray-800";
        if (row.status === "Completed") bgColor = "bg-green-100 text-green-800";
        if (row.status === "In Progress") bgColor = "bg-blue-100 text-blue-800";
        if (row.status === "Planning") bgColor = "bg-yellow-100 text-yellow-800";
        if (row.status === "On Hold") bgColor = "bg-red-100 text-red-800";
        
        return (
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${bgColor}`}>
            {row.status}
          </span>
        );
      }
    },
    { 
      header: "Team", 
      accessor: "team" 
    },
    { 
      header: "Progress", 
      accessor: "progress",
      cell: (row) => (
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-pink-500 h-2.5 rounded-full" 
            style={{ width: `${row.progress}%` }}
          ></div>
        </div>
      )
    },
    { 
      header: "Due Date", 
      accessor: "dueDate",
      cell: (row) => {
        const date = new Date(row.dueDate);
        return date.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric' 
        });
      }
    },
    {
      header: "Actions",
      accessor: "actions",
      cell: (row) => (
        <div className="flex space-x-2">
          <button className="p-1 text-blue-600 hover:text-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
          <button className="p-1 text-red-600 hover:text-red-800">
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
          <h2 className="text-xl font-semibold text-gray-800">Project Management</h2>
          <p className="text-gray-500">View and manage all your projects</p>
        </div>
        <button className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600">
          + New Project
        </button>
      </div>
      
      <DataTable 
        data={projectsData} 
        columns={columns} 
        pageSize={8}
      />
    </div>
  );
};

export default Projects;