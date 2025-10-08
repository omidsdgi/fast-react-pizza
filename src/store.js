import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice.js';
import cartSlice from './features/cart/CartSlice.jsx';

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
  },
});
export default store;
