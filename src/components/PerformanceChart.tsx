import React from 'react';
import { BarChart as Chart, ArrowUp, ArrowDown } from 'lucide-react';

export default function PerformanceChart() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Performance Analytics</h2>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-indigo-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-indigo-900">Average Score</h3>
              <ArrowUp className="h-4 w-4 text-green-500" />
            </div>
            <p className="mt-2 text-2xl font-semibold text-indigo-900">85%</p>
            <p className="mt-1 text-sm text-indigo-700">+5% from last month</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-green-900">Completion Rate</h3>
              <ArrowUp className="h-4 w-4 text-green-500" />
            </div>
            <p className="mt-2 text-2xl font-semibold text-green-900">92%</p>
            <p className="mt-1 text-sm text-green-700">+2% from last month</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-yellow-900">Areas Needing Focus</h3>
              <ArrowDown className="h-4 w-4 text-red-500" />
            </div>
            <p className="mt-2 text-2xl font-semibold text-yellow-900">3</p>
            <p className="mt-1 text-sm text-yellow-700">-1 from last month</p>
          </div>
        </div>
        
        <div className="mt-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-center text-gray-500">
              <Chart className="h-12 w-12 mx-auto text-gray-400" />
              <p className="mt-2">Detailed analytics visualization would go here</p>
              <p className="text-sm">Connect to a backend to show real data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}