import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "actions/theme";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
