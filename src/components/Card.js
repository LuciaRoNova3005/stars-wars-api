function Card(props) {
  return (
    <>
      <ul className="list">
        <li>Name</li>
        <li> Masculino</li>
        <li>1984</li>
        <li>yellow</li>
        <button className="btn details">Show details</button>
        <button className="btn save" onSubmit={props.handleSubmit}>
          Save
        </button>
      </ul>
    </>
  );
}
export default Card;
