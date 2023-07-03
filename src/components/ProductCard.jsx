import React, { useContext } from "react";
import CartContext from "../context/cart/cartContext";

const ProductCard = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  const handleAdd = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  return (
    <div className="product">
      <img src={product.image} alt="" />
      <h1>{product.title} </h1>
      <span>
        <h3>Price : {product.price}</h3>
        <button className="add_cart" onClick={() => handleAdd(product)}>
          Add to cart
        </button>
      </span>
    </div>
  );
};

export default ProductCard;
