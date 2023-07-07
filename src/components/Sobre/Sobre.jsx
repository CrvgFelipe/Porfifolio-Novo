import React from 'react';
import '../Sobre/Sobre.css';
import AOS from 'aos';
                                      /* JÁ QUE VEIO ATÉ AQUI, SEGUE LA NO INSTA TAMBÉM: @Crvg_Felipe */

const Sobre = () => {
  return (

    <div id="Sobre" className="sobre-mim" >

      <h2>Sobre Mim</h2>
      <div className="sobre-c" data-aos="fade-up" data-aos-delay="230" data-aos-duration="900" >
        <p>Olá! Meu nome é Felipe Costa e sou apaixonado por tecnologia. Recentemente, participei de um bootcamp promovido pelo projeto Programadores Cariocas, onde adquiri conhecimentos abrangentes em diversas áreas da tecnologia. Atualmente, estou cursando análise e desenvolvimento de sistemas, buscando aprofundar meu conhecimento nessa área. Estou entusiasmado para aplicar o que aprendi em projetos desafiadores e trabalhar em equipe, sempre em busca de crescimento profissional.</p>

        <h3>Habilidades</h3>
        <div className="icones">
          <a><img src="html.png " alt="Habilidades 1" /><p>HTML</p></a>
          <a><img src="css.png " alt="Habilidades 1" /><p>CSS</p></a>
          <a><img src="js2.png " alt="Habilidades 1" /><p>JavaScript</p></a>
          <a><img src="react.png " alt="Habilidades 1" /><p>React</p></a>
          <a><img src="mysql.png " alt="Habilidades 1" /><p>MySQL</p></a>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
