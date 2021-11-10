import React from "react";

function Card(props) {
  return (
    <>
      <div className="list" id={props.id}>
        <p>{props.name}</p>
        <p>{props.gender}</p>
        <p>{props.birth}</p>
        <p>{props.eye}</p>
        <button className="btn details">Show details</button>
        <button
          className="btn save"
          id={props.name}
          // name={props.name}
          // onSubmit={props.handleSubmit}
          onClick={props.handleFav}
        >
          Save
        </button>
      </div>
    </>
  );
}
export default Card;
