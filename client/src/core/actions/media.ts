import { createSlice } from "@reduxjs/toolkit";

export const mediaStore = createSlice({
  name: "counter",
  initialState: {
    isAudio: false,
    isVideo: false,
    isHand: false,
  },
  reducers: {
    toggleAudio: (state, action) => {
      state.isAudio = action.payload ?? !state.isAudio;
    },
    toggleVideo: (state, action) => {
      state.isVideo = !state.isVideo;
    },
    toggleHand: (state, action) => {
      state.isHand = !state.isHand;
    },
  },
});

export const { toggleAudio, toggleHand, toggleVideo } = mediaStore.actions;

export default mediaStore.reducer;
