// Test ID: IIDSAT

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import { getOrder } from '../../services/apiRestaurant.js';
import { useLoaderData } from 'react-router';
import OrderItem from './OrderItem.jsx';

function Order() {
  const order = useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-3xl font-bold">Order #{id} Status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-bold uppercase tracking-wide text-red-50">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-600 px-3 py-1 text-sm font-bold uppercase tracking-wide text-red-50">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-300 px-6 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-sm text-stone-600">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>
      <ul className="divide-y divide-stone-300 border-b-2 border-t border-stone-300">
        {cart.map((item) => (
          <OrderItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="space-y-3 bg-stone-300 px-6 py-5">
        <p className="text-sm font-medium text-stone-700">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-700">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export default Order;

export async function loader({ params: { orderId } }) {
  return getOrder(orderId);
}
