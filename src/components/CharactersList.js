import React from "react";
import Card from "./Card";

function CharactersList(props) {
  const charactersElements = props.characters.map((element, index) => {
    return (
      <li className="list" key={element.id}>
        <Card
          favs={element.favs}
          id={index}
          handleFav={props.handleFav}
          onSubmit={props.handleSubmit}
          key={element.name}
          name={element.name}
          gender={element.gender}
          birth={element.birth_year}
          eye={element.eye_color}
          id={element.name}
        />
      </li>
    );
  });

  return (
    <section>
      <ul className="">{charactersElements}</ul>
    </section>
  );
}
export default CharactersList;
