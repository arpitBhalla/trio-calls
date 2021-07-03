import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "core/actions/theme";
import mediaReducer from "core/actions/media";

const store = configureStore({
  reducer: {
    themeReducer,
    mediaReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
