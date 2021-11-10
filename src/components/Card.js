import React from "react";

function Card(props) {
  return (
    <div className="list">
      <li>{props.name}</li>
      <li>{props.gender}</li>
      <li>{props.birth}</li>
      <li>{props.eye}</li>
      <button className="btn details" onClick={props.handleDetails}>
        Show details
      </button>
      <button
        className="btn save"
        // id={props.id}
        // name={props.name}
        // onSubmit={props.handleSubmit}
        onClick={props.handleFav}
      >
        Save
      </button>
    </div>
  );
}
export default Card;
