import LinkButton from '../../ui/LinkButton.jsx';
import Button from '../../ui/Button.jsx';
import CartItem from './CartItem.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './CartSlice.jsx';
import EmptyCart from './EmptyCart.jsx';

function Cart() {
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  const cart = useSelector(getCart);

  if (cart.length === 0) return <EmptyCart />;
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-2xl font-bold">Your cart,{username}</h2>

      {
        <ul className="mt-3 divide-y divide-stone-300 border-b border-stone-300">
          {cart.map((item) => (
            <CartItem key={item.pizzaId} item={item} />
          ))}
        </ul>
      }

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
