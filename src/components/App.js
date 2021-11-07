import "../stylesheets/App.scss";
import React, { useState, useEffect } from "react";
import ls from "../Services/local-storage";
import SearchPeople from "./SearchPeople";
import SavedPeople from "./SavedPeople";
import InformationAbout from "./InformationAbout";

function App() {
  const [characters, setcharacters] = useState(ls.get("characters", []));

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
          <SearchPeople></SearchPeople>
          <SavedPeople></SavedPeople>
        </div>
        <InformationAbout></InformationAbout>
      </main>
    </>
  );
}

export default App;
