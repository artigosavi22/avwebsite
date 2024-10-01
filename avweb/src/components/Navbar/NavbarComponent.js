import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="logo-section">
            {/* <h1 className="logo-text">AV COMPTERS</h1> */}
            <img src='logoav.jpg' alt="AV Computers Logo" className="logo-image" />
          </div>
          <div className="menu-links">
            <div className="nav-links">
              <a href="/home" className="nav-link">Home</a>
              <a href="/about" className="nav-link">About</a>
              <a href="/services" className="nav-link">Services</a>
              <a href="/contact" className="nav-link">Contact</a>
            </div>
          </div>
          <div className="menu-toggle">
            <button onClick={toggleMenu} className="hamburger-button">
              <svg className="hamburger-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="/home" className="mobile-nav-link">Home</a>
          <a href="/about" className="mobile-nav-link">About</a>
          <a href="/services" className="mobile-nav-link">Services</a>
          <a href="/contact" className="mobile-nav-link">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
