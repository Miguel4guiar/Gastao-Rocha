import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/home';
import Sobre from './components/Sobre';
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
    </div>
  );
}

export default App;
