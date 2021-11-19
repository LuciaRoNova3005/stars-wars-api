function Cardfav(props) {
  return (
    <article index={props.id} id={props.id}>
      <img
        className="favorites__img"
        src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV}"
        alt={props.name}
      ></img>
      <h3 className="tittle3">{props.name}</h3>
    </article>
  );
}

export default Cardfav;
