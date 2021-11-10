import React from "react";

function Card(props) {
  return (
    <>
      <ul className="list" id={props.id}>
        <li>{props.name}</li>
        <li>{props.gender}</li>
        <li>{props.birth}</li>
        <li>{props.eye}</li>
        <button className="btn details">Show details</button>
        <button
          onClick={props.handleFav}
          className="btn save"
          onSubmit={props.handleSubmit}
          id={props.id}
        >
          Save
        </button>
      </ul>
    </>
  );
}
export default Card;
