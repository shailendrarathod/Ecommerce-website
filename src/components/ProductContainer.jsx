import React, { useContext, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductContext from "../context/product/productContext";
import { fetchProducts } from "../context/product/productAction";

const ProductContainer = () => {
  const { products, dispatch } = useContext(ProductContext);

  const fetchData = async () => {
    const data = await fetchProducts();
    dispatch({
      type: "FETCH_PRODUCTS",
      payload: data,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!products || products.length === 0) {
    return (
      <div className="container">
        <h1 className="all-products title">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="all-products-title">All Products</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductContainer;
