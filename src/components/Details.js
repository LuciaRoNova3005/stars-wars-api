function Details(props) {
  return (
    <article>
      <p className="information__text">Name:{props.characterDetail.name}</p>
      <p className="information__text">Gender:{props.characterDetail.gender}</p>
      <p className="information__text">Height:{props.characterDetail.height}</p>
      <p className="information__text">Mass:{props.characterDetail.mass}</p>
      <p className="information__text">Mass:{props.characterDetail.mass}</p>
      <p className="information__text">
        Skin color:{props.characterDetail.skin_color}
      </p>
      <p className="information__text">
        Hair color:{props.characterDetail.hair_color}
      </p>
      <p className="information__text">
        Eyes colors:{props.characterDetail.birth_year}
      </p>
      <p className="information__text">
        Birth year:{props.characterDetail.birth_year}
      </p>
      <p className="information__text">
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
