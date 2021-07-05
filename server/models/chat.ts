import { Schema, model } from "mongoose";
import { User } from "./user";

export interface Chat {
  message: string;
  time: string;
  meetID: string;
  UID: string;
}

const schema = new Schema<Chat>({
  message: { type: String, required: true },
  time: { type: String, required: true },
  MID: { type: Schema.Types.ObjectId, ref: "Meet", required: "true" },
  UID: { type: Schema.Types.ObjectId, ref: "User" },
});

export const ChatModel = model<Chat>("Chat", schema);
