import React from 'react';
import { Student } from '../types';
import { ChevronRight } from 'lucide-react';

interface StudentListProps {
  students: Student[];
}

export default function StudentList({ students }: StudentListProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Students</h2>
      </div>
      <ul className="divide-y divide-gray-200">
        {students.map((student) => (
          <li key={student.id} className="hover:bg-gray-50">
            <div className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full"
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                    student.name
                  )}&background=random`}
                  alt={student.name}
                />
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900">{student.name}</h3>
                  <p className="text-sm text-gray-500">{student.grade} Grade</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-8">
                  <div className="flex items-center">
                    <div className="w-48 h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-indigo-600 rounded-full"
                        style={{ width: `${student.progress}%` }}
                      />
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{student.progress}%</span>
                  </div>
                  <div className="mt-1 flex space-x-2">
                    {student.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}