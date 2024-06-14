// src/components/DropdownMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/DropdownMenu.css';

const DropdownMenu = ({ isOpen }) => {
  return (
    <div className={`menu-container ${isOpen ? 'show' : ''}`}>
      {/* Links to different pages */}
      <Link className="menu-item" to="/">Home</Link>
      <Link className="menu-item" to="/theory">Theory</Link>
      <Link className="menu-item" to="/design">Design</Link>
      <Link className="menu-item" to="/internet-art">Internet Art</Link>
    </div>
  );
};

export default DropdownMenu;