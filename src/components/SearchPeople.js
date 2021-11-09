import CharactersList from "./CharactersList";

const SearchPeople = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
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
        />
        <button className="btn search" onClick={props.handleCLick}>
          SEARCH
        </button>
      </form>
      <CharactersList
        //onSubmit={props.handleSubmit}
        //characters={props.handleCLick}
        characters={props.characters}
      ></CharactersList>
    </>
  );
};

export default SearchPeople;
