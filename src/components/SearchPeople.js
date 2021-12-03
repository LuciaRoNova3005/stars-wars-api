import React from "react";
import CharactersList from "./CharactersList";

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
      <div className="searchPeople">
        <form className="searchPeople__form" onSubmit={handleSubmit}>
          <input
            className="searchPeople__form__search"
            type="text"
            name="name"
            id="name"
            placeholder="search"
            value={props.filterName}
            onChange={handleChange}
          />
          <button
            className="btn search"
            onClick={props.handleCLick}
            characters={props.characters}
          >
            Search
          </button>
        </form>
      </div>
      <CharactersList
        handleFav={props.handleFav}
        characters={props.characters}
        characterFav={props.characterFav}
      ></CharactersList>
    </>
  );
};

export default SearchPeople;
