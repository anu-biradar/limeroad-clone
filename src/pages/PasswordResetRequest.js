import React, { useState } from 'react';
import axios from 'axios';

const PasswordResetRequest = () => {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('customer');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/reset-password', {
        email,
        userType,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Password Reset Request</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>User Type</label>
          <select
            className="form-control"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="customer">Customer</option>
            <option value="vendor">Vendor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Send Reset Link</button>
      </form>
      {message && <p className="mt-3 alert alert-info">{message}</p>}
    </div>
  );
};

export default PasswordResetRequest;