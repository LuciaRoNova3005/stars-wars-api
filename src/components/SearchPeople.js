import React from "react";
import Characters from "./Characters";

const SearchPeople = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
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
          value={props.filterName}
          id="search"
          placeholder="search"
        />
        <button
          className="btn search"
          onClick={handleClick}
          onSubmit={handleSubmit}
        >
          SEARCH
        </button>
      </form>
      <Characters onSubmit={props.handleSubmit}></Characters>
    </>
  );
};

export default SearchPeople;
