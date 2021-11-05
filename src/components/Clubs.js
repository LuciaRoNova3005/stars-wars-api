import { useState } from "react";

function Clubs(props) {
  const [collapsable, setcollapsable] = useState("hidden");

  const handleSelect = () => {
    if (collapsable === "hidden") {
      setcollapsable("");
    } else {
      setcollapsable("hidden");
    }
  };

  return (
    <div>
      <i className={props.icon}> </i>
      <h2 onClick={handleSelect}>{props.name}</h2>
      <ul className={collapsable}>
        {props.members.map((element) => (
          <li>{element}</li>
        ))}
      </ul>
    </div>
  );
}

export default Clubs;
