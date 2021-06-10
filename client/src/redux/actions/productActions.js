import * as actionTypes from "../constants/productsConstants";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

    const { data } = await axios.get("/api/products");

    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
    
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const rateProduct = (id, rate) => async (dispatch) => {
  try{
    
    dispatch({ type: actionTypes.RATE_PRODUCT_REQUEST })

    await axios.put(`/api/products/rate/${id}`, {rate: rate})
    .then(
      dispatch({ type: actionTypes.RATE_PRODUCT_SUCCESS })
    )
  }catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export const getProductByCategory = (category) => async (dispatch) => {
  try {

    dispatch( { type: actionTypes.GET_PRODUCTS_BY_CATEGORY_REQUEST } )

    await axios.get('/api/products').then(response => {
      dispatch( { type: actionTypes.GET_PRODUCTS_BY_CATEGORY_SUCCESS, payload: response.data } )
    })

  }catch (error){
    dispatch({
      type: actionTypes.GET_PRODUCTS_BY_CATEGORY_RESPONSE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export const addProductToCompare = (id) => async (dispatch) => {
  try{
    const {data} = await axios.get(`/api/products/${id}`)

    dispatch({type: actionTypes.ADD_PRODUCT_TO_COMPARE, payload: data})
    
  }catch(error) {
    console.log(error)
  }
}

export const removeProductDetails = () => (dispatch) => {
  dispatch({ type: actionTypes.PRODUCT_UNMOUNT });
};