import { put, takeLatest } from 'redux-saga/effects';
import { getProducts } from '../api/products';
import TYPES from '../types';

function* fetchProducts() {
  try {
    const products = yield getProducts();
    yield put({ type: TYPES.PRODUCTS.SUCCESS, products: products.data });
  } catch(e) {
    yield put({ type: TYPES.PRODUCTS.FAIL, message: e.message });
  }
}

function* productsSaga() {
  yield takeLatest(TYPES.PRODUCTS.FETCH, fetchProducts);
}

export default productsSaga;
