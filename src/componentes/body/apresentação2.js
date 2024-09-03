import React from "react";

function Apresentação2(props) {
  return (
    <article id="p2">
      <div id="apresentação2" >
        <h2 className= "aprh2" >Sobre Mim</h2>
        <p>
        Sou estudante de Engenharia de Software na Universidade do Estado do Pará (UEPA), atualmente no 3º semestre do curso. Tenho habilidades em programação com as linguagens C, JavaScript, Kotlin, CSS e HTML, além de uma sólida compreensão no desenvolvimento web front-end. Também possuo conhecimentos em banco de dados, o que me permite trabalhar com eficiência na criação e manutenção de aplicações web completas. Estou em busca de uma oportunidade de estágio que me permita crescer profissionalmente e contribuir com minhas habilidades para o sucesso da equipe.
        </p>
        <img className="imagem1" src={props.srcImg} alt="garoto estudando " />
        
      </div>
    </article>
  );
}

export default Apresentação2;
