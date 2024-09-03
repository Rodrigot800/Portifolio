import { useState } from "react";
import React from "react";
import IconesDescrição from "./icone-descrição/ícones";
import Desc from "./icone-descrição/descrição";

function Apresentação3() {
  const imagemDescrição = () => {
    return (
      <img
        class="imagem1"
        src="https://rodrigot800.github.io/My_Portfolio/imagem/code.png"
        alt=""
      />
    );
  };

  const [descrição, setDescrição] = useState(imagemDescrição());

  const handleclickIcone = (descrição) => {
    setDescrição(descrição);
  };

  return (
    <article id="p3">
      <div id="apresentação3">
        <h2 className="aprh2">conhecimentos</h2>
        <div id="imgcode">
          {descrição}
          <h3>Clique nos Icones para mais Informções </h3>
        </div>

        <div class="alinhamento">
        <div
            onClick={() =>
              handleclickIcone(
                <Desc
                  titleTec="Kotlin"
                  descTec="Kotlin é uma linguagem de programação moderna desenvolvida pela JetBrains que roda na Java Virtual Machine (JVM), além de poder ser compilada para JavaScript e código nativo. Ela se destaca por sua sintaxe concisa e clara, reduzindo o código boilerplate em comparação com Java. Kotlin é totalmente interoperável com Java, permitindo o uso de bibliotecas existentes e facilitando a integração com projetos Java. A linguagem oferece segurança de tipos aprimorada, inferência de tipos e suporte para programação funcional. Além disso, Kotlin possui suporte nativo a corrotinas para programação assíncrona e concorrente. É amplamente utilizada no desenvolvimento Android e também pode ser empregada para desenvolvimento backend, web e multiplataforma."
                />
              )
            }
          >
            <IconesDescrição
              imgIcone="https://github.com/Rodrigot800/My-Portifolio_2.0_React/blob/master/src/imagens/kotlin-logo.png?raw=true"
              descriçãoIcone="Kotlin"
            />
          </div>
          <div
            onClick={() =>
              handleclickIcone(
                <Desc
                  titleTec="HTML"
                  descTec="HTML é uma linguagem de marcação utilizada para estruturar e organizar o conteúdo de páginas da web. Através de elementos ou tags, é possível criar cabeçalhos, parágrafos, links e imagens. Junto com CSS para estilização e JavaScript para interatividade, o HTML desempenha um papel essencial na construção e visualização de websites."
                />
              )
            }
          >
            <IconesDescrição
              imgIcone="https://github.com/Rodrigot800/My_Portfolio/blob/main/imagem/html.png?raw=true"
              descriçãoIcone="HTML"
            />
          </div>

          <div
            onClick={() =>
              handleclickIcone(
                <Desc
                  titleTec="CSS"
                  descTec="CSS (Cascading Style Sheets) é uma linguagem de estilo utilizada para definir a aparência e o layout das páginas da web. Com o CSS, é possível aplicar cores, fontes, tamanhos, espaçamentos e efeitos visuais aos elementos HTML. Através de seletores, propriedades e valores, é possível estilizar elementos individualmente ou em grupo, criar layouts responsivos e garantir uma experiência visual consistente em diferentes dispositivos. O CSS é complementar ao HTML e permite separar a apresentação do conteúdo, facilitando a manutenção e a criação de páginas web atraentes e bem organizadas."
                />
              )
            }
          >
            <IconesDescrição
              imgIcone="https://github.com/Rodrigot800/My_Portfolio/blob/main/imagem/ccs3.png?raw=true"
              descriçãoIcone="CSS"
            />
          </div>
          <div
            onClick={() =>
              handleclickIcone(
                <Desc
                  titleTec="JavaScript"
                  descTec="JavaScript é uma linguagem de programação de alto nível, amplamente usada para criar interatividade em páginas da web. Com sintaxe simples e flexível, ele permite manipular elementos HTML, realizar cálculos, interagir com o usuário e fazer requisições a servidores. Além disso, o JavaScript é executado no lado do cliente, no navegador, o que o torna rápido e responsivo. Com seu uso, é possível criar aplicativos web dinâmicos e funcionais, além de ser amplamente utilizado em frameworks como React e Angular para o desenvolvimento de aplicações complexas."
                />
              )
            }
          >
            <IconesDescrição
              imgIcone="https://github.com/Rodrigot800/My_Portfolio/blob/main/imagem/javascript.png?raw=true"
              descriçãoIcone="JS"
            />
          </div>

          <div
            onClick={() =>
              handleclickIcone(
                <Desc
                  titleTec="React"
                  descTec="O React é uma biblioteca JavaScript de código aberto que é usada para construir interfaces de usuário interativas e reativas para aplicativos web. Ele permite que os desenvolvedores criem componentes reutilizáveis que podem ser compostos para formar interfaces de usuário complexas. O React utiliza uma abordagem baseada em componentes, onde cada parte da interface do usuário é representada por um componente isolado que gerencia seu próprio estado e comportamento. Isso facilita a criação de aplicativos escaláveis e de fácil manutenção. Além disso, o React utiliza o conceito de Virtual DOM para otimizar o desempenho, atualizando apenas as partes da interface do usuário que foram alteradas, em vez de renderizar a página inteira a cada mudança."
                />
              )
            }
          >
            <IconesDescrição
              imgIcone="https://github.com/Rodrigot800/My-Portifolio_2.0_React/blob/master/src/imagens/ReactLogo.png?raw=true"
              descriçãoIcone="React"
            />
          </div>
          <div
            onClick={() =>
              handleclickIcone(
                <Desc
                  titleTec="Git"
                  descTec="Git é um sistema de controle de versão distribuído amplamente utilizado no desenvolvimento de software. Ele permite rastrear e gerenciar alterações em arquivos e diretórios ao longo do tempo. Com o Git, é possível criar ramificações (branches) para desenvolver recursos separadamente e, em seguida, mesclá-los ao ramo principal. Ele também fornece recursos para sincronizar o código entre diferentes repositórios, facilitando a colaboração entre desenvolvedores. Além disso, o Git registra um histórico completo de todas as alterações feitas, permitindo a recuperação de versões anteriores do código"
                />
              )
            }
          >
            <IconesDescrição
              imgIcone="https://github.com/Rodrigot800/My_Portfolio/blob/main/imagem/git.png?raw=true"
              descriçãoIcone="Git"
            />
          </div>
          <div
            onClick={() =>
              handleclickIcone(
                <Desc
                  titleTec="GitHub"
                  descTec="
                  GitHub é uma plataforma web que permite hospedar, compartilhar e colaborar em projetos de desenvolvimento de software. É amplamente utilizado para controle de versão e gerenciamento de código-fonte, utilizando o sistema de controle de versão Git. Por meio do GitHub, os desenvolvedores podem criar repositórios públicos ou privados, realizar solicitações de pull, revisar e colaborar em código, além de gerenciar problemas e tarefas relacionadas ao desenvolvimento. É uma ferramenta essencial para o trabalho colaborativo e um hub central para a comunidade de desenvolvedores, facilitando o compartilhamento e a descoberta de projetos de código aberto"
                />
              )
            }
          >
            <IconesDescrição
              imgIcone="https://github.com/Rodrigot800/My_Portfolio/blob/main/imagem/github.png?raw=true"
              descriçãoIcone="GitHub"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default Apresentação3;
