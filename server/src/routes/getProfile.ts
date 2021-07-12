import express from "express";
import { User } from "../models/user";

const Router = express.Router();

export const GetProfile = Router.use("/", async (req, res) => {
  const { UID } = req.body;

  const user = await User.findById(UID);

  if (user) {
    return res.status(200).json({
      UID: user._id,
      displayName: user.displayName,
      email: user.email,
    });
  } else {
    return res.status(201).json({
      message: "Invalid Email or Password",
    });
  }
});
