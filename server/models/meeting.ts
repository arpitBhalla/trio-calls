import { Schema, model } from "mongoose";
import { User } from "./user";

export interface Meeting {
  title: string;
  hostID: User;
  invitees: string[];
  type: "public" | "private";
}

const schema = new Schema<Meeting>({
  title: String,
  hostID: { type: Schema.Types.ObjectId, ref: "User" },
  invitees: [{ type: String }],
  type: { type: String, enum: ["public", "private"] },
});

export const MeetModel = model<Meeting>("Meet", schema);
