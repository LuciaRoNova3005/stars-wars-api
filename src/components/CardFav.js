function Cardfav(props) {
  return (
    <>
      {props.characterFav.map((fav, index) => (
        <ul className="">
          <li id={index}>
            <img
              className="favorites__img"
              src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV}"
              alt="{fav.name}"
            ></img>
            <h3 className="tittle3">{fav.name}</h3>
          </li>
        </ul>
      ))}
    </>
  );
}

export default Cardfav;
