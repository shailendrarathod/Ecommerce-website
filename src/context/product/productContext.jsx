import { createContext, useReducer } from "react";
import ProductReducer from "./productReducer";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const initialState = {
    products: [],
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  return (
    <ProductContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
