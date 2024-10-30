import { Student, Assignment, Notification } from './types';

export const mockStudents: Student[] = [
  {
    id: '1',
    name: 'Emma Thompson',
    subjects: ['Mathematics', 'Physics', 'Chemistry'],
    grade: '11th',
    lastActive: '2024-03-10',
    progress: 78,
  },
  {
    id: '2',
    name: 'James Wilson',
    subjects: ['Biology', 'Chemistry'],
    grade: '10th',
    lastActive: '2024-03-11',
    progress: 85,
  },
  {
    id: '3',
    name: 'Sophia Chen',
    subjects: ['Mathematics', 'Physics'],
    grade: '12th',
    lastActive: '2024-03-11',
    progress: 92,
  },
];

export const mockAssignments: Assignment[] = [
  {
    id: '1',
    title: 'Quadratic Equations Practice',
    subject: 'Mathematics',
    dueDate: '2024-03-15',
    status: 'pending',
  },
  {
    id: '2',
    title: 'Chemical Reactions Lab Report',
    subject: 'Chemistry',
    dueDate: '2024-03-14',
    status: 'submitted',
  },
  {
    id: '3',
    title: 'Physics Motion Problems',
    subject: 'Physics',
    dueDate: '2024-03-13',
    status: 'graded',
    score: 92,
  },
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'New Assignment Submission',
    message: 'Emma Thompson has submitted the Physics assignment',
    type: 'assignment',
    timestamp: '2024-03-11T14:30:00',
    read: false,
  },
  {
    id: '2',
    title: 'Feedback Required',
    message: 'James Wilson\'s Chemistry report needs review',
    type: 'feedback',
    timestamp: '2024-03-11T10:15:00',
    read: true,
  },
];