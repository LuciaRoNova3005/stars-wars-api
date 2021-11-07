import "../stylesheets/App.scss";
import React, { useState, useEffect } from "react";
import SearchPeople from "./SearchPeople";
import SavedPeople from "./SavedPeople";

function App() {
  return (
    <>
      <header>
        <h1 className="tittle">Web test</h1>
        <h2 className="tittle2">Play with Swapi</h2>
      </header>
      <main>
        <SearchPeople></SearchPeople>
        <SavedPeople></SavedPeople>
      </main>
    </>
  );
}

export default App;
