import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth";
import { campusReducer } from "./reducers/campus";

export const store = configureStore({
  reducer: {
    authState: authReducer,
    campusState: campusReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
