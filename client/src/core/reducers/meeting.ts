import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type MeetParticipants = {
  UID: string; // _id of user
  displayName: string;
  isSharing: boolean;
  isAudio: boolean;
  isHost: boolean;
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
    participants: {} as Map<string, MeetParticipants>,
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
        participantDetails: MeetParticipants;
      }>
    ) => {
      state.participants.set(
        action.payload.UID,
        action.payload.participantDetails
      );
    },
    removeParticipant: (
      state,
      action: PayloadAction<{
        UID: string;
      }>
    ) => {
      state.participants.delete(action.payload.UID);
    },
  },
});

export const { removeParticipant, updateMeetDetails, updateParticipant } =
  meetStore.actions;

export default meetStore.reducer;
