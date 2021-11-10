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
      <form onSubmit={handleSubmit}>
        <input
          className="form__search"
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
          SEARCH
        </button>
      </form>
      <section className="headerContainer">
        <h3>Name</h3>
        <h3>Gender</h3>
        <h3>Birth Year</h3>
        <h3>Eye Color</h3>
      </section>
      <CharactersList
        handleFav={props.handleFav}
        //onSubmit={props.handleSubmit}
        //characters={props.handleCLick}
        characters={props.characters}
      ></CharactersList>
    </>
  );
};

export default SearchPeople;
