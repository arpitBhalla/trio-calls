import { teamsTheme, teamsDarkTheme } from "@fluentui/react-northstar";
import { createSlice } from "@reduxjs/toolkit";

export const themeStore = createSlice({
  name: "counter",
  initialState: {
    theme: teamsTheme,
  },
  reducers: {
    updateTheme: (state, action) => {
      switch (action.payload) {
        case "v1":
          state.theme = teamsTheme;
          break;
        case "v1Dark":
          state.theme = teamsDarkTheme;
          break;
      }
    },
  },
});

export const { updateTheme } = themeStore.actions;

export default themeStore.reducer;
