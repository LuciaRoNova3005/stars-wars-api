import "../stylesheets/App.scss";
import React, { useState, useEffect } from "react";
import ls from "../Services/local-storage";
import { Route, Switch } from "react-router-dom";
import getApiData from "../Services/Api";
import CharactersList from "./CharactersList";
import SearchPeople from "./SearchPeople";
import Favorite from "./Favorite";

function App() {
  const [characters, setCharacters] = useState(ls.get("characters", []));
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [characterFav, setFavs] = useState(ls.get("charactersFav", []));
  const [filterGender, setfilterGender] = useState(ls.get("filterGender", ""));
  const [composeIsOpen, setComposeIsOpen] = useState(false);

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

  const handleToggleCompose = () => {
    setComposeIsOpen(!composeIsOpen);
  };

  const renderComposeModal = () => {
    if (composeIsOpen === true) {
      return (
        <div>
          <ul>
            <li>
              <article>
                <p className="information__text">Name:</p>
                <p className="information__text">Gender:</p>
                <p className="information__text">Date birth:</p>
                <p className="information__text">Eyes colors:</p>
                <p className="information__text">Birth year:</p>
                <p className="information__text">Hair color:</p>
                <p className="information__text">Skin color:</p>
                <p className="information__text">Mass:</p>
              </article>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <p className="information__text">
          Choose someone to get more information about
        </p>
      );
    }
  };

  return (
    <>
      <header className="header">
        <h1 className="tittle">Web test</h1>
        <h2 className="tittle">Play with Swapi</h2>
      </header>
      <Switch>
        <Route exact path="/">
          <main className="main">
            <div>
              <SearchPeople
                handleFav={handleFav}
                handleFilter={handleFilter}
                handleCLick={handleCLick}
                characters={filtercharacters}
                filterName={filterName}
                characterFav={characterFav}
              ></SearchPeople>
              <CharactersList
                handleFav={handleFav}
                characters={filtercharacters}
                characterFav={characterFav}
                handleToggleCompose={handleToggleCompose}
              ></CharactersList>
              <Favorite
                handleRemoveFav={handleRemoveFav}
                handleFilterFav={handleFilterFav}
                characterFav={filterFav}
                filterGender={filterGender}
                handleToggleCompose={handleToggleCompose}
              ></Favorite>
            </div>
            <div className="information">
              <h2 className="tittle2">Information About</h2>
              {renderComposeModal()}
            </div>
          </main>
        </Route>
      </Switch>
    </>
  );
}

export default App;
