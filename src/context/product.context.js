import { createContext } from "react";

const ProductContext = createContext({
  lookupValue: '',
  information: '',
  match: Boolean,
  getlookUpValue: (value) => {},
  getSearchResults: (value) => { },
  setMatch: () => { }
});

export default ProductContext;