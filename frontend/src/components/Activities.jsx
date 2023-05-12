import { useState } from "react";
import { useParams } from "react-router-dom";
import { PropTypes } from "prop-types";
import ButtonAdd from "./ButtonAdd";

function Activities({ handleAddItem, carts, articles }) {
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
      <h2>Animations</h2>
      <div className="articles-container">
        {activitiesIndex > 0 && (
          <button
            type="button"
            aria-label="previousBtn"
            className="btn previousBtn"
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
            className="btn nextBtn"
            onClick={() => {
              setActivitiesIndex(activitiesIndex + 1);
            }}
          />
        )}
        <ButtonAdd
          carts={carts}
          handleAddItem={handleAddItem}
          product={activities[activitiesIndex]}
        />
      </div>
    </>
  );
}
Activities.propTypes = {
  carts: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  handleAddItem: PropTypes.func.isRequired,
  articles: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};

export default Activities;
