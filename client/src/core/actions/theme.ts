import { createSlice } from "@reduxjs/toolkit";

export const themeStore = createSlice({
  name: "counter",
  initialState: {
    theme: "theme",
  },
  reducers: {
    updateTheme: (state, action) => {
      switch (action.payload) {
        case "v1":
          state.theme = "theme";
          break;
      }
    },
  },
});

export const { updateTheme } = themeStore.actions;

export default themeStore.reducer;
