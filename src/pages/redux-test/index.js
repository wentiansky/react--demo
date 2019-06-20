import store from '../../redux/store';
import { addToCart, updateCart, deleteFromCart } from '../../redux/actions/cart-actions';

console.log('initial state: ', store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

// add to cart
store.dispatch(addToCart('T恤', 2, 198));
store.dispatch(addToCart('鞋子', 1, 200));

// update cart
store.dispatch(updateCart('电脑', 1, 9999));

// delete from cart
store.dispatch(deleteFromCart('手机'));

unsubscribe();

// export default print;
