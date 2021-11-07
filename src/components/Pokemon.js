function Pokemon(props) {
  return (
    <ul className="card" id={props.id} onClick={props.handleFav}>
      <i className="icon far fa-star"></i>
      <li>
        <img className="image" src={props.img} alt={props.name}></img>
      </li>

      <li className="tittle">{props.name}</li>

      <ul className="types">
        {props.types.map((element, index) => (
          <li className="text" key={index}>
            {element}
          </li>
        ))}
      </ul>
    </ul>
  );
}

export default Pokemon;
