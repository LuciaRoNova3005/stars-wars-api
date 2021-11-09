import CharactersList from "../CharactersList";
import React, { useState, useEffect } from "react";

const SearchPeople = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="form__search"
          type="text"
          name="name"
          id="name"
          placeholder="search"
          //defaultValue={props.filterName || ""}
          value={props.setFilterName}
          onChange={handleChange}
        />
        <button className="btn search" onClick={props.handleFilter}>
          SEARCH
        </button>
      </form>
      <CharactersList
        onSubmit={props.handleSubmit}
        characters={props.characters}
      ></CharactersList>
    </>
  );
};

export default SearchPeople;
