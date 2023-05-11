import Bubbles from "./Bubbles";

function Selection() {
  return (
    <>
      <span className="bubble-container1">
        <Bubbles />
      </span>

      <div className="verybig-bubbles bubble1">
        <h3>Océan Pacifique</h3>
      </div>
      <div className="verybig-bubbles bubble2">
        <h3>Océan Arctique</h3>
      </div>

      <div className="verybig-bubbles bubble3">
        <h3>Océan Atlantique</h3>
      </div>

      <div className="verybig-bubbles bubble4">
        <h3>
          Océan <br /> Indien
        </h3>
      </div>

      <div className="verybig-bubbles bubble5">
        <h3>Océan Antarctique</h3>
      </div>
    </>
  );
}

export default Selection;
