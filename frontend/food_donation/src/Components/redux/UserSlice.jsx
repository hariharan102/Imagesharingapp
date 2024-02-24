import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:{
  username: localStorage.getItem('username') || null,
  },
  loggedIn: !!localStorage.getItem("username"),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = { username: action.payload };
      state.loggedIn = true;
      localStorage.setItem("username", action.payload);
    },
    logout: (state) => {
      state.user = { username: null };
      state.loggedIn = false;
      localStorage.clear();
    },

  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;