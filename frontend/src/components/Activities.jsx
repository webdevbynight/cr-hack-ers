import { useState } from "react";
import { useParams } from "react-router-dom";
import articles from "../data/articles.json";

function Activities() {
  const { id } = useParams();
  const activities = articles.filter(
    (article) =>
      article.oceanId === Number.parseInt(id, 10) && article.type === "activity"
  );
  const [activitiesIndex, setActivitiesIndex] = useState(0);
  const { name, description, price, currency, unit, image } =
    activities[activitiesIndex];

  return (
    <>
      <h2>Activités</h2>
      <div className="activities-container">
        {activitiesIndex > 0 && (
          <button
            type="button"
            aria-label="previousBtn"
            className="previousBtn"
            onClick={() => {
              setActivitiesIndex(activitiesIndex - 1);
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

        {activitiesIndex < activities.length - 1 && (
          <button
            type="button"
            aria-label="nextBtn"
            className="nextBtn"
            onClick={() => {
              setActivitiesIndex(activitiesIndex + 1);
            }}
          />
        )}

        <button type="button" aria-label="addBtn" className="addBtn">
          Ajouter au panier
        </button>
      </div>
    </>
  );
}

export default Activities;
