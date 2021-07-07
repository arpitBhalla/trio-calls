import express from "express";
import { UserModel } from "../models/user";

const Router = express.Router();

export const GetProfileRoute = Router.post("/", async (req, res) => {
  const { UID } = req.body;

  const user = await UserModel.findById(UID);

  if (user) {
    return res.status(200).json({
      UID: user._id,
      displayName: user.displayName,
      email: user.email,
    });
  } else {
    return res.status(400).json({
      message: "Invalid Email or Password",
    });
  }
});
