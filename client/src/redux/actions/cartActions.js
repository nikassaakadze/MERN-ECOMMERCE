import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (id) => async (dispatch, getState) => {

  dispatch({type: actionTypes.TRY_TO_ADD_CART})

  const { data } = await axios.get(`/api/products/${id}`);
  
    dispatch({
      type: actionTypes.ADD_TO_CART,
        payload: {
          product: data._id,
          name: data.name,
          imageUrl: data.imageUrl,
          price: data.price,
          countInStock: data.countInStock
        },
    });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {

  dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
