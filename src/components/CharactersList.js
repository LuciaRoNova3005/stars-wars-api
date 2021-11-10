import React from "react";
import Card from "./Card";

function CharactersList(props) {
  const charactersElements = props.characters.map((element) => {
    return (
      <Card
        handleFav={props.handleFav}
        onSubmit={props.handleSubmit}
        key={element.name}
        name={element.name}
        gender={element.gender}
        birth={element.birth_year}
        eye={element.eye_color}
        id={element.name}
      ></Card>
    );
  });
  return (
    <section className="list">
      <ul>{charactersElements}</ul>
    </section>
  );
}

export default CharactersList;
