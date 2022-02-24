import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: JSON.parse(localStorage.getItem("products")) || [],
    quantity: JSON.parse(localStorage.getItem("quantity")) || 0,
    total: JSON.parse(localStorage.getItem("total")) || 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
      localStorage.setItem("products", JSON.stringify(state.products));
      localStorage.setItem("quantity", JSON.stringify(state.quantity));
      localStorage.setItem("total", JSON.stringify(state.total));
    },
  },
});
export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
