import { useReducer } from "react";
import productService from "../services/product";
import ProductContext from "./product.context";
import productReducer, {
  GET_LOOKUP_VALUE, SAVE_INFORMATION, DETAILS
} from "./product.reducer";

const ProductState = ({ children }) => {
  const initialState = {
    items: [],
    itemDescription: {},
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  // Función para guardar el value del input en mi contexto
  const getlookUpValue = (value) => {
    dispatch({ type: GET_LOOKUP_VALUE, payload: value });
  };

  /*Función para llamar al servicio getBySearch y guardar lo que retorne en el contexto
   Uso el contexto para tener la información disponible en toda mi App*/
  const getSearchResults = async (search) => {
    const response = await productService.getBySearch(search).then(({ data }) => {
      dispatch({ type: SAVE_INFORMATION, payload: data });
    })
    return response;
  }
  /*Función para llamar al servicio getDetailsProduct el cual retornará
  los detalles del producto*/
  const getDetails = async (idProduct) => {
    const response = await productService.getDetailsProduct(idProduct).then(({ data }) => {
      dispatch({ type: DETAILS, payload: data });
    })
    return response;
  }


  return (
    <ProductContext.Provider
      value={{
        lookupValue: state.lookupValue,
        information: state.information,
        details: state.details,
        getlookUpValue,
        getSearchResults,
        getDetails,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;