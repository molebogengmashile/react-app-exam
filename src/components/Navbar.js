// src/components/Navbar.js
import React, { useState } from 'react';
import '../styles/Navbar.css';
import DropdownMenu from './DropdownMenu';

const Navbar = () => {
  // State to control the visibility of the dropdown menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the dropdown menu
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      {/* Logo */}
      <div className="logo">Internet Art</div>
      {/* Menu button to toggle the dropdown */}
      <button className="menu-button" onClick={toggleDropdown}>
        {isOpen ? (
          <span className="menu-icon">&#x2715;</span> // X icon
        ) : (
          <span className="menu-icon">&#9776;</span> // Hamburger menu icon
        )}
      </button>
      {/* Conditional rendering of the dropdown menu */}
      <DropdownMenu isOpen={isOpen} />
    </div>
  );
};

export default Navbar;