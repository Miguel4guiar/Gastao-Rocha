import React, { useEffect } from 'react';
import './home.css';
import { Helmet } from 'react-helmet';
import logoImage from '../components/logoNav.jpeg';
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
         
         <Helmet>
           <title>Gastão & Rocha Advocacia - Soluções Jurídicas</title>
           <meta
          name="description"
          content="Gastão & Rocha Advocacia oferece serviços jurídicos especializados em direito civil, trabalhista e empresarial, com atendimento personalizado e soluções eficientes para você."
        />
        <meta
          name="keywords"
          content="advocacia, escritório de advocacia, direito civil, direito trabalhista, direito empresarial, Gastão & Rocha, serviços jurídicos, advogado, consultoria jurídica"
        />
        <meta name="author" content="Miguel Aguiar" />

         <meta property="og:title" content="Gastão & Rocha Advocacia" />
        <meta property="og:description" content="Entre em contato com Gastão & Rocha Advocacia para atendimento personalizado em direito civil, trabalhista e empresarial." />
        <meta property="og:image" content={logoImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.instagram.com/gastao_rocha?igsh=MWloYTh4cG91aHF2MQ==" />
         </Helmet> 
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
