import TYPES from '../types';

const initState = {
  fetching: false,
  products: [],
  fail: false
};

export default function productsReducer(state = initState, action) {
  switch(action.type) {
    case TYPES.PRODUCTS.FETCH:
    case TYPES.PRODUCT.FETCH:
      return {
        ...state,
        fetching: true,
        products: [],
        fail: false
      }
    case TYPES.PRODUCTS.SUCCESS:
    case TYPES.PRODUCT.SUCCESS:
      return {
        ...state,
        fetching: false,
        products: action.products
      }
    case TYPES.PRODUCTS.FAIL:
    case TYPES.PRODUCT.FAIL:
      return {
        ...state,
        fetching: false,
        products: [],
        fail: action.message
      }
    default:
      return state;
  }
}
