import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', formData);
      setMessage(response.data.message);
      if (response.data.success) {
        // const userType = response.data.userType;
        // navigate(`/dashboard/${userType.toLowerCase()}`); 
        navigate(`/`)
      }
    } catch (error) {
      setMessage('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow w-100"
        style={{ maxWidth: '400px' }}
      >
        <h2 className="text-center mb-4">Login</h2>

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

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>

        <div className="text-center mt-3">
          <Link to="/reset-password">Forgot Password?</Link>
        </div>

        <div className="text-center mt-3">
          New user? <Link to="/register">Register here</Link>
        </div>

        {message && (
          <div className="alert alert-info mt-3 text-center">{message}</div>
        )}

      </form>
    </div>
  );
};

export default LoginForm;
