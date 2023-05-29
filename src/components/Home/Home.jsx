import React, { useEffect, useState } from 'react';
import '../Home/Home.css';

/* JÁ QUE VEIO ATÉ AQUI, SEGUE LA NO INSTA TAMBÉM: @Crvg_Felipe */

const Home = () => {
  const [text, setText] = useState('');
  const fullText = 'Desenvolvedor Full Stack Junior'; // Texto que será digitado
  const typingInterval = 180; // Intervalo de digitação 

  useEffect(() => {
    let currentIndex = 0;
    let direction = 'forward'; // Direção da animação: 'forward' (digitação) ou 'backward' (apagando)

    const animateText = () => {
      let currentText = '';

      if (direction === 'forward') {
        currentText = fullText.slice(0, currentIndex + 1) + '|';
        currentIndex++;

        if (currentIndex === fullText.length) {
          direction = 'backward';
        }
      } else if (direction === 'backward') {
        currentText = fullText.slice(0, currentIndex) + '|';

        if (currentIndex === 0) {
          direction = 'forward';
        } else {
          currentIndex--;
        }
      }

      setText(currentText);
      setTimeout(animateText, typingInterval);
    };

    animateText();

    return () => {
      clearTimeout();
    };
  }, []);


  return (
    <div className="home" id="Home" data-aos="fade-right" data-aos-delay="350" data-aos-duration="900">
      <div className='content'>
        <div className='profile'>
          <div className="profile-image-container">
            <img className="profile-image" src="felipe.jpg" alt="Sua foto" />
            <div className="profile-image-effect"></div>
          </div>
        </div>
        <div className='details'>
          <h1>Olá, Sou o Felipe.</h1>
          <h2>{text}</h2>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/felipe-costa-02672318b/" target="_blank"><img src="linkedin.png " alt="Rede Social 1" /></a>
            <a href="https://github.com/CrvgFelipe" target="_blank"><img src="github.png " alt="Rede Social 2" /></a>
            <a href="https://wa.me/5521972049495" target="_blank"><img src="whatsapp.png " alt="Rede Social 3" /></a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
