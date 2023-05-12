import { PropTypes } from "prop-types";

function ButtonRemove({ handleRemoveItem, product }) {
  return (
    <button
      className="addBtn"
      type="submit"
      onClick={() => handleRemoveItem(product)}
    >
      Supprimer
    </button>
  );
}
ButtonRemove.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    productName: PropTypes.string,
    ingredientsText: PropTypes.string,
    nutriScoreGrade: PropTypes.string,
  }).isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
};
export default ButtonRemove;
