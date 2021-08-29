export const GET_LOOKUP_VALUE = "GET_LOOKUP_VALUE"; 
export const SAVE_INFORMATION = "SAVE_INFORMATION";
export const NO_MATCH = "NO_MATCH";

/* Este reducer es para crear las acciones y guardar la info que llegue como la configure */
const productReducer = (state, action) => {
    const { payload, type } = action;
    
    switch (type) {
      case GET_LOOKUP_VALUE:
        return {
          ...state,
          lookupValue: payload,
        };
      case SAVE_INFORMATION:
        return {
          ...state,
          information: payload,
        };
      default:
        return state;
    }
  };

  export default productReducer;