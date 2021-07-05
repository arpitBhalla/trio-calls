import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MeetParticipants = {
  UID: string; // _id of user
  displayName: string;
  isSharing: boolean;
  isAudio: boolean;
  isHost: boolean;
  videoStream: MediaStream;
};

type Chat = {
  MID: string;
  displayName: string;
  message: string;
  time: string;
};

export const meetStore = createSlice({
  name: "meeting",
  initialState: {
    MID: "", // _id of Meet
    meetID: "", // xxxx-xxxx-xxxx
    title: "",
    hostID: "", // _id of host
    type: "" as "private" | "public",
    participants: [] as MeetParticipants[],
    chat: [] as Chat[],
  },
  reducers: {
    updateAuth: (state, action: PayloadAction<typeof state>) => {
      // state.isAuth = action.payload.isAuth;
      // state.displayName = action.payload.displayName;
    },
  },
});

export const { updateAuth } = meetStore.actions;

export default meetStore.reducer;
