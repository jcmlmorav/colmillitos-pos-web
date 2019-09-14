import { put, takeLatest } from 'redux-saga/effects';
import { getProduct } from '../api/products';
import TYPES from '../types';

function* fetchProduct(payload) {
  try {
    const products = yield getProduct(payload.value);
    let data = products.data;

    if (Object.keys(data).length === 8) {
      data = new Array(data);
    }

    yield put({ type: TYPES.PRODUCT.SUCCESS, products: data });
  } catch(e) {
    yield put({ type: TYPES.PRODUCT.FAIL, message: e.message });
  }
}

function* productSaga() {
  yield takeLatest(TYPES.PRODUCT.FETCH, fetchProduct);
}

export default productSaga;
