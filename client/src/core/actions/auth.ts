import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const authStore = createSlice({
  name: "counter",
  initialState: {
    displayName: "",
    UID: "",
    isAuth: false,
  },
  reducers: {
    updateAuth: (state, action: PayloadAction<typeof state>) => {
      state.isAuth = action.payload.isAuth;
      state.displayName = action.payload.displayName;
    },
  },
});

export const { updateAuth } = authStore.actions;

export default authStore.reducer;
