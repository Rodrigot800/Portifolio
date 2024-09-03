import React from "react";

function Projeto(props) {
  const divStyle = {
    backgroundImage: `url(${props.img})`, // Use a imagem importada aqui
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <a href={props.urlProj} target="_blank">
       <div className="projet">
      <div className="imgprojet" style={divStyle} ></div> {/* Aplicando o estilo diretamente aqui */}
      <div id="textp1">
        
          <h2>{props.descriçãoProj}</h2>
          <h4>{props.descrição}</h4>

        
        <div className="visualização-do-projeto">
          <h3>Visualizar Projeto</h3>
        </div>
      </div>
    </div>
    </a>
   
  );
}

export default Projeto;
