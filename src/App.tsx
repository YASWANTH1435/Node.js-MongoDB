import { useState } from 'react';
import Dashboard from './components/Dashboard';
import StudentProfileForm from './components/StudentProfileForm';

function App() {
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'profile'>('dashboard');

  return currentPage === 'dashboard' ? (
    <Dashboard onAddStudent={() => setCurrentPage('profile')} />
  ) : (
    <StudentProfileForm onBack={() => setCurrentPage('dashboard')} />
  );
}

export default App;