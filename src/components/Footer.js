import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">Sobre</a>
          <a href="#services">Serviços</a>
          <a href="#contact">Contato</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;