import { configureStore } from "@reduxjs/toolkit";
import mediaReducer from "core/actions/media";
import authReducer from "core/actions/auth";
import themeReducer from "core/actions/theme";
import meetReducer from "core/actions/meeting";

const store = configureStore({
  reducer: {
    mediaReducer,
    authReducer,
    themeReducer,
    meetReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
