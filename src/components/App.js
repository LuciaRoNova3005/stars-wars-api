import "../stylesheets/App.scss";
import React, { useState, useEffect } from "react";
import ls from "../Services/local-storage";
import { Route, Switch } from "react-router-dom";
import getApiData from "../Services/Api";
import SearchPeople from "./SearchPeople";
import SavedPeople from "./SavedPeople";
import InformationAbout from "./InformationAbout";

import { Link } from "react-router-dom";

function App() {
  const [characters, setcharacters] = useState(ls.get("characters", []));
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [characterFav, setFavs] = useState(ls.get("charactersFav", []));

  useEffect(() => {
    ls.set("charactersFav", characterFav);
    ls.set("character", characters);
    ls.set("filterName", filterName);
  }, [characters, filterName, characterFav]);
  /*Este Useeffect se ejecuta cuando characters cambia y lo guarda en local*/

  const handleCLick = () => {
    getApiData().then((charactersData) => {
      setcharacters(charactersData);
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

  const handleFav = (clickedFav) => {
    const cardFavorited = characterFav.find((elementFav) => {
      console.log(elementFav.name);
      return elementFav.name === clickedFav;
    });
    if (cardFavorited === undefined) {
      const characterFavorite = characters.find((element) => {
        return element.name === clickedFav;
      });
      setFavs([...characterFav, characterFavorite]);

      return;
    }
    const newFavoriters = characterFav.filter(
      (element) => element.name !== clickedFav
    );
    setFavs(newFavoriters);
  };

  return (
    <>
      <header>
        <h1 className="tittle">Web test</h1>
        <h2 className="tittle2">Play with Swapi</h2>
      </header>
      <main className="container">
        <Switch>
          <Route exact path="/">
            <div className="">
              <SearchPeople
                handleFav={handleFav}
                handleFilter={handleFilter}
                handleCLick={handleCLick}
                characters={filtercharacters}
                filterName={filterName}
                favs={characterFav}
              ></SearchPeople>
              <SavedPeople favs={characterFav}></SavedPeople>
            </div>
            <InformationAbout characters={filtercharacters}></InformationAbout>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
