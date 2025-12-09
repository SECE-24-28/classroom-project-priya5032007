import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <div className="logo-icon">▲</div>
          <span>DESIGN ART STUDIO</span>
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#home" className="nav-link active">HOME</a>
          <a href="#service" className="nav-link">SERVICE</a>
          <a href="#portfolio" className="nav-link">PORTFOLIO</a>
          <a href="#contact" className="nav-link">CONTACT US</a>
        </nav>
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;