import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/home';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Contato from './components/Contato';
function App() {
  return (
    <div className='App'>
  <Navbar/>
  <section className='home' id='home'>
    <Home/>
  </section>
  <section className='sobre' id='about'>
    <Sobre/>
  </section>
  <section className='servicos' id='services'>
    <Servicos/>
  </section>
  <section className='contato' id='contact'>
    <Contato/>
  </section>
    </div>
  );
}

export default App;
