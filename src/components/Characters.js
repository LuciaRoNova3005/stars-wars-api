import React from "react";
import Card from "./Card";

function Characters(props) {
  return (
    <div>
      <section className="headerContainer">
        <h3>Name</h3>
        <h3>Gender</h3>
        <h3>Birth Year</h3>
        <h3>Eye Color</h3>
      </section>
      <Card></Card>
    </div>
  );
}

export default Characters;
