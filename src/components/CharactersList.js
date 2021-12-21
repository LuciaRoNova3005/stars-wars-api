import React from "react";
import Card from "./Card";
import NotCharacters from "./NotCharacers";

function CharactersList(props) {
  if (props.characters === []) {
    return <NotCharacters />;
  }
  const charactersElements = props.characters.map((element, index) => {
    const ifFav = props.characterFav.find(
      (favorite) => favorite.name === element.name
    );

    return (
      <li className={ifFav ? "list hidden" : "list"} key={index}>
        <Card
          id={index}
          handleToggleCompose={props.handleToggleCompose}
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
    <section className="containerCard">
      <h2 className="tittle2">Search People</h2>
      <ul className="elements">{charactersElements}</ul>
    </section>
  );
}
export default CharactersList;
