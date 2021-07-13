import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PollType } from "pages/meet/dashboard/components/SidePanel/Poll/PollType";

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
    poll: {} as PollType,
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
    updatePoll: (state, action: PayloadAction<PollType>) => {
      state.poll = action.payload;
    },
  },
});

export const {
  removeParticipant,
  updateMeetDetails,
  updateParticipant,
  updatePoll,
} = meetStore.actions;

export default meetStore.reducer;
