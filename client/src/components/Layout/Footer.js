import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
      <h1 className="text-center" style={{ fontFamily: 'Arial', fontSize: '1.5em', fontWeight: 'bold', color: '#333' }}>
        All Rights Reserved. &copy; Ketaki Nikure
      </h1>
      <p className="text-center mt-3" style={{ color: '#555' }}>
        <Link to="/about" style={{ textDecoration: 'none', color: '#007bff', margin: '0 5px' }}>About</Link> |
        <Link to="/contact" style={{ textDecoration: 'none', color: '#007bff', margin: '0 5px' }}>Contact</Link> |
        <Link to="/policy" style={{ textDecoration: 'none', color: '#007bff', margin: '0 5px' }}>Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;


