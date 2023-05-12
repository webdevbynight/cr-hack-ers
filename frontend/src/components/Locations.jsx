import { useState } from "react";
import { useParams } from "react-router-dom";
import articles from "../data/articles.json";

function Locations() {
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
      <div className="locations-container">
        {locationsIndex > 0 && (
          <button
            type="button"
            aria-label="previousBtn"
            className="previousBtn"
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
            className="nextBtn"
            onClick={() => {
              setLocationsIndex(locationsIndex + 1);
            }}
          />
        )}

        <button type="button" aria-label="addBtn" className="addBtn">
          Réserver
        </button>
      </div>
    </>
  );
}

export default Locations;
