import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about-me" className="nav-link">About Me</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
      </nav>
    </header>
  );
}

export default Header;
