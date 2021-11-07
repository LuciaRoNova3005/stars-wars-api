import React from "react";
import Pokemon from "./Pokemon";

const Pokelist = (props) => {
  return (
    <div className="container">
      {props.dataList.map((element) => (
        <Pokemon
          handleFav={props.handleFav}
          key={element.id}
          img={element.url}
          name={element.name}
          types={element.types}
          id={element.id}
        ></Pokemon>
      ))}
    </div>
  );
};

export default Pokelist;
