import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    userType: 'Customer',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = `http://localhost:5000/register/${formData.userType.toLowerCase()}`;
      const response = await axios.post(endpoint, formData);
      setMessage(response.data.message);
      setFormData({ name: '', email: '', password: '', userType: 'Customer' });
    } catch (error) {
      setMessage('Error registering user. Please try again.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow w-100"
        style={{ maxWidth: '400px' }}
      >
        <h2 className="text-center mb-4">Register</h2>

        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">User Type</label>
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            className="form-select"
          >
            <option value="Customer">Customer</option>
            <option value="Vendor">Vendor</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>

        {message && (
          <div className="alert alert-info mt-3 text-center">{message}</div>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
