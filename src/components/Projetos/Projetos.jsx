import React, { useState } from 'react';
import AOS from 'aos';
import './Projetos.css';

/* JÁ QUE VEIO ATÉ AQUI, SEGUE LA NO INSTA TAMBÉM: @Crvg_Felipe */

const Projetos = () => {
  const allProjects = [
    {
      imageSrc: 'cripto.png',
      description: 'O Projeto que permite codificar e descodificar mensagens usando a Cifra de César e a codificação Base64. A interface é criada com HTML, estilizada com CSS e a lógica de codificação/descodificação é implementada em JavaScript. (Proposta de atividade da Resilia)',
      repoLink: 'https://github.com/CrvgFelipe/ProjetoCriptografia',

    },
    {
      imageSrc: 'riole.png',
      description: 'O projeto Riolé  foi desenvolvido em grupo utilizando ReactJS, onde FUI UM DOS RESPONSAVEIS PELA PARTE FRONT-END. O objetivo é fornecer uma plataforma de rolés (eventos) filtrados por preços. Os usuários podem encontrar e explorar diversos eventos disponíveis, além de aplicar filtros para encontrar rolés de acordo com seu orçamento. O Riolé proporciona uma experiência interativa e amigável para os usuários descobrirem e participarem de eventos com facilidade. (Proposta de atividade da Resilia)',
      repoLink: 'https://github.com/CrvgFelipe/ProjetoFinal_ProgramadoresCariocas',

    },
    {
      imageSrc: 'hort.png',
      description: 'O projeto que fiz em grupo sobre Hortifrúti consistiu na criação de uma página web utilizando HTML, CSS e JavaScript. MINHA RESPONSABILIDADE FOI DESENVOLVER A SEÇÃO DE PRODUTOS. A página exibia imagens e preços dos produtos disponíveis no hortifrúti. Utilizamos uma estrutura de grade para organizar os cartões de produtos. O projeto tinha como objetivo apresentar de forma visualmente atraente e informativa os produtos oferecidos pelo hortifrúti. (Proposta de atividade da Resilia)',
      repoLink: 'https://github.com/CrvgFelipe/Projeto-Grupo---Hortifruti',

    },
    {
      imageSrc: 'hofe.png',
      description: 'No projeto HOFE, desenvolvido em HTML, CSS e JavaScript, FUI RESPONSÁVEL PELA CRIAÇÃO DA PÁGINA DE SERVIÇOS. Nessa página, criei cards para exibir os diferentes planos oferecidos pela HOFE, além de uma seção de perguntas frequentes. Os cards apresentavam informações sobre cada plano, como nome, benefícios e preço, enquanto a seção de perguntas frequentes fornecia respostas para as dúvidas mais comuns dos visitantes. A utilização de HTML, CSS e JavaScript permitiu criar uma página atraente e funcional, destacando os serviços da HOFE.',
      repoLink: 'https://github.com/CrvgFelipe/Projeto-Hofe',

    },

    {
      imageSrc: 'breve.png',
      description: 'Projeto em andamento...',
      repoLink: 'https://github.com/CrvgFelipe',

    },


    {
      imageSrc: 'breve.png',
      description: 'Projeto em andamento...',
      repoLink: 'https://github.com/CrvgFelipe',

    },

  ];

  const [visibleProjects, setVisibleProjects] = useState(allProjects.slice(0, 3));
  const [showAllProjects, setShowAllProjects] = useState(false);

  const handleShowMore = () => {
    setVisibleProjects(allProjects);
    setShowAllProjects(true);
  };

  return (
    <div className="projetos" id="Projetos">
      <h1>Meus Projetos</h1>
      {visibleProjects.map((project, index) => (
        <div className="project-item" data-aos="fade-right" data-aos-delay="280" data-aos-duration="900" key={index}>
          <img className='imgP' src={project.imageSrc} alt="Projeto" />
          <div className="project-details">
            <p>{project.description}</p>
            <div className="project-links">
              <a className='repo' href={project.repoLink} target="_blank" rel="noopener noreferrer">
                GITHUB <img src="githubi.png" />
              </a>

            </div>
          </div>
        </div>
      ))}
      {!showAllProjects && (
        <button className='btn-ver' onClick={handleShowMore}>&#x2795; VER MAIS </button>
      )}

    </div>

  );
};

export default Projetos;
