// src/pages/AdminLoginPage.jsx
import React from 'react';
import AdminLogin from '../components/admin/AdminLogin';

const Adminpage = () => {
  const handleLogin = (username, password) => {
    // Handle login logic (e.g., send login request to backend)
    console.log('Logging in with:', username, password);
    // Replace with actual API call using fetch or Axios
    // Example: fetch('/api/admin/login', { method: 'POST', body: JSON.stringify({ username, password }), headers: { 'Content-Type': 'application/json' } })
  };

  return (
    <div>
      <h1>Admin Login</h1>
      <AdminLogin handleLogin={handleLogin} />
    </div>
  );
};

export default AdminPage;
