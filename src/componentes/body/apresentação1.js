import React from "react";
import MeuCurriculo from "../../docs/Curriculo - Rodrigo-Peixotos.pdf"

function periodoDoDia(s) {
  var saudacao 
    var dataAtual = new Date()
    var hora = dataAtual.getHours()

    if ( hora >= 6 && hora < 12 ) {
        saudacao = `, bom dia!`
    } else if (hora >= 12 && hora < 18) {
        saudacao = `, boa tarde!`
    }
    else {
        saudacao = `, boa noite!`
    }
    return s = saudacao
}

function Apresentação1(props) {

  var saudacao

  return (
    <article id="p1">
      <div id="apresentação1">
        <div className="ali">
          <div id="apresentação_perfil">
            <img id="imagemPerfil" src={props.srci1} alt="minha foto" />
          </div>
          <div id="apresentação_perfil2">
            <h2>Rodrigo Peixoto</h2>
          </div>
        </div>
        
        <h3 >olá{periodoDoDia(saudacao)}</h3>
        Sou desenvolvedor web e estudante de Engenharia de software.
        <div>
          <img
            className="imagem1"
            src={props.srci2}
            alt="imagem de programador"
          />
        </div>
        <button className="button">
          <a href={MeuCurriculo} target="_blank">
            <h3>Currículo</h3>
          </a>
        </button>
        <button className="button">
          <a href="#p4">
            <h3>ver Projetos</h3>
          </a>
        </button>
      </div>
    </article>
  );
}

export default Apresentação1;
