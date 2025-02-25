import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const NewPasswordReset = () => {
  const { userType, id } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  console.log("UserType:", userType, "ID:", id); // Debugging log

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use variables directly in the URL
      const response = await axios.post(`http://localhost:5000/new-password/${userType}/${id}`, {
        newPassword,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Reset Your Password</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label>New Password</label>
          <input
            type="password"
            className="form-control"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Reset Password</button>
      </form>
      {message && <p className="mt-3 alert alert-info">{message}</p>}
    </div>
  );
};

export default NewPasswordReset;
