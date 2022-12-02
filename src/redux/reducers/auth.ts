import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  userId: string | null;
  token: string | null;
}

const initialState: AuthState = {
  userId: localStorage.getItem("userId"),
  token: localStorage.getItem("token"),
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials(state, action) {
      const { userId, token } = action.payload;
      state.userId = userId;
      state.token = token;
      localStorage.setItem("userId", userId);
      localStorage.setItem("token", token);
    },
    logout(state) {
      state.userId = null;
      state.token = null;
      localStorage.clear();
    },
  },
});

export const { setCredentials, logout } = auth.actions;

export const authReducer = auth.reducer;
