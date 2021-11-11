import CardDetails from "./CardDetails";

function InformationAbout(props) {
  return (
    <div className="">
      <h2>Information About</h2>
      <p>Choose someone to get more information about</p>
      <div>
        {props.characters.map((element, index) => (
          <CardDetails
            id={index}
            handleFav={props.handleFav}
            onSubmit={props.handleSubmit}
            key={element.name}
            name={element.name}
            gender={element.gender}
            birth={element.birth_year}
            eye={element.eye_color}
            id={element.name}
          ></CardDetails>
        ))}
      </div>
    </div>
  );
}

export default InformationAbout;
