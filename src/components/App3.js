import "../stylesheets/App.scss";
import React, { useState, useEffect } from "react";
import ls from "../Services/local-storage";
import getApiData from "../Services/Api";
import SearchPeople from "./SearchPeople";
import SavedPeople from "./SavedPeople";
import InformationAbout from "./InformationAbout";

function App() {
  const [characters, setcharacters] = useState(ls.get("characters", []));
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  /*Empieza ejecutarse en la parte de montaje y es lo que hace que salga los datos
   */
  useEffect(() => {
    /*Si el array esta vacío no accedes al locastorage
     */
    if (characters.length === 0) {
      getApiData().then((charactersData) => {
        setcharacters(charactersData);
      });
    }
  }, []);
  /*Parámetro que nos indica cuando debe ejecutarse el useEffect
   */

  useEffect(() => {
    ls.set("character", characters);
    ls.set("filterName", filterName);
  }, [characters, filterName]);
  /*Este Useeffect se ejecuta cuando characters cambia y lo guarda en local*/
  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    }
  };

  const filtercharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  return (
    <>
      <header>
        <h1 className="tittle">Web test</h1>
        <h2 className="tittle2">Play with Swapi</h2>
      </header>
      <main className="container">
        <div className="">
          <SearchPeople
            handleFilter={handleFilter}
            characters={filtercharacters}
            filterName={filterName}
          ></SearchPeople>
          <SavedPeople></SavedPeople>
        </div>
        <InformationAbout></InformationAbout>
      </main>
    </>
  );
}

export default App;
