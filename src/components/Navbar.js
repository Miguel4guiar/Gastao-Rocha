import React from 'react';
import './Navbar.css';
import logo from './logoNav2.png';


function Navbar() {
  return (
 <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#contact">contato</a></li>
        </ul>
      </nav>
  );
}
export default Navbar;