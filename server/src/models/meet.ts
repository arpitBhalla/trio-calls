import { Schema, model } from "mongoose";
import { ChatType } from "./chat";

export type MeetType = {
  _id?: string;
  title: string;
  type: "public" | "private";
  time: string;
  hostID: string;
  meetID: string;
  invitees: string[];
  chat: ChatType[];
};

const schema = new Schema<MeetType>(
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

export const Meet = model<MeetType>("Meet", schema);
