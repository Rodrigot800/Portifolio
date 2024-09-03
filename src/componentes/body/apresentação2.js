import React from "react";

function Apresentação2(props) {
  return (
    <article id="p2">
      <div id="apresentação2" >
        <h2 className= "aprh2" >Sobre Mim</h2>
        <p>
          Olá! Sou um estudante de Engenharia de Software no primeiro semestre,
          entusiasmado em adquirir conhecimentos na área de desenvolvimento de
          software. Atualmente, estou em busca de uma oportunidade de emprego na
          área de Front-End, onde posso aplicar minhas habilidades e
          conhecimentos em HTML, CSS e JavaScript para criar interfaces
          intuitivas e agradáveis aos usuários. Estou determinado a expandir
          minha experiência e contribuir para o sucesso de projetos
          desafiadores.
        </p>
        <img className="imagem1" src={props.srcImg} alt="garoto estudando " />
        <p>
          <h2>Objetivos profissionais:</h2>
          Como aspirante a Desenvolvedor Front-End, meu objetivo é me tornar um
          profissional altamente competente e estar envolvido em projetos
          empolgantes que me permitam expandir meu conjunto de habilidades.
          Estou ansioso para trabalhar em um ambiente dinâmico e desafiador,
          onde possa continuar aprendendo e crescendo como desenvolvedor. Estou
          aberto a oportunidades de estágio ou emprego, pois minha prioridade é
          adquirir experiência prática e contribuir para o sucesso da equipe e
          da organização.
        </p>
      </div>
    </article>
  );
}

export default Apresentação2;
