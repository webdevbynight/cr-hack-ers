import React from "react";
import { useParams } from "react-router-dom";
import oceans from "../data/oceans.json";
import Activities from "../components/Activities";
import Locations from "../components/Locations";
import Informations from "../components/ocean/Informations";

function Ocean() {
  const { id } = useParams();
  const oceanData = oceans.filter(
    (ocean) => ocean.id === Number.parseInt(id, 10)
  )[0];
  return (
    <div className="bg-page">
      <div className="container-page">
        <h1>{oceanData.title}</h1>
        <div className="infos">
          <Informations id={id} />
        </div>
        <div className="locations">
          <Locations />
        </div>
        <div className="activities">
          <Activities />
        </div>
      </div>
    </div>
  );
}

export default Ocean;
