import React from "react";

function Card(props) {
  return (
    <article className="elements__card" id={props.id} key={props.key}>
      <ul className="elements__card__information">
        <li>Name: {props.name}</li>
        <li>Gender: {props.gender}</li>
        <li>Date birth:{props.birth}</li>
        <li>Eyes colors:{props.eye}</li>
      </ul>
      <div className="elements__card__btn">
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
