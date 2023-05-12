import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import ButtonRemove from "../components/ButtonRemove";
import ButtonAdd from "../components/ButtonAdd";
import ButtonValide from "../components/ButtonValide";
import Reservation from "../components/Reservation";

function Basket({
  handleAddItem,
  handleRemoveItem,
  handleTest,
  isOpen,
  resetCarts,
  carts,
  showreservation,
}) {
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
    <div className="cart-page-container">
      <article className="cart-container">
        {carts.map((cart) => (
          <div className="cart-box" key={cart.id}>
            <div className="cart-img">
              <img src={cart.image} alt="img category" />
              <p>{cart.name}</p>
            </div>
            <div className="buttons-container">
              <ButtonAdd handleAddItem={handleAddItem} product={cart} />
              <span className="button-quantity" type="button">
                {cart.quantity}
              </span>
              <ButtonRemove
                handleRemoveItem={handleRemoveItem}
                product={cart}
              />
            </div>
            <div className="total-price-container">
              <span>
                {cart.price * cart.quantity} {cart.currency}
              </span>
            </div>
          </div>
        ))}
        <div className="total">
          <span className="text-price">Total du panier</span>
          <span className="price-value">{totalItemsPrice} €</span>
        </div>
      </article>
      {showreservation && (
        <Reservation handleTest={handleTest} resetCarts={resetCarts} />
      )}

      {totalItemsQuantity !== 0 ? (
        <ButtonValide handleTest={handleTest} isOpen={isOpen} />
      ) : null}
    </div>
  );
}
Basket.propTypes = {
  carts: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleAddItem: PropTypes.func.isRequired,
  handleTest: PropTypes.func.isRequired,
  resetCarts: PropTypes.func.isRequired,
  showreservation: PropTypes.func.isRequired,
  isOpen: PropTypes.func.isRequired,
};

export default Basket;
