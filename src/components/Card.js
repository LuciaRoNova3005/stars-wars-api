import React from "react";

function Card(props) {
  return (
    <>
      <ul className="list" id={props.name}>
        <li>{props.name}</li>
        <li>{props.gender}</li>
        <li>{props.birth_year}</li>
        <li>{props.eye_color}</li>
        <button className="btn details">Show details</button>
        <button className="btn save" onSubmit={props.handleSubmit}>
          Save
        </button>
      </ul>
    </>
  );
}
export default Card;
