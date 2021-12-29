import "../stylesheets/App.scss";
import React, { useState, useEffect } from "react";
import ls from "../Services/local-storage";
import { Route, Switch } from "react-router-dom";
import Logo from "../img/logo.png";
import getApiData from "../Services/Api";
import NotCharacters from "./NotCharacers";
import CharactersList from "./CharactersList";
import SearchPeople from "./SearchPeople";
import Favorite from "./Favorite";
import Details from "./Details";

function App() {
  const [characters, setCharacters] = useState(ls.get("characters", []));
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [characterFav, setFavs] = useState(ls.get("charactersFav", []));
  const [filterGender, setfilterGender] = useState(ls.get("filterGender", ""));
  const [composeIsOpen, setComposeIsOpen] = useState(false);
  const [characterDetail, setcharacterDetail] = useState([]);

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

  const handleToggleCompose = (clickedChar) => {
    setComposeIsOpen(!composeIsOpen);
    const favoriteDetails = characterFav.find((element) => {
      return element.name === clickedChar.currentTarget.id;
    });
    if (favoriteDetails === undefined) {
      const favoriteDetails = characters.find((element) => {
        return element.name === clickedChar.currentTarget.id;
      });
      setcharacterDetail(favoriteDetails);
      return;
    }
    setcharacterDetail(favoriteDetails);
    return;
  };
  const handleReset = () => {
    setFavs([]);
  };

  const renderNotCharacters = () => {
    if (characters.length === 0) {
      return <NotCharacters />;
    }
  };
  const renderComposeModal = () => {
    if (composeIsOpen === true) {
      return (
        <Details
          characterDetail={characterDetail}
          handleToggleCompose={handleToggleCompose}
        ></Details>
      );
    } else {
      return (
        <p className="text information__text">
          Choose someone to get more information about
        </p>
      );
    }
  };

  return (
    <>
      <header className="header">
        <img className="header__logo" src={Logo} alt="Logo Star Wars"></img>
        <h1 className="tittle">Web Test </h1>

        <h2 className="tittle2">Play with Swapi - Star Wars </h2>
      </header>
      <Switch>
        <Route exact path="/">
          <main className="main">
            <SearchPeople
              handleFav={handleFav}
              handleFilter={handleFilter}
              handleCLick={handleCLick}
              characters={filtercharacters}
              filterName={filterName}
              characterFav={characterFav}
            ></SearchPeople>
            {renderNotCharacters()}
            <div className="main__listCharacters">
              <div>
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
                  handleReset={handleReset}
                ></Favorite>
              </div>
              <div className="informationContainer">
                <h2 className="tittle2">Information About</h2>
                {renderComposeModal()}
              </div>
            </div>
          </main>
          <footer className="footer">
            <img className="footer__logo" src={Logo} alt="Logo Star Wars"></img>
          </footer>
        </Route>
      </Switch>
    </>
  );
}

export default App;
