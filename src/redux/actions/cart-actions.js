export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

export function addToCart(name, count, price) {
  return {
    type: ADD_TO_CART,
    payload: { 
      name,
      count,
      price
    }
  }
}

export function updateCart(name, count, price) {
  return {
    type: UPDATE_CART,
    payload: {
      name,
      count,
      price
    }
  }
}

export function deleteFromCart(name) {
  return {
    type: DELETE_FROM_CART,
    payload: {
      name
    }
  }
}