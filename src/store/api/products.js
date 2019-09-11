const PRODUCTS_API = 'http://colmillitosapi.local/api';

export const getProducts = () => (
  fetch(`${PRODUCTS_API}/products`)
  .then(response => response.json())
);
