import { createSlice, createSelector } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, imageUrl, productName, productPrice, quantity } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
    
      if (existingItem) {
        existingItem.quantity += quantity; // Update the quantity of the existing item
      } else {
        state.cart.push({
          id,
          imageUrl,
          productName,
          productPrice,
          quantity,
        });
      }
    },
    removeFromCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          // Remove the item from the cart only if its count is 1
          state.cart = state.cart.filter((item) => item.id !== id);
        }
      }
    },
  },
});

export default CartSlice.reducer;
export const { addToCart, removeFromCart } = CartSlice.actions;
