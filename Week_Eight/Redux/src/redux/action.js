import axios from "axios";

export const getProducts = () => (dispatch) => {
   axios
      .get("https://fakestoreapi.com/products")
      .then((res) => dispatch({ type: "GOT_PRODUCTS", payload: res.data }))
      .catch((error) => dispatch({ type: "ERROR", payload: error }));
};
