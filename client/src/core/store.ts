import { configureStore } from "@reduxjs/toolkit";
import mediaReducer from "core/reducers/media";
import authReducer from "core/reducers/auth";
import themeReducer from "core/reducers/theme";
import meetReducer from "core/reducers/meeting";
import chatReducer from "core/reducers/chat";

const store = configureStore({
  reducer: {
    mediaReducer,
    authReducer,
    themeReducer,
    meetReducer,
    chatReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
