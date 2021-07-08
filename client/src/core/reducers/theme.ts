import { createSlice } from "@reduxjs/toolkit";

export const themeStore = createSlice({
  name: "counter",
  initialState: {
    useDark: false,
  },
  reducers: {
    toggleDarkMode: (state, action) => {
      state.useDark = action.payload ?? !state.useDark;
      console.log(state.useDark);
    },
  },
});

export const { toggleDarkMode } = themeStore.actions;

export default themeStore.reducer;
