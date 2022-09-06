const initialState = {
   products: [],
   error: "",
};

export const reducer = (state = initialState, action) => {
   switch (action.type) {
      case "GOT_PRODUCTS":
         return { ...state, products: action.payload };

      case "ERROR":
         return { ...state, error: action.payload };
      default:
         return state;
   }
};
