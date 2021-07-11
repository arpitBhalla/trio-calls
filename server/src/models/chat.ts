import { Schema, model } from "mongoose";
import { MeetType } from "./meet";
import { UserType } from "./user";

export type ChatType = {
  _id?: string;
  createdAt?: string;
  message: string;
  displayName: string;
  MID: string | MeetType;
  UID: string | UserType;
};

const schema = new Schema<ChatType>(
  {
    message: { type: String, required: true },
    MID: { type: Schema.Types.ObjectId, ref: "Meet" },
    UID: { type: Schema.Types.ObjectId, ref: "User" },
    displayName: String,
  },
  {
    timestamps: true,
  }
);

export const Chat = model<ChatType>("Chat", schema);
