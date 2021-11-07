import React from "react";

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
      <button className="btn">SEARCH</button>
      <Character></Character>
    </>
  );
};

export default SearchPeople;
