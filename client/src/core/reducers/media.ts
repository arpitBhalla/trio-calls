import { createSlice } from "@reduxjs/toolkit";
// State for Active User
export const mediaStore = createSlice({
  name: "mediaDevices",
  initialState: {
    isAudio: true,
    isVideo: true,
    isHand: false,
    isScreenShare: false,
    isWhiteBoard: false,
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
    toggleWhiteBoard: (state, action) => {
      state.isWhiteBoard = action.payload ?? !state.isWhiteBoard;
    },
  },
});

export const {
  toggleAudio,
  toggleHand,
  toggleVideo,
  toggleScreen,
  toggleWhiteBoard,
} = mediaStore.actions;

export default mediaStore.reducer;
