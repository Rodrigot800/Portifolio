import React from "react";
import whatsapp from "../imagens/zap.png"
import likedin from "../imagens/likedin.png"
import github from "../imagens/github.png"
import insta from "../imagens/insta.png"



function Footer() {
  return (
    <footer>
      <div>
        <article id="contato">
          <h2>Redes Sociais</h2>
          <div class="alinhamento-2">
            <div class="conti">
              <a
                href="https://www.linkedin.com/in/rodrigo-peixoto-4b9140268/"
                target="_blank"
              >
                <img
                  class="conimg"
                  src={likedin}
                  alt="link do likedin"
                />
              </a>
            </div>
            <div class="conti">
              <a href="https://github.com/Rodrigot800" target="_blank">
                <img
                  class="conimg"
                  src={github}
                  alt="link do github"
                />
              </a>
            </div>
            <div class="conti">
              <a
                href="https://www.instagram.com/rodrigopeixotot800?igsh=YzljYTk1ODg3Zg=="
                target="_blank"
              >
                <img
                  class="conimg"
                  src={insta}
                  alt="link do github"
                />
              </a>
            </div>
            <div class="conti">
              <a
                href="https://api.whatsapp.com/send?phone=5591985268888"
                target="_blank"
              >
                <img class="conimg" src={whatsapp} alt="link do github" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </footer>
  );
}

export default Footer;
