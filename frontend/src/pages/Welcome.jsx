import Selection from "../components/Selection";

function Welcome() {
  return (
    <div className="welcome-page">
      <div className="scrolldown">
        <div className="chevrons">
          <div className="chevrondown" />
          <div className="chevrondown" />
        </div>
      </div>
      <div className="parallax parallax1" />
      <div className="parallax parallax2">
        <Selection />
      </div>
    </div>
  );
}

export default Welcome;
