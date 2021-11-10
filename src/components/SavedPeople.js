import React from "react";
import SavedCard from "./SavedCard";

function SavedPeople(props) {
  return (
    <div className="">
      <h2>Saved People</h2>
      <div className="">
        {props.favs.map((fav) => (
          <SavedCard key={fav.name} name={fav.name} id={fav.name}></SavedCard>
        ))}
      </div>
      <p>You didn´t save any people yet</p>
    </div>
  );
}

export default SavedPeople;
