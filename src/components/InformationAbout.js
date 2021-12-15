import renderComposeModal from "./renderComposeModal";

function InformationAbout(props) {
  return (
    <div className="information">
      <h2 className="tittle2">Information About</h2>
      {renderComposeModal()}
    </div>
  );
}

export default InformationAbout;
