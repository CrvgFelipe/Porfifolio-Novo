import React, { useState, useEffect } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import Sobre from './components/Sobre/Sobre';
import Projetos from './components/Projetos/Projetos';
import Footer from './components/Footer/Footer';
import { PacmanLoader } from 'react-spinners';
import AOS from 'aos';
import 'aos/dist/aos.css';



const App = () => {
  
  useEffect(() => {
    AOS.init();
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula um tempo de carregamento
    setTimeout(() => {
      setLoading(false);
    }, 2900);
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <PacmanLoader color="rgba(29, 225, 253, 1)" size={80} />

      </div>
    );

    
  }

  return (
    <>
      <Menu />
      <Home />
      <Sobre />
      <Projetos />
      <Footer />
     
    </>
  );
};

export default App;
