import React from "react";

function Card(props) {
  return (
    <article className="card">
      <p className="list__element">{props.name}</p>
      <p className="list__element">{props.gender}</p>
      <p className="list__element">{props.birth}</p>
      <p className="list__element">{props.eye}</p>

      <button className="btn details" onClick={props.handleDetails}>
        Show details
      </button>
      <button className="btn save" id={props.name} onClick={props.handleFav}>
        Saved
      </button>
    </article>
  );
}
export default Card;
