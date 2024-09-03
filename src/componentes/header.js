import React, { useState } from "react";
import logo from "../imagens/software-development.png";

function Header(props) {
  const [itensDisplay, setItensDisplay] = useState(false);

  const toggleMenu = () => {
    setItensDisplay(!itensDisplay);
  };

  return (
    <header>
      <nav>
        <img id="navimg1" src={logo} alt="" />
        <i
          id="menu"
          className="material-symbols-outlined"
          onClick={toggleMenu}
          translate="no"
        >
          menu
        </i>
      </nav>
      <menu id="itens" style={{ display: itensDisplay ? "block" : "none" }}>
        <ul>
          <li>
            <a href="#p1">
              <p>inicio{props.menutext}</p>
            </a>
          </li>
          <li>
            <a href="#p2">Sobre mim</a>
          </li>
          <li>
            <a href="#p3">conhecimentos</a>
          </li>
          <li>
            <a href="#p4">Projetos</a>
          </li>
          <li>
            <a href="#contato">contato</a>
          </li>
        </ul>
      </menu>
    </header>
  );
}

export default Header;
