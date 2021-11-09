import React from "react";
import Card from "../Card";

function CharactersList(props) {
  return (
    <div>
      <section className="headerContainer">
        <h3>Name</h3>
        <h3>Gender</h3>
        <h3>Birth Year</h3>
        <h3>Eye Color</h3>
      </section>
      {props.characters.map((element) => (
        <Card
          onSubmit={props.handleSubmit}
          key={element.name}
          name={element.name}
          gender={element.gender}
          birth={element.birth_year}
          eye={element.eye_color}
        ></Card>
      ))}
    </div>
  );
}

export default CharactersList;
