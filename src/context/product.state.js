import { useReducer } from "react";
import productService from "../services/product";
import ProductContext from "./product.context";
import productReducer, {
  GET_LOOKUP_VALUE,
} from "./product.reducer";

const ProductState = ({ children }) => {
  const initialState = {
    items: [],
    itemDescription: {},
  };

  const [state, dispatch] = useReducer(productReducer, initialState);


  const getlookUpValue = (value) => {
    dispatch({ type: GET_LOOKUP_VALUE, payload: value });
  };

  const getSearchResults = async (search) => {
    const response = await productService.getBySearch(search);
  }

  return (
    <ProductContext.Provider
      value={{
        lookupValue: state.lookupValue,
        getlookUpValue,
        getSearchResults
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;