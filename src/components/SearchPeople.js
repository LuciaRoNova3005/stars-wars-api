import React from "react";
import Characters from "./Characters";

const SearchPeople = (props) => {
  return (
    <>
      <input
        className="form__name"
        type="text"
        name="name"
        id="name"
        placeholder="Search"
      />
      <button className="btn search">SEARCH</button>
      <Characters></Characters>
    </>
  );
};

export default SearchPeople;
