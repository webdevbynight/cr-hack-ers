import React from "react";
import Activities from "../components/Activities";
import Locations from "../components/Locations";
import Informations from "../components/ocean/Informations";

function Ocean() {
  return (
    <>
      <div className="page-bg" />
      <div className="container-page">
        <div className="infos">
          <Informations />
        </div>
        <div className="locations">
          <Locations />
        </div>
        <div className="activities">
          <Activities />
        </div>
      </div>
    </>
  );
}

export default Ocean;
