import React from "react";
import Card from "./Card";

function CharactersList(props) {
  return (
    <div>
      {props.characters.map((element, index) => (
        <Card
          characters={props.characters}
          favs={props.favs}
          id={index}
          handleFav={props.handleFav}
          onSubmit={props.handleSubmit}
          key={element.name}
          name={element.name}
          gender={element.gender}
          birth={element.birth_year}
          eye={element.eye_color}
          //id={element.name}
        ></Card>
      ))}
    </div>
  );
}

export default CharactersList;
