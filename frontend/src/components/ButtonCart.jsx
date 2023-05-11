/* eslint-disable react/prop-types */

function Button({ handleAddItem, handleRemoveItem, product }) {
  return (
    <>
      <button type="submit" onClick={() => handleAddItem(product)}>
        add to cart
      </button>
      <button type="submit" onClick={() => handleRemoveItem(product)}>
        remove to cart
      </button>
    </>
  );
}

export default Button;
