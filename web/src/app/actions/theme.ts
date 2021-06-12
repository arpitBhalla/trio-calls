import { PartialTheme } from "@fluentui/react";
import { createSlice } from "@reduxjs/toolkit";

const theme: PartialTheme = {
  semanticColors: {},
};

export const themeStore = createSlice({
  name: "counter",
  initialState: {
    useDark: false,
    theme,
  },
  reducers: {
    darkMode: (state, action) => {
      state.useDark = action.payload;
    },
    updateTheme: (state, action) => {
      state.theme += action.payload;
    },
  },
});

export const { darkMode, updateTheme } = themeStore.actions;

export default themeStore.reducer;
