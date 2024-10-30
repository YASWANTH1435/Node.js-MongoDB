export interface Student {
  id: string;
  name: string;
  subjects: string[];
  grade: string;
  lastActive: string;
  progress: number;
}

export interface Assignment {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
  score?: number;
}

export interface StudentDetails extends Student {
  assignments: Assignment[];
  performanceData: {
    subject: string;
    score: number;
  }[];
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'assignment' | 'feedback' | 'reminder';
  timestamp: string;
  read: boolean;
}