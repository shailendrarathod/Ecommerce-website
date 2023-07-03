import React, { useContext } from "react";
import CartItem from "../components/CartItem";
import CartContext from "../context/cart/cartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((p, c) => {
    return p + c.price;
  }, 0);

  return (
    <>
      <div className="cart-container">
        {cart.length === 0 ? (
          <h2>No Items in Cart</h2>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </div>
          </>
        )}

        <div className="bill-section">
          <h1>
            Total Amount : <br /> <br /> ${total}
          </h1>
          <button className="pay-btn">Pay Now</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
