import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MeetParticipants = {
  UID: string;
  displayName: string;
  isSharing: boolean;
  isAudio: boolean;
  isHost: boolean;
  videoStream: MediaStream;
};

export const meetStore = createSlice({
  name: "meeting",
  initialState: {
    meetID: "",
    title: "",
    myDetails: {} as MeetParticipants,
    participants: [] as MeetParticipants[],
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
