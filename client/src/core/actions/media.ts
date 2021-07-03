import { createSlice } from "@reduxjs/toolkit";

export const mediaStore = createSlice({
  name: "counter",
  initialState: {
    isAudio: false,
    isVideo: false,
    isHand: false,
    isScreenShare: false,
  },
  reducers: {
    toggleAudio: (state, action) => {
      state.isAudio = action.payload ?? !state.isAudio;
    },
    toggleVideo: (state, action) => {
      state.isVideo = action.payload ?? !state.isVideo;
    },
    toggleHand: (state, action) => {
      state.isHand = action.payload ?? !state.isHand;
    },
    toggleScreen: (state, action) => {
      state.isScreenShare = action.payload ?? !state.isScreenShare;
    },
  },
});

export const { toggleAudio, toggleHand, toggleVideo, toggleScreen } =
  mediaStore.actions;

export default mediaStore.reducer;
