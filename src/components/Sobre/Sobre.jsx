import React from 'react';
import '../Sobre/Sobre.css';
import AOS from 'aos';
                                      /* JÁ QUE VEIO ATÉ AQUI, SEGUE LA NO INSTA TAMBÉM: @Crvg_Felipe */

const Sobre = () => {
  return (

    <div id="Sobre" className="sobre-mim" >

      <h2>Sobre Mim</h2>
      <div className="sobre-c" data-aos="fade-up" data-aos-delay="230" data-aos-duration="900" >
        <p>Olá! Meu nome é Felipe Costa e sou apaixonado por tecnologia. Recentemente,
          participei de um bootcamp pelo projeto Programadores Cariocas,
          oferecido em parceria entre a Prefeitura do Rio de Janeiro, o Senac e a Resilia.
          Durante os intensos 6 meses do curso, adquiri conhecimentos abrangentes e me senti impulsionado a seguir carreira na área de tecnologia.
          Aprendi sobre desenvolvimento web, programação back-end, bancos de dados e muito mais.
          Essa experiência solidificou minha paixão pela área e me motivou a buscar constantemente aprendizado e crescimento profissional.
          Estou entusiasmado para contribuir para projetos desafiadores e trabalhar em equipe,
          aproveitando cada oportunidade para avançar na carreira tecnológica.</p>

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