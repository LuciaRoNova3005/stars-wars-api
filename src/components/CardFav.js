function Cardfav(props) {
  return (
    <article
      className="favorites__list__cardFav"
      index={props.id}
      id={props.id}
      key={props.key}
    >
      <img
        className="favorites__list__cardFav__img"
        src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV}"
        alt={props.name}
      ></img>
      <h3 className="tittle3">{props.name}</h3>
      <button className="btn details">Show details</button>
      <button
        className="btn remove"
        onClick={props.handleRemoveFav}
        id={props.name}
      >
        Remove
      </button>
    </article>
  );
}

export default Cardfav;
