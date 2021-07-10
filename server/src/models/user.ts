import { Schema, model } from "mongoose";

export interface User {
  displayName: string;
  email: string;
  password: string;
}

const schema = new Schema<User>(
  {
    displayName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const UserModel = model<User>("User", schema);
