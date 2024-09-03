import React from "react";

function IconesDescrição(props) {
  return (
    <a href="#p3">
      <div class="imgcnc" translate="no">
        <img class="imgi" src={props.imgIcone} alt="" />
        <p>{props.descriçãoIcone}</p>
      </div>
    </a>
  );
}

export default IconesDescrição;
