import React from "react";
import SavedCard from "./SavedCard";

function SavedPeople(props) {
  return (
    <div className="">
      <h2>Saved People</h2>
      <p>You didn´t save any people yet</p>
      {props.charactersFav.map((element) => (
        <SavedCard key={element.name} name={element.name}></SavedCard>
      ))}
    </div>
  );
}

export default SavedPeople;
