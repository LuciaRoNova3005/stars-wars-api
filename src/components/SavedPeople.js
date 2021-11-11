import React from "react";
import Cardfav from "./CardFav";

function SavedPeople(props) {
  return (
    <div className="favorites">
      <h2 className="tittle2">Saved People</h2>
      <div className="favorites__list">
        <Cardfav characterFav={props.characterFav}></Cardfav>
      </div>
    </div>
  );
}

export default SavedPeople;
