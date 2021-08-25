export const GET_LOOKUP_VALUE = "GET_LOOKUP_VALUE"; 

const productReducer = (state, action) => {
    const { payload, type } = action;
    
    switch (type) {
      case GET_LOOKUP_VALUE:
        return {
          ...state,
          lookupValue: payload,
        };
      default:
        return state;
    }
  };

  export default productReducer;