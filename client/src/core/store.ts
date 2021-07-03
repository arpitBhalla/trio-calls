import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "core/actions/theme";
import mediaReducer from "core/actions/media";
import authReducer from "core/actions/auth";

const store = configureStore({
  reducer: {
    themeReducer,
    mediaReducer,
    authReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
