import "../stylesheets/App.scss";
import React, { useState, useEffect } from "react";
import ls from "../Services/local-storage";
import { Route, Switch } from "react-router-dom";
import getApiData from "../Services/Api";
import SearchPeople from "./SearchPeople";
import InformationAbout from "./InformationAbout";

function App() {
  const [characters, setCharacters] = useState(ls.get("characters", []));
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [characterFav, setFavs] = useState(ls.get("charactersFav", []));
  const [filterAll, setFilterAll] = useState(ls.get("filterAll", ""));
  const [filterMale, setFilterMale] = useState(ls.get("filterMale", ""));
  const [filterFemale, setFilterFemale] = useState(ls.get("filterFemale", ""));
  // const [characterDetails, setDetails] = useState("");

  useEffect(() => {
    ls.set("character", characters);
    ls.set("filterName", filterName);
    ls.set("charactersFav", characterFav);
    ls.set("filterAll", filterAll);
    ls.set("filterMale", filterMale);
    ls.set("filterFemale", filterFemale);
  }, [
    characters,
    filterName,
    characterFav,
    filterAll,
    filterMale,
    filterFemale,
  ]);
  /*Este Useeffect se ejecuta cuando characters cambia y lo guarda en local*/

  const handleCLick = () => {
    getApiData().then((charactersData) => {
      setCharacters(charactersData);
    });
  };

  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    }
  };

  const filtercharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  const handleFav = (clickedChar) => {
    const favoriteCha = characterFav.find((element) => {
      return element.name === clickedChar.currentTarget.id;
    });

    if (favoriteCha === undefined) {
      const charFav = characters.find((element) => {
        return element.name === clickedChar.currentTarget.id;
      });
      setFavs([...characterFav, charFav]);
      return;
    }

    const newFavorites = characterFav.filter(
      (element) => element.id !== clickedChar
    );
    setFavs(newFavorites);
  };

  return (
    <>
      <header className="header">
        <h1 className="tittle">Web test</h1>
        <h2 className="tittle2">Play with Swapi</h2>
      </header>
      <main className="container">
        <Switch>
          <Route exact path="/">
            <div>
              <SearchPeople
                handleFav={handleFav}
                handleFilter={handleFilter}
                handleCLick={handleCLick}
                characters={filtercharacters}
                filterName={filterName}
              ></SearchPeople>
              <div className="favorites">
                <h2 className="tittle2">Saved People</h2>
                <div className="favorites__list">
                  {characterFav.map((fav, index) => (
                    <ul className="cardFav">
                      <li id={index}>
                        <img
                          className="favorites__img"
                          src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV}"
                          alt="{fav.name}"
                        ></img>
                        <h3 className="tittle3">{fav.name}</h3>
                        <button className="btn details">Show details</button>
                        <button className="btn remove" id={fav.name}>
                          Remove
                        </button>
                      </li>
                      {/* <button className="btn remove" onSubmit={props.handleSubmit}>
                              Save
                            </button> */}
                    </ul>
                  ))}
                </div>
              </div>
              {/* <SavedPeople favs={characterFav}></SavedPeople> */}
            </div>

            <InformationAbout></InformationAbout>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
