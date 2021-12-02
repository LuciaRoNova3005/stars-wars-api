import React from "react";
import Card from "./Card";

function CharactersList(props) {
  const charactersElements = props.characters.map((element, index) => {
    const ifFav = props.characterFav.find(
      (favorite) => favorite.name === element.name
    );

    return (
      <li className={ifFav ? "list hidden" : "list"} key={index}>
        <Card
          id={index}
          handleFav={props.handleFav}
          onSubmit={props.handleSubmit}
          key={index}
          name={element.name}
          gender={element.gender}
          birth={element.birth_year}
          eye={element.eye_color}
        />
      </li>
    );
  });

  return (
    <section className="results">
      <h2 className="tittlesearch tittle2">Search People</h2>
      <ul className="element">{charactersElements}</ul>
    </section>
  );
}
export default CharactersList;
