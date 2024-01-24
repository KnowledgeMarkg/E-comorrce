import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : {
        addToCart(state, action) {
            return [...state, action.payload]; // Always return an array
          },          
          deleteFromCart(state, action) {
            return state.filter(item => item.id !== action.payload.id); // Ensure it returns an array
          }          
    }
})

export const {addToCart, deleteFromCart} = cartSlice.actions;

export default cartSlice.reducer;