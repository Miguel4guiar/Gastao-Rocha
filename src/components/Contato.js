import React from 'react';
import './Contato.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
function Contato() {
  return (
    <div className="contato">
       <Helmet>
        <title>Contato - Gastão & Rocha Advocacia</title>
        <meta
          name="description"
          content="Entre em contato com Gastão & Rocha Advocacia para atendimento personalizado em direito civil, trabalhista e empresarial. Estamos prontos para ajudá-lo."
        />
        <meta
          name="keywords"
          content="contato, escritório de advocacia, Gastão & Rocha, advocacia, direito civil, direito trabalhista, direito empresarial, consultoria jurídica"
        />
        <meta name="author" content="Miguel Aguiar" />
      </Helmet>
      <h2>Entre em Contato</h2>
<p className="contato-frase">Seu direito, nossa prioridade.</p>
      <div className="contato-container">
        {/* Lado esquerdo: informações + mapa */}
        <div className="contato-info">
          <div className="info-item">
            <FaPhone className="icon" />
            <span>Telefone: <a href="tel:+5511989922936">(11) 98992-2936</a></span>
          </div>

          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>E-mail: <a href="mailto:gastaorochaadv@gmail.com">gastaorochaadv@gmail.com</a></span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <span>Endereço: R. Salvador Marins, 10, Alto Ipiranga, Mogi das Cruzes</span>
          </div>

          <div className="info-item">
            <FaClock className="icon" />
            <span>Horário: Seg-Sex 09h-18h</span>
          </div>

          <div className="info-item">
            <FaWhatsapp className="icon" />
            <span>
              WhatsApp: <a href="https://wa.me/5511989922936?text=Ol%C3%A1%2C+quero+entrar+em+contato" target="_blank" rel="noopener noreferrer">Clique aqui para conversar</a>
            </span>
          </div>

          <div className="mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.090107356063!2d-46.20575932713015!3d-23.529261313586247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdd80d3c32dd83%3A0x37beef35d9f41bcd!2sR.%20Salvador%20Marins%2C%2010%20-%20Vila%20Vitoria%2C%20Mogi%20das%20Cruzes%20-%20SP%2C%2008730-190!5e0!3m2!1spt-BR!2sbr!4v1759171421543!5m2!1spt-BR!2sbr"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              title="Localização do Escritório"
            ></iframe>
          </div>
        </div>

        {/* Lado direito: formulário */}
        <form
          className="form-contato"
          action="https://formspree.io/f/mdkwevza"
          method="POST"
        >
          <label>
            Nome:
            <input type="text" name="nome" placeholder="Seu nome" required />
          </label>

          <label>
            E-mail:
            <input type="email" name="email" placeholder="Seu e-mail" required />
          </label>

          <label>
            CPF ou CNPJ:
            <input
              type="text"
              name="cpfCnpj"
              placeholder="000.000.000-00 ou 00.000.000/0000-00"
              required
            />
          </label>

          <label>
            Mensagem:
            <textarea name="mensagem" placeholder="Escreva sua mensagem..." required />
          </label>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contato;
