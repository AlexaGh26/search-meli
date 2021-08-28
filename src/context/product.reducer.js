export const GET_LOOKUP_VALUE = "GET_LOOKUP_VALUE"; 
export const SAVE_INFORMATION = "SAVE_INFORMATION";
export const NO_MATCH = "NO_MATCH";

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
      case NO_MATCH:
        return {
          ...state,
          match: payload,
        };
      default:
        return state;
    }
  };

  export default productReducer;