import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <>
      <ul className="list" id={props.id}>
        <li className="list__element">{props.name}</li>
        <li className="list__element">{props.gender}</li>
        <li className="list__element">{props.birth}</li>
        <li className="list__element">{props.eye}</li>
      </ul>
      <button className="btn details" onClick={props.handleDetails}>
        Show details
      </button>
      <button className="btn save" id={props.name} onClick={props.handleFav}>
        Saved
      </button>
    </>
  );
}
export default Card;
