function SavedPeople(props) {
  return (
    <div className="cardfav">
      <ul
        className="card"
        key={props.key}
        id={props.id}
        onClick={props.handleFav}
      >
        <i className="fas fa-star"></i>
        <li>
          <img className="image" src={props.img} alt={props.name}></img>
        </li>

        <li className="tittle">{props.name}</li>
      </ul>
    </div>
  );
}

export default SavedPeople;
