import React from "react";

function Desc(props) {
  return (
    <div class="text_conhecimentos" translate="no">
      <h2>{props.titleTec}</h2>
      <p>{props.descTec}</p>
    </div>
  );
}

export default Desc;
