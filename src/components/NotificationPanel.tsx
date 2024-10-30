import React from 'react';
import { Notification } from '../types';
import { Bell } from 'lucide-react';

interface NotificationPanelProps {
  notifications: Notification[];
}

export default function NotificationPanel({ notifications }: NotificationPanelProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-4 py-3 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`px-4 py-3 ${notification.read ? 'bg-white' : 'bg-indigo-50'}`}
          >
            <div className="flex space-x-3">
              <div className="flex-shrink-0">
                <Bell className="h-5 w-5 text-indigo-600" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                <p className="text-sm text-gray-500">{notification.message}</p>
                <p className="mt-1 text-xs text-gray-400">
                  {new Date(notification.timestamp).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}