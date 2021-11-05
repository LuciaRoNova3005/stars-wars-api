import club from "../data/club.json";
import Clubs from "./Clubs";

const Clublist = () => {
  return (
    <ul>
      {club.map((element) => (
        <li>
          <Clubs
            icon={element.fa}
            name={element.name}
            members={element.members}
          ></Clubs>
        </li>
      ))}
    </ul>
  );
};

export default Clublist;
