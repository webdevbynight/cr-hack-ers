import { PropTypes } from "prop-types";

function ButtonAddOcean({ handleAddItem, showreservation }) {
  return (
    <button
      className="addBtn"
      type="submit"
      onClick={() => handleAddItem(showreservation)}
    >
      Ajouter au panier
    </button>
  );
}
ButtonAddOcean.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    productName: PropTypes.string,
    ingredientsText: PropTypes.string,
    nutriScoreGrade: PropTypes.string,
  }).isRequired,
  handleAddItem: PropTypes.func.isRequired,
  showreservation: PropTypes.func.isRequired,
};

export default ButtonAddOcean;
