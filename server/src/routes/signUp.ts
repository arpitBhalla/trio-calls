import express from "express";
import { UserModel } from "../models/user";

const Router = express.Router();

export const SignUpRoute = Router.post("/", async (req, res) => {
  const { displayName, email, password } = req.body;

  const user = new UserModel({ displayName, email, password });
  try {
    await user.save();
    return res.status(200).json({
      message: "User Created",
      UID: user._id,
      displayName,
      email,
    });
  } catch {
    return res.status(400).json({
      message: "Error",
      UID: user._id,
      displayName,
      email,
    });
  }
});
