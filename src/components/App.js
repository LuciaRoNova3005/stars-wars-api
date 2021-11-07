import "../stylesheets/App.scss";
import React, { useState, useEffect } from "react";
import ls from "../Services/local-storage";
import getApiData from "../Services/Api";
import SearchPeople from "./SearchPeople";
import SavedPeople from "./SavedPeople";
import InformationAbout from "./InformationAbout";

function App() {
  const [characters, setcharacters] = useState(ls.get("characters", []));
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
  }, [characters]);
  /*Este Useeffect se ejecuta cuando characters cambia y lo guarda en local*/

  return (
    <>
      <header>
        <h1 className="tittle">Web test</h1>
        <h2 className="tittle2">Play with Swapi</h2>
      </header>
      <main className="container">
        <div className="">
          <SearchPeople characters={characters}></SearchPeople>
          <SavedPeople></SavedPeople>
        </div>
        <InformationAbout></InformationAbout>
      </main>
    </>
  );
}

export default App;
