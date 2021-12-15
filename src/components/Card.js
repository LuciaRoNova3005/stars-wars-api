import React from "react";

function Card(props) {
  return (
    <article className="card" id={props.id} key={props.key}>
      <div className="card__information">
        <p>Name: {props.name}</p>
        <p>Gender: {props.gender}</p>
        <p>Date birth:{props.birth}</p>
        <p>Eyes colors:{props.eye}</p>
      </div>
      <div className="card__btn">
        <button
          className="btn details"
          id={props.name}
          onClick={props.handleToggleCompose}
        >
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
