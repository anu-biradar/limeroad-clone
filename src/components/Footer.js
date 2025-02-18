import React from "react";
// import { Link } from "react-router-dom"; // Import Link for navigation
import "../styles/Footer.css"; // Ensure you have a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Limeroad.com . All rights reserved.</p>
        <div className="footer-links">
        </div>
      </div>
    </footer>
  );
};

export default Footer;
