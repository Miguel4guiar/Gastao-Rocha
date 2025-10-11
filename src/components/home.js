import React, { useEffect } from 'react';
import './home.css';

function Home() {
  // Ajusta o cálculo da altura visível no mobile
  useEffect(() => {
    const ajustarAlturaVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    ajustarAlturaVH();
    window.addEventListener('resize', ajustarAlturaVH);

    return () => {
      window.removeEventListener('resize', ajustarAlturaVH);
    };
  }, []);

  return (
    <div className="home" id="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Gastão & Rocha</h1>
          <p className="subtitle">
            Advocacia de excelência em Direito Civil, Trabalhista e Empresarial
          </p>
          <div className="divider" />
          <p className="tagline">
            Ética, transparência e dedicação em cada caso.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
