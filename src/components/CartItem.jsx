import React, { useContext } from "react";
import CartContext from "../context/cart/cartContext";

const CartItem = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  const handleDelete = (id) => {
    dispatch({
      type: "REMOVE_CART_ITEM",
      payload: id,
    });
  };

  return (
    <div className="cart-item">
      <img src={product.image} alt="" />
      <span>
        <h1>{product.title}</h1>
        <h3>Rate : ${product.price}</h3>
        <h3>Qty : 1</h3>
      </span>
      <button className="remove-btn" onClick={() => handleDelete(product.id)}>
        Remove Item
      </button>
    </div>
  );
};

export default CartItem;
