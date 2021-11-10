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

 
  useEffect(() => {
    ls.set("character", characters);
    ls.set("filterName", filterName);
    ls.set('charactersFav', characterFav);
  }, [characters, filterName, characterFav]);
  /*Este Useeffect se ejecuta cuando characters cambia y lo guarda en local*/

  const handleCLick = () => {
    getApiData().then((charactersData) => {
      setCharacters(charactersData);
    });
  };
console.log(characters)

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
        console.log(characters)
        return element.name === clickedChar.currentTarget.id;
      });
      console.log(characters)

      setFavs([...characterFav, charFav]);
console.log(charFav)
      return;
    }

    const newFavorites = characterFav.filter((element) => element.id !== clickedChar);
    setFavs(newFavorites);
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
              <h2>Saved People</h2>
              {characterFav.map((fav, index) => (
                <div>
                  <ul >
                    <li id={index}>
                      <img
                        src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV}"
                        alt=""
                      ></img>
                      <h2>{fav.name}</h2>
                      <button className="btn details">Show details</button>
                    </li>
                    {/* <button className="btn remove" onSubmit={props.handleSubmit}>
                        Save
                      </button> */}
                  </ul>
                </div>
              ))}
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
