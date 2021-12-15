function InformationAbout(props) {
  return (
    <div>
      <div className="information">
        <h2 className="tittle2">Information About</h2>
        <p className="information__text">
          Choose someone to get more information about
        </p>
      </div>
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
            <p className="information__text">Mass:</p>
          </article>
        </li>
      </ul>
    </div>
  );
}

export default InformationAbout;
