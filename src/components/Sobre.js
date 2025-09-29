import React from 'react';
import './sobre.css';
import officeImage from '../assets/Image/negocio.jpg';
import { motion } from 'framer-motion';

function Sobre() {
    return ( 
        <div className='sobre' id='about'>
            {/* Mini-apresentação com efeito */}
      <motion.div 
        className="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={officeImage} alt="Escritório Gastão & Rocha" />
          <div className="overlay"></div>
        </motion.div>

        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2>Quem Somos</h2>
          <p>
            Há +35 anos ao lado de quem precisa, o Gastão & Rocha combina experiência jurídica sólida
            com atendimento humanizado e transparente. Atuamos com foco em
            resultados e na segurança jurídica de nossos clientes.
          </p>
        </motion.div>
      </motion.div>
        </div>
     );
}   

export default Sobre;