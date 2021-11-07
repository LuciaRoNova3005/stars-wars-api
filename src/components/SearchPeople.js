import React from "react";
import Characters from "./Characters";

const SearchPeople = (props) => {
  const handleClick = (ev) => {
    props.handleSearch({
      value: ev.target.value,
      key: "search",
    });
  };
  return (
    <>
      <form action="">
        <input
          className="form__search"
          type="text"
          name="search"
          id="search"
          placeholder="search"
        />
        <button className="btn search" onClick={handleClick}>
          SEARCH
        </button>
      </form>
      <Characters></Characters>
    </>
  );
};

export default SearchPeople;
