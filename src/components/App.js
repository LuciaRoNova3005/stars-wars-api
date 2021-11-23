import "../stylesheets/App.scss";
import React, { useState, useEffect } from "react";
import ls from "../Services/local-storage";
import { Route, Switch } from "react-router-dom";
import getApiData from "../Services/Api";
import SearchPeople from "./SearchPeople";
import InformationAbout from "./InformationAbout";
import SavedPeople from "./SavedPeople";

function App() {
  const [characters, setCharacters] = useState(ls.get("characters", []));
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [characterFav, setFavs] = useState(ls.get("charactersFav", []));
  const [filterGender, setfilterGender] = useState(ls.get("filterGender", ""));

  useEffect(() => {
    ls.set("character", characters);
    ls.set("filterName", filterName);
    ls.set("charactersFav", characterFav);
    ls.set("filterGender", filterGender);
  }, [characters, filterName, characterFav, filterGender]);

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

    console.log(clickedChar.currentTarget.id);
    if (favoriteCha === undefined) {
      const charFav = characters.find((element) => {
        return element.name === clickedChar.currentTarget.id;
      });

      setFavs([...characterFav, charFav]);
      return;
    }
  };
  const handleFilterFav = (data) => {
    if (data.key === "gender") {
      setfilterGender(data.value);
    }
  };
  const filterFav = characterFav.filter((character) => {
    if (filterGender === "") {
      return true;
    } else {
      return character.gender === filterGender;
    }
  });

  const handleRemoveFav = (clickedChar) => {
    const favCard = characterFav.find((element) => {
      return element.name === clickedChar.currentTarget.id;
    });

    const newFavoriters = characterFav.filter((cardFav) => cardFav !== favCard);

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
            <div className="main">
              <div>
                <SearchPeople
                  handleFav={handleFav}
                  handleFilter={handleFilter}
                  handleCLick={handleCLick}
                  characters={filtercharacters}
                  filterName={filterName}
                  characterFav={characterFav}
                ></SearchPeople>
                <SavedPeople
                  handleRemoveFav={handleRemoveFav}
                  handleFilterFav={handleFilterFav}
                  characterFav={filterFav}
                  filterGender={filterGender}
                ></SavedPeople>
              </div>

              <div>
                <InformationAbout></InformationAbout>
              </div>
            </div>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
