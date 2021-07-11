import { Schema, model } from "mongoose";

export type UserType = {
  displayName: string;
  email: string;
  password: string;
};

const schema = new Schema<UserType>(
  {
    displayName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const User = model<UserType>("User", schema);
