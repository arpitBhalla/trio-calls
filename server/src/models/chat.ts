import { Schema, model } from "mongoose";
import { Meeting } from "./meeting";
import { User } from "./user";
export interface Chat {
  _id?: string;
  createdAt?: string;
  message: string;
  displayName: string;
  MID: string | Meeting;
  UID: string | User;
}

const schema = new Schema<Chat>(
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

export const ChatModel = model<Chat>("Chat", schema);
