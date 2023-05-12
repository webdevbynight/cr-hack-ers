import React from "react";
import { useParams } from "react-router-dom";
import { PropTypes } from "prop-types";
import oceans from "../data/oceans.json";
import Activities from "../components/Activities";
import Locations from "../components/Locations";
import Informations from "../components/Informations";
import Reservation from "../components/Reservation";

function Ocean({ handleAddItem, handleRemoveItem, carts, articles }) {
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
      <Reservation />
    </>
  );
}
Ocean.propTypes = {
  carts: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleAddItem: PropTypes.func.isRequired,
  articles: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};
export default Ocean;
