import Button from '../../ui/Button.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from './CartSlice.jsx';

function UpdateItemQuantity({ pizzaId }) {
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <p className="text-base font-bold">{currentQuantity}</p>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
