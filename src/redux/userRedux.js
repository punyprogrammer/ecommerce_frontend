import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser:  JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
    errorMessage: "",
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      localStorage.setItem("user", JSON.stringify(state.currentUser));
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.errorMessage = action.payload;
    },
    logoutUser: (state) => {
      state.currentUser = null;
      localStorage.setItem("user",JSON.stringify(null));
    },
  },
});
export const { loginStart, loginSuccess, loginFailure ,logoutUser} = userSlice.actions;
export default userSlice.reducer;
