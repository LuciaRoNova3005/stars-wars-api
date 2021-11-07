import React from "react";
import Pokemon from "./Pokemon";

const SearchPeople = (props) => {
  return (
    <>
      <input
        className="form__name"
        type="text"
        name="name"
        id="name"
        placeholder="Busca a tu personaje"
      />
    </>
  );
};

export default SearchPeople;
