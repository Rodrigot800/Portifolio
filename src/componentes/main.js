import React from "react";
import Apresentação1 from "./body/apresentação1";
import Apresentação2 from "./body/apresentação2";
import Apresentação3 from "./body/apresentação3";
import ApresentaçãoProjetos from "./body/apresentaçãoProjetos";

// importação de imagens
import foto from "../imagens/foto.png";
import programadorImg from "../imagens/programador.png";
import estudoSobreMim from "../imagens/estudo.png"

function Main() {
  return (
    <div>
      <Apresentação1 srci1={foto} srci2={programadorImg} />
      <Apresentação2 srcImg={estudoSobreMim} />
      <Apresentação3 />
      <ApresentaçãoProjetos />
    </div>
  );
}

export default Main;
