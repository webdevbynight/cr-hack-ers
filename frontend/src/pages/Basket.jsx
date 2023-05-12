import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import ButtonRemove from "../components/ButtonRemove";
import ButtonAdd from "../components/ButtonAdd";

function Basket({ handleAddItem, handleRemoveItem, carts }) {
  const [totalItemsQuantity, setTotalItemsQuantity] = useState(0);
  const [totalItemsPrice, setTotalItemsPrice] = useState(0);
  useEffect(() => {
    if (carts) {
      const totalQuantity = carts.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0);
      setTotalItemsQuantity(totalQuantity);
      const totalPrice = carts.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
      setTotalItemsPrice(totalPrice);
    }
  }, [carts, totalItemsQuantity, totalItemsPrice]);

  return (
    <article className="cart-container">
      {carts.map((cart) => (
        <div className="cart-box" key={cart.id}>
          <div className="cart-img">
            <img src={cart.image} alt="img category" />
            <p>{cart.name}</p>
          </div>
          <div className="buttons-container">
            <ButtonAdd handleAddItem={handleAddItem} product={cart} />
            <button className="button-quantity" type="button">
              {cart.quantity}
            </button>
            <ButtonRemove handleRemoveItem={handleRemoveItem} product={cart} />
          </div>
          <div className="button-remove-container">
            <span>{cart.price * cart.quantity}</span>
          </div>
        </div>
      ))}
      <div className="total">
        <span className="text-price">Total du panier</span>
        <span className="price-value">{totalItemsPrice} €</span>
      </div>
    </article>
  );
}
Basket.propTypes = {
  carts: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleAddItem: PropTypes.func.isRequired,
};

export default Basket;
