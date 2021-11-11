import React from "react";
import Cardfav from "./CardFav";

function SavedPeople(props) {
  const handleChangeFav = (ev) => {
    props.handleFilterFav({
      value: ev.target.value,
      key: "gender",
    });
  };
  return (
    <div className="favorites">
      <h2 className="tittle2">Saved People</h2>

      <select
        className="favorites__btn"
        name="gender"
        id="gender"
        onChange={handleChangeFav}
        value={props.filterGender}
      >
        <option className="favorites__btn" value="">
          Todas
        </option>
        <option className="favorites__btn" value="male">
          Male
        </option>
        <option className="favorites__btn" value="female">
          Female
        </option>
      </select>
      <div className="favorites__list">
        <Cardfav characterFav={props.characterFav}></Cardfav>
      </div>
    </div>
  );
}

export default SavedPeople;
