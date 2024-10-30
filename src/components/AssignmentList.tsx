import React from 'react';
import { Assignment } from '../types';
import { Calendar, CheckCircle, Clock, XCircle } from 'lucide-react';

interface AssignmentListProps {
  assignments: Assignment[];
}

export default function AssignmentList({ assignments }: AssignmentListProps) {
  const getStatusIcon = (status: Assignment['status']) => {
    switch (status) {
      case 'graded':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'submitted':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'pending':
        return <XCircle className="h-5 w-5 text-red-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">Assignments</h2>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          New Assignment
        </button>
      </div>
      <ul className="divide-y divide-gray-200">
        {assignments.map((assignment) => (
          <li key={assignment.id} className="hover:bg-gray-50">
            <div className="px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">{assignment.title}</h3>
                <div className="mt-1 flex items-center space-x-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">
                    {assignment.subject}
                  </span>
                  <span className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    Due {new Date(assignment.dueDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                {assignment.score && (
                  <span className="text-sm font-medium text-gray-900">{assignment.score}%</span>
                )}
                {getStatusIcon(assignment.status)}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}