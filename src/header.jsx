import React from 'react';
import './index.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">About</a>
        <a href="#" className="nav-link">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
