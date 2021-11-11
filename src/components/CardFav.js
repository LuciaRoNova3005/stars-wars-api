function Cardfav(props) {
  return (
    <>
      {props.characterFav.map((fav, index) => (
        <ul className="cardFav">
          <li id={index}>
            <img
              className="favorites__img"
              src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV}"
              alt="{fav.name}"
            ></img>
            <h3 className="tittle3">{fav.name}</h3>
            <button className="btn details">Show details</button>
            <button className="btn remove" id={fav.name}>
              Remove
            </button>
          </li>
        </ul>
      ))}
    </>
  );
}

export default Cardfav;
