import React, { useState } from 'react';
import './Navbar.css';
import logo from './logoNav2.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>

      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>Sobre</a></li>
        <li><a href="#services" onClick={() => setIsOpen(false)}>Serviços</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contato</a></li>
      </div>

      <div className={`hamburger ${isOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
