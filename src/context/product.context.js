import { createContext } from "react";

const ProductContext = createContext({
  lookupValue: '',
  getlookUpValue: (value) => {},
  getSearchResults: (value) => {}
});

export default ProductContext;