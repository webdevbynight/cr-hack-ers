import React from "react";
import { useParams } from "react-router-dom";
import { PropTypes } from "prop-types";
import oceans from "../data/oceans.json";
import Activities from "../components/Activities";
import Locations from "../components/Locations";
import Informations from "../components/Informations";
import Reservation from "../components/Reservation";

function Ocean({
  handleAddItem,
  showreservation,
  handleRemoveItem,
  handleTest,
  setShowreservation,
  carts,
  articles,
}) {
  const { id } = useParams();
  const oceanData = oceans.filter(
    (ocean) => ocean.id === Number.parseInt(id, 10)
  )[0];
  return (
    <>
      <div className="bg-page">
        <div className="container-page">
          <h1>{oceanData.title}</h1>
          <div className="infos">
            <Informations />
          </div>
          <div className="locations">
            <Locations
              articles={articles}
              carts={carts}
              handleAddItem={handleAddItem}
              handleRemoveItem={handleRemoveItem}
            />
          </div>
          <div className="activities">
            <Activities
              articles={articles}
              carts={carts}
              handleAddItem={handleAddItem}
              handleRemoveItem={handleRemoveItem}
            />
          </div>
        </div>
      </div>
      {showreservation && (
        <Reservation
          articles={articles}
          carts={carts}
          handleTest={handleTest}
          handleRemoveItem={handleRemoveItem}
          setShowreservation={setShowreservation}
        />
      )}
    </>
  );
}
Ocean.propTypes = {
  carts: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleTest: PropTypes.func.isRequired,
  setShowreservation: PropTypes.func.isRequired,
  showreservation: PropTypes.bool.isRequired,
  handleAddItem: PropTypes.func.isRequired,
  articles: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};
export default Ocean;
