import express from "express";
import { UserModel } from "../models/user";

const Router = express.Router();

export const SignInRoute = Router.post("/", async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email, password });
  if (user) {
    return res.status(200).json({
      message: "Logged in",
      UID: user._id,
      displayName: user.displayName,
      email,
    });
  } else {
    return res.status(201).json({
      message: "Invalid Email or Password",
    });
  }
});
