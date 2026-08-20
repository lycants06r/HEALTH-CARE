import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { Dashboard } from './pages/Dashboard';
import { Profiles } from './pages/Profiles';
import { Monitoring } from './pages/Monitoring';
import { Medications } from './pages/Medications';
import { Appointments } from './pages/Appointments';
import { Records } from './pages/Records';
import { Chatbot } from './pages/Chatbot';
import { Emergency } from './pages/Emergency';
import { Reports } from './pages/Reports';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profiles" element={<Profiles />} />
          <Route path="monitoring" element={<Monitoring />} />
          <Route path="medications" element={<Medications />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="records" element={<Records />} />
          <Route path="chat" element={<Chatbot />} />
          <Route path="emergency" element={<Emergency />} />
          <Route path="reports" element={<Reports />} />
          <Route path="*" element={<div className="text-center py-20 text-gray-500">Page not found or under construction.</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
