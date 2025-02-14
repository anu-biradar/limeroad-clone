import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h3>Welcome Back!</h3>
        <p>Sign in to continue shopping</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email or Mobile Number</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter Email or Mobile Number"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter Password"
            />
          </div>

          <button type="submit" className="login-btn">Continue</button>
        </form>

        <div className="extra-links">
          <Link to="/forgot-password">Forgot Password?</Link>
          <span> | </span>
          <Link to="/signup">New User? Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
