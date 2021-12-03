import React from "react";
import Cardfav from "./CardFav";

function Favorite(props) {
  const handleChangeFav = (ev) => {
    props.handleFilterFav({
      value: ev.target.value,
      key: "gender",
    });
  };

  const charactersFav = props.characterFav.map((fav, index) => {
    return (
      <li key={index}>
        <Cardfav
          key={index}
          name={fav.name}
          id={index}
          handleRemoveFav={props.handleRemoveFav}
        />
      </li>
    );
  });

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
          All
        </option>
        <option className="favorites__btn" value="male">
          Male
        </option>
        <option className="favorites__btn" value="female">
          Female
        </option>
      </select>

      <section>
        <ul className="favorites__list">{charactersFav}</ul>
      </section>
    </div>
  );
}

export default Favorite;
