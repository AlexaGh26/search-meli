import { useReducer } from "react";
import productService from "../services/product";
import ProductContext from "./product.context";
import productReducer, {
  GET_LOOKUP_VALUE, SAVE_INFORMATION, NO_MATCH,
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

  const setMatch = () => {
    dispatch({ type: NO_MATCH, payload: undefined });
  }

  const getSearchResults = async (search) => {

    const response = await productService.getBySearch(search).then(({ data: { results } }) => {
      dispatch({ type: SAVE_INFORMATION, payload: results });
      dispatch({ type: NO_MATCH, payload: true });
    })
    if (response === undefined) {
      dispatch({ type: NO_MATCH, payload: false });
    }
    console.log(response);
  }



  return (
    <ProductContext.Provider
      value={{
        lookupValue: state.lookupValue,
        information: state.information,
        match: state.match,
        getlookUpValue,
        getSearchResults,
        setMatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;