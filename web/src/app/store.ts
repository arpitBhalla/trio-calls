import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./actions/theme";

export default configureStore({
  reducer: {
    theme: themeReducer,
  },
});
