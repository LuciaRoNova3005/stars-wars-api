function Details(props) {
  return (
    <article className="cardDetails">
      <p className="cardDetails__text">Name:{props.characterDetail.name}</p>
      <p className="cardDetails__text">Gender:{props.characterDetail.gender}</p>
      <p className="cardDetails__text">Height:{props.characterDetail.height}</p>
      <p className="cardDetails__text">Mass:{props.characterDetail.mass}</p>
      <p className="cardDetails__text">Mass:{props.characterDetail.mass}</p>
      <p className="cardDetails__text">
        Skin color:{props.characterDetail.skin_color}
      </p>
      <p className="cardDetails__text">
        Hair color:{props.characterDetail.hair_color}
      </p>
      <p className="cardDetails__text">
        Eyes colors:{props.characterDetail.birth_year}
      </p>
      <p className="cardDetails__text">
        Birth year:{props.characterDetail.birth_year}
      </p>
      <p className="cardDetails__text">
        Hair color:{props.characterDetail.birth_year}
      </p>
      <button
        className="btn details"
        id={props.characterDetail.name}
        onClick={props.handleToggleCompose}
      >
        Delete Show details
      </button>
    </article>
  );
}

export default Details;
