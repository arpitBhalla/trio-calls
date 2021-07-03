import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const authStore = createSlice({
  name: "counter",
  initialState: {
    displayName: "",
    isAuth: false,
  },
  reducers: {
    updateAuth: (state, action: PayloadAction<typeof state>) => {
      state = action.payload;
    },
  },
});

export const { updateAuth } = authStore.actions;

export default authStore.reducer;
