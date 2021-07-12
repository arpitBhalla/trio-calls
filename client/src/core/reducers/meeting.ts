import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type MeetParticipants = {
  displayName: string;
  isAvail?: boolean;
};

export const meetStore = createSlice({
  name: "meeting",
  initialState: {
    meetDetails: {
      MID: "", // _id of Meet
      meetID: "", // xxxx-xxxx-xxxx
      title: "",
      hostID: "", // _id of host
      type: "" as "private" | "public",
      isHost: false,
    },
    participants: {} as Record<string, MeetParticipants>,
  },
  reducers: {
    updateMeetDetails: (
      state,
      action: PayloadAction<typeof state.meetDetails>
    ) => {
      state.meetDetails = action.payload;
    },
    updateParticipant: (
      state,
      action: PayloadAction<{
        UID: string;
        displayName: string;
      }>
    ) => {
      state.participants[action.payload.UID] = {
        displayName: action.payload.displayName,
        isAvail: true,
      };
    },
    removeParticipant: (
      state,
      action: PayloadAction<{
        UID: string;
      }>
    ) => {
      state.participants[action.payload.UID].isAvail = false;
    },
  },
});

export const { removeParticipant, updateMeetDetails, updateParticipant } =
  meetStore.actions;

export default meetStore.reducer;
