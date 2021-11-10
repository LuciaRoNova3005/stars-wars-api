function InformationAbout(props) {
  return (
    <>
      <div className="">
        <h2>Information About</h2>
        <p>Choose someone to get more information about</p>
      </div>
      <div className="">
        <ul className="" id={props.characters.id}>
          <li></li>
          <li>{props.characters.height}</li>
          <li>{props.characters.height}</li>
          <li>{props.characters.height}</li>
        </ul>
      </div>
    </>
  );
}

export default InformationAbout;
