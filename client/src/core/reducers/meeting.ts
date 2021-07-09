import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// State for meeting & other participants

export type MeetParticipants = {
  UID: string; // _id of user
  displayName: string;
  isSharing: boolean;
  isAudio: boolean;
  isHost: boolean;
};

export type Chat = {
  MID: string;
  UID: string;
  displayName: string;
  message: string;
  time: string;
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
    },
    participants: {} as Map<string, MeetParticipants>,
    chat: {} as Set<Chat>,
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
    updateChat: (state, action: PayloadAction<Chat>) => {
      state.chat.add(action.payload);
    },
  },
});

export const {
  removeParticipant,
  updateChat,
  updateMeetDetails,
  updateParticipant,
} = meetStore.actions;

export default meetStore.reducer;
