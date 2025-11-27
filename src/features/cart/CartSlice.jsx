import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // cart: [],
cart:[
  {
    pizzaId:12,
  name:'Med',
    quantity:2,
    unitPrice:16,
    totalPrice:42,
  },
]
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart=state.cart.filter(item=>item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
  const item = state.cart.find((item => item.pizzaId === action.payload))
      item.quantity ++
      item.totalPrice= item.quantity * item.unitPrice
    },
    decreaseItemQuantity(state, action) {
      const item= state.cart.find(item=>item.pizzaId === action.payload)
      item.quantity --
      item.totalPrice= item.quantity * item.unitPrice
    },
    clearItem(state) {
      state.cart= []
    }
  }
})

