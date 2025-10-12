import React from 'react';
import './Servicos.css';
import { Helmet } from 'react-helmet';
function Servicos() {
  const areas = [
    { titulo: 'Direito Civil', descricao: 'Contratos, indenizações e cobranças.' },
    { titulo: 'Direito Trabalhista', descricao: 'Defesa de empresas e empregados.' },
    { titulo: 'Direito de Família', descricao: 'Divórcios, guarda e inventários.' },
    { titulo: 'Direito Empresarial', descricao: 'Abertura de empresas e compliance.' },
    { titulo: 'Direito Penal', descricao: 'Defesa em processos criminais.' },
    { titulo: 'Direito Imobiliário', descricao: 'Compra, venda e regularização.' },
    { titulo: 'Direito Tributário', descricao: 'Planejamento fiscal e defesa em questões tributárias.' },
    { titulo: 'Direito Previdenciário', descricao: 'Aposentadorias, revisões de benefícios e pensões.' }


  ];

  return (
    <section className="servicos">
       <Helmet>
        <title>Serviços - Gastão & Rocha Advocacia</title>
        <meta
          name="description"
          content="Conheça os serviços jurídicos do escritório Gastão & Rocha: direito civil, trabalhista e empresarial, sempre com foco no sucesso do cliente."
        />
        <meta
          name="keywords"
          content="serviços jurídicos, advocacia, direito civil, direito trabalhista, direito empresarial, consultoria jurídica, Gastão & Rocha"
        />
        <meta name="author" content="Miguel Aguiar" />
      </Helmet>
      <h1>Nossos Serviços</h1>
      <p>Atuamos em diversas áreas do Direito, oferecendo soluções completas e personalizadas.</p>
      <div className="cards">
        {areas.map((a, i) => (
          <div key={i} className="card">
            <h2>{a.titulo}</h2>
            <p>{a.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Servicos;