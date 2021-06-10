import * as actionTypes from "../constants/productsConstants";

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        products: action.payload,
        loading: false,
      };
    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.PRODUCT_UNMOUNT:
      return {products: []}
    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
        product: {}
      };
    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.PRODUCT_UNMOUNT:
      return {
        product: {},
      };
    default:
      return state;
  }
};

export const getProductByCategoryReducer = (state = {products: []}, action) => {
  switch(action.type){
    case 'GET_PRODUCTS_BY_CATEGORY_REQUEST':
      return {
        loading: true
      }
    case 'GET_PRODUCTS_BY_CATEGORY_SUCCESS':
      return{
        loading: false,
        products: action.payload
      }
    case 'GET_PRODUCTS_BY_CATEGORY_RESPONSE_FAIL':
      return{
        loading: false,
        error: action.payload
      }
    default: return state
  }
}

export const rateProduct = (state = {}, action) => {
  switch(action.type){
    case 'RATE_PRODUCT_REQUEST':
      return{
        loading: true
      }
    case 'RATE_PRODUCT_SUCCESS':
      return {
        loading: false
      }
    default: return state
  }
}

export const compareProducts = (state = {products: []}, action) => {
  switch(action.type){
    case 'ADD_PRODUCT_TO_COMPARE':
      return {
        products: action.payload
      }
    default: return state
  }
}