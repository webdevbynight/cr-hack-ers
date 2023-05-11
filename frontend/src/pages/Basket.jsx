/* eslint-disable react/prop-types */
/* eslint-disable no-return-assign */
import { useEffect, useState } from "react";
import Button from "../components/ButtonCart";

function Basket({ handleAddItem, handleRemoveItem, carts }) {
  const [totalItemsQuantity, setTotalItemsQuantity] = useState(0);
  const [totalItemsPrice, setTotalItemsPrice] = useState(0);
  useEffect(() => {
    if (carts) {
      const totalQuantity = carts.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0);
      const totalPrice = carts.reduce((acc, item) => {
        return item.price;
      }, 0);
      setTotalItemsQuantity(totalQuantity);
      setTotalItemsPrice(totalPrice);
    }
  }, [carts, totalItemsQuantity]);
  console.info(carts);
  return (
    <article className="cart-container">
      {carts.map((cart) => (
        <div className="cart-box" key={cart.id}>
          <div className="cart-img">
            <img src={cart.img} alt="" />
            <p>{cart.title}</p>
          </div>
          <div className="buttons-container">
            <Button
              handleAddItem={handleAddItem}
              handleRemoveItem={handleRemoveItem}
              product={cart}
            />
            <button className="button-quantity" type="button">
              {cart.quantity}
            </button>
          </div>
          <div className="button-remove-container">
            <span>{cart.price * cart.quantity}</span>
          </div>
        </div>
      ))}
      <div className="total">
        <span className="text-price">
          {totalItemsQuantity * totalItemsPrice}
        </span>
        <span className="price-value">price €</span>
      </div>
    </article>
  );
}

export default Basket;
