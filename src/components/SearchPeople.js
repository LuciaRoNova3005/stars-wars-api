import React from "react";
import Characters from "./Characters";

const SearchPeople = (props) => {
  const handleClick = (ev) => {
    props.handleSearch({
      value: ev.target.value,
      key: "name",
    });
  };
  return (
    <>
      <form action="">
        <input
          className="form__name"
          type="text"
          name="name"
          id="name"
          placeholder="Search"
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
