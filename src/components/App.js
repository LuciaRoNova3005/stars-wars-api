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
  const [charactersFav, setFavs] = useState(ls.get("charactersFav", []));

  useEffect(() => {
    ls.set("character", characters);
    ls.set("filterName", filterName);
    ls.set("charactersFav", charactersFav);
  }, [characters, filterName, charactersFav]);
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

  const handleFav = (ev) => {
    const selectCardFav = characters.find(
      (fav) => fav.id === parseInt(ev.currentTarget.id)
    );

    if (!charactersFav.includes(selectCardFav)) {
      setFavs([...charactersFav, selectCardFav]);
      console.log(charactersFav);

      return;
    }
    const newFavoriters = charactersFav.filter(
      (card) => card.id !== parseInt(ev.currentTarget.id)
    );
    setFavs(newFavoriters);
    console.log(charactersFav);
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
              ></SearchPeople>
              <SavedPeople favs={characters}></SavedPeople>
            </div>
            <InformationAbout></InformationAbout>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
