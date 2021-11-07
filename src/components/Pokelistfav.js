import React from "react";
import PokemonFav from "./PokemonFav";
const Pokelistfav = (props) => {
  return (
    <div>
      <h2 className="tittle tittle2">Mis pokemon favoritos</h2>
      <div className="container">
        {props.dataFav.map((element) => (
          <PokemonFav
            handleFav={props.handleFav}
            key={element.id}
            name={element.name}
            img={element.url}
            types={element.types}
            id={element.id}
          ></PokemonFav>
        ))}
      </div>
    </div>
  );
};

export default Pokelistfav;
