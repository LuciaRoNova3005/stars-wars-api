function Details(props) {
  return (
    <article className="cardDetails">
      <ul>
        <li className="cardDetails__text">
          Name: {props.characterDetail.name}
        </li>
        <li className="cardDetails__text">
          Gender: {props.characterDetail.gender}
        </li>
        <li className="cardDetails__text">
          Height: {props.characterDetail.height}
        </li>
        <li className="cardDetails__text">Mass:{props.characterDetail.mass}</li>
        <li className="cardDetails__text">
          Skin color: {props.characterDetail.skin_color}
        </li>
        <li className="cardDetails__text">
          Hair color:{props.characterDetail.hair_color}
        </li>
        <li className="cardDetails__text">
          Eyes colors: {props.characterDetail.birth_year}
        </li>
        <li className="cardDetails__text">
          Birth year: {props.characterDetail.birth_year}
        </li>
        <li className="cardDetails__text">
          Hair color: {props.characterDetail.birth_year}
        </li>
      </ul>
    </article>
  );
}

export default Details;
