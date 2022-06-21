import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Chat } from "@arpitbhalla/trio-calls/utils/types";

export const chatStore = createSlice({
  name: "meeting",
  initialState: {
    chat: [] as Chat[],
  },
  reducers: {
    initialChat: (state, action: PayloadAction<Chat[]>) => {
      state.chat.push(...action.payload);
    },
    addChat: (state, action: PayloadAction<Chat>) => {
      state.chat.push(action.payload);
    },
    clearChat: (state) => {
      state.chat = [];
    },
  },
});

export const { addChat, clearChat, initialChat } = chatStore.actions;

export default chatStore.reducer;
