import express from "express";
import { User as User } from "../models/user";
import bcrypt from "bcryptjs";

const Router = express.Router();

export const SignUp = Router.use("/", async (req, res) => {
  const { displayName, email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(201).json({
      message: "User already Exists",
    });
  }
  const hashedPw = await bcrypt.hash(password, 12);
  const user = new User({ displayName, email, password: hashedPw });
  try {
    await user.save();
    return res.status(200).json({
      message: "User Created",
      UID: user._id,
      displayName,
      email,
    });
  } catch {
    return res.status(201).json({
      message: "Unable to create user",
    });
  }
});
