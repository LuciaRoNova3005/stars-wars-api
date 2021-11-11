import React from "react";
import Cardfav from "./CardFav";

function SavedPeople(props) {
  return (
    <div className="favorites">
      <h2 className="tittle2">Saved People</h2>
      <div className="favorites__list">
        {props.characterFav.map((fav, index) => (
          <ul className="cardFav">
            <li id={index}>
              <img
                className="favorites__img"
                src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV}"
                alt="{fav.name}"
              ></img>
              <h3 className="tittle3">{fav.name}</h3>
              <button className="btn details">Show details</button>
              <button className="btn remove" id={fav.name}>
                Remove
              </button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default SavedPeople;
