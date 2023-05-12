import { useState } from "react";
import { useParams } from "react-router-dom";
import { PropTypes } from "prop-types";
import ButtonAdd from "./ButtonAdd";

function Locations({ handleAddItem, carts, articles }) {
  const { id } = useParams();
  const locations = articles.filter(
    (article) =>
      article.oceanId === Number.parseInt(id, 10) && article.type === "renting"
  );
  const [locationsIndex, setLocationsIndex] = useState(0);
  const { name, description, price, currency, unit, image } =
    locations[locationsIndex];

  return (
    <>
      <h2>Locations</h2>
      <div className="articles-container">
        {locationsIndex > 0 && (
          <button
            type="button"
            aria-label="previousBtn"
            className="btn previousBtn"
            onClick={() => {
              setLocationsIndex(locationsIndex - 1);
            }}
          />
        )}

        <img src={image} alt="location img" />
        <div className="text-container">
          <h3>
            {name} {price}&nbsp;{currency}&nbsp;/&nbsp;{unit}
          </h3>
          <p>{description}</p>
        </div>

        {locationsIndex < locations.length - 1 && (
          <button
            type="button"
            aria-label="nextBtn"
            className="btn nextBtn"
            onClick={() => {
              setLocationsIndex(locationsIndex + 1);
            }}
          />
        )}

        <ButtonAdd
          carts={carts}
          handleAddItem={handleAddItem}
          product={locations[locationsIndex]}
        />
      </div>
    </>
  );
}
Locations.propTypes = {
  carts: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  handleAddItem: PropTypes.func.isRequired,
  articles: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};

export default Locations;
