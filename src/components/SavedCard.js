function SavedCard(props) {
  return (
    <div>
      <ul id={props.id}>
        <li>
          <img
            src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV}"
            alt=""
          ></img>
        </li>
        <li>{props.name}</li>
        <button className="btn details">Show details</button>
        <button className="btn remove" onSubmit={props.handleSubmit}>
          Save
        </button>
      </ul>
    </div>
  );
}
export default SavedCard;
