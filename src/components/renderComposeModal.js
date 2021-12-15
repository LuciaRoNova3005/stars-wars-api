const renderComposeModal = (props) => {
  if (props.composeIsOpen === true) {
    return (
      <div>
        <ul>
          <li>
            <article>
              <p className="information__text">Name:</p>
              <p className="information__text">Gender:</p>
              <p className="information__text">Date birth:</p>
              <p className="information__text">Eyes colors:</p>
              <p className="information__text">Birth year:</p>
              <p className="information__text">Hair color:</p>
              <p className="information__text">Skin color:</p>
              <button
                className="btn details"
                onClick={props.handleToggleCompose}
              >
                {" "}
                Delete Show details
              </button>
            </article>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <p className="information__text">
        Choose someone to get more information about
      </p>
    );
  }
};
export default renderComposeModal;
