import '../Menu/Menu.css';
import React, { useState } from 'react';

/* JÁ QUE VEIO ATÉ AQUI, SEGUE LA NO INSTA TAMBÉM: @Crvg_Felipe */

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (

    <nav className={`menu ${menuOpen ? 'open' : ''}`}>

      <div className="logo">FELIPE COSTA</div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="icon-bar"></div>
        <div className="icon-bar"></div>
        <div className="icon-bar"></div>
      </div>

      <ul className={`menu-items ${menuOpen ? 'open' : ''}`}>
        <div className='nav-menu'>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Sobre">Sobre mim</a></li>
          <li><a href="#Projetos">Projetos</a></li>
        </div>
      </ul>

    </nav>
  );
}

export default Menu;