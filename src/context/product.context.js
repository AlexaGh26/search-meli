import { createContext } from "react";

/* Este es el modelo de mi contexto, en el archivo product.state es donde
 está el codigo de cada uno */

const ProductContext = createContext({
  lookupValue: '',
  information: '',
  match: Boolean,
  getlookUpValue: (value) => {},
  getSearchResults: (value) => { },
  setMatch: () => { }
});

export default ProductContext;