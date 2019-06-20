import { ADD_TO_CART, UPDATE_CART, DELETE_FROM_CART } from '../actions/cart-actions';

const initialState = {
  cart: [
    {
      name: '手机',
      count: 1,
      price: 2299,
    },
    {
      name: '电脑',
      count: 1,
      price: 6999,
    }
  ]
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    }
    case UPDATE_CART: {
      return {
        ...state,
        cart: state.cart.map(item =>
          item.name === action.payload.name ? action.payload : item
        )
      }
    }
    case DELETE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter(item =>
          item.name !== action.payload.name
        )
      }
    }
    default:
      return state;
  }
}