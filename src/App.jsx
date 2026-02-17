import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './dashboard';
import AdminDashboard from './admindashboard';
import EmailVerification from './EmailVerification';
import VerificationSuccess from './VerificationSuccess';

function App() {
  const [userRole, setUserRole] = useState(null);

  const handleLogin  = (role) => setUserRole(role);
  const handleLogout = ()     => setUserRole(null);

  return (
    <BrowserRouter>
      <Routes>

        {/* Page 1: Show after signup — "Check your email" */}
        <Route path="/verify-email" element={<EmailVerification />} />

        {/* Page 2: Backend redirects here after clicking email link */}
        <Route path="/verify-success" element={<VerificationSuccess />} />

        {/* Main app */}
        <Route
          path="/*"
          element={
            !userRole ? (
              <Login onLogin={handleLogin} />
            ) : userRole === 'admin' ? (
              <AdminDashboard onLogout={handleLogout} />
            ) : (
              <Dashboard onLogout={handleLogout} />
            )
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;