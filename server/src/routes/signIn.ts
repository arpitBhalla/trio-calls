import express from "express";
import { User } from "../models/user";
import bcrypt from "bcryptjs";

const Router = express.Router();

export const SignIn = Router.use("/", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(201).json({
      message: "User not registered",
    });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(201).json({
      message: "Invalid Email or Password",
    });
  }
  return res.status(200).json({
    message: "Logged in",
    UID: user._id,
    displayName: user.displayName,
    email,
  });
});
