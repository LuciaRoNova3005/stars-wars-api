import React from "react";
import images from "../img/images.png";

function SavedCard(props) {
  return (
    <>
      <ul className="listSaved">
        <li>
          <img
            src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV}"
            alt=""
          ></img>
        </li>
        <button className="btn details">Show details</button>
        <button className="btn remove" onSubmit={props.handleSubmit}>
          Save
        </button>
      </ul>
    </>
  );
}
export default SavedCard;
