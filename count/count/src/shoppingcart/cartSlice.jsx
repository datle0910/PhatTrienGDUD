import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);
      
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }
    },

    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);
      
      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
