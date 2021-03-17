export function setProducts(product) {
  return {
    type: 'SET_PRODUCT_LIST',
    payload: product
  }
}

export function storeProduct(product) {
  return {
    type: 'STORE_PRODUCT',
    payload: product
  }
}

export function updateProduct(product) {
  return {
    type: 'UPDATE_PRODUCT',
    payload: product
  }
}

export function deleteProduct(product) {
  return {
    type: 'DELETE_PRODUCT',
    payload: product
  }
}

