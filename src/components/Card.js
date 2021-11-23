import React from "react";

function Card(props) {
  return (
    <article className="card" id={props.id} key={props.key}>
      <div className="card__list">
        <p> {props.name}</p>
        <p>{props.gender}</p>
        <p>{props.birth}</p>
        <p>{props.eye}</p>
      </div>

      <div>
        <button className="btn details" onClick={props.handleDetails}>
          Show details
        </button>
        <button className="btn save" id={props.name} onClick={props.handleFav}>
          Saved
        </button>
      </div>
    </article>
  );
}
export default Card;
