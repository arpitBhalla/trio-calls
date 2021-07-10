import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const authStore = createSlice({
  name: "auth",
  initialState: {
    displayName: "",
    UID: "",
    isAuth: false,
    email: "",
  },
  reducers: {
    updateAuth: (state, action: PayloadAction<typeof state>) => {
      state.isAuth = action.payload.isAuth;
      state.displayName = action.payload.displayName;
      state.UID = action.payload.UID;
      state.email = action.payload.email;
    },
  },
});

export const { updateAuth } = authStore.actions;

export default authStore.reducer;
