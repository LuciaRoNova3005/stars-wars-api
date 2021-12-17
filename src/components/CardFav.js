import React from "react";

function Cardfav(props) {
  return (
    <article
      className="favorites__list__cardFav"
      index={props.id}
      id={props.id}
      key={props.key}
    >
      <img
        className="favorites__list__cardFav__img"
        src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV}"
        alt={props.name}
      ></img>
      <h3 className="tittle3">{props.name}</h3>
      <div className="favorites__list__cardFav__btn">
        <button
          className="details"
          id={props.name}
          onClick={props.handleToggleCompose}
        >
          Show details
        </button>

        <button
          className="remove"
          onClick={props.handleRemoveFav}
          id={props.name}
        >
          Remove
        </button>
      </div>
    </article>
  );
}

export default Cardfav;
