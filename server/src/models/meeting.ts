import { Schema, model } from "mongoose";
import { Chat } from "./chat";

export interface Meeting {
  _id?: string;
  title: string;
  type: "public" | "private";
  time: string;
  hostID: string;
  meetID: string;
  invitees: string[];
  chat: Chat[];
}

const schema = new Schema<Meeting>(
  {
    title: String,
    hostID: { type: Schema.Types.ObjectId, ref: "User" },
    invitees: [{ type: String }],
    type: { type: String, enum: ["public", "private"] },
    meetID: { type: String, required: true, unique: true },
    time: String,
    chat: [{ type: Schema.Types.ObjectId, ref: "Chat" }],
  },
  {
    timestamps: true,
  }
);

export const MeetModel = model<Meeting>("Meet", schema);
