import { PropTypes } from "prop-types";

function ButtonAdd({ handleAddItem, product }) {
  return (
    <button
      className="addBtn"
      type="submit"
      onClick={() => handleAddItem(product)}
    >
      Réserver
    </button>
  );
}
ButtonAdd.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    productName: PropTypes.string,
    ingredientsText: PropTypes.string,
    nutriScoreGrade: PropTypes.string,
  }).isRequired,
  handleAddItem: PropTypes.func.isRequired,
};

export default ButtonAdd;
