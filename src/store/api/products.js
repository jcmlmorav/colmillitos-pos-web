const PRODUCTS_API = 'http://colmillitosapi.local/api/products';

export const getProducts = () => (
  fetch(PRODUCTS_API)
  .then(response => response.json())
);

export const getProduct = (value) => (
  fetch(`${PRODUCTS_API}/${value}`)
  .then(response => response.json())
);
