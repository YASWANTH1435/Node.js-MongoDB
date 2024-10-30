import React, { useState } from 'react';
import { Users, BookOpen, Bell, BarChart, UserPlus } from 'lucide-react';
import { mockStudents, mockAssignments, mockNotifications } from '../data';
import StudentList from './StudentList';
import AssignmentList from './AssignmentList';
import NotificationPanel from './NotificationPanel';
import PerformanceChart from './PerformanceChart';

interface DashboardProps {
  onAddStudent: () => void;
}

export default function Dashboard({ onAddStudent }: DashboardProps) {
  const [activeTab, setActiveTab] = useState('students');

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <BookOpen className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">TutorTrack</span>
              </div>
            </div>
            <div className="flex items-center">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Bell className="h-6 w-6 text-gray-500" />
              </button>
              <div className="ml-4 relative flex items-center">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('students')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'students'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Users className="h-5 w-5 mr-2" />
            Students
          </button>
          <button
            onClick={() => setActiveTab('assignments')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'assignments'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <BookOpen className="h-5 w-5 mr-2" />
            Assignments
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'analytics'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <BarChart className="h-5 w-5 mr-2" />
            Analytics
          </button>
          <button
            onClick={onAddStudent}
            className="flex items-center px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 ml-auto"
          >
            <UserPlus className="h-5 w-5 mr-2" />
            Add Student
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            {activeTab === 'students' && <StudentList students={mockStudents} />}
            {activeTab === 'assignments' && <AssignmentList assignments={mockAssignments} />}
            {activeTab === 'analytics' && <PerformanceChart />}
          </div>
          <div className="lg:col-span-1">
            <NotificationPanel notifications={mockNotifications} />
          </div>
        </div>
      </div>
    </div>
  );
}