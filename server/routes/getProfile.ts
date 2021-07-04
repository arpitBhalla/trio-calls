import express from "express";
import { UserModel } from "../models/user";

const Router = express.Router();

export const SignInRoute = Router.post("/", async (req, res) => {
  const { UID } = req.body;

  const user = await UserModel.findById(UID);

  if (user) {
    return res.json({
      status: 200,
      message: "Done",
      UID: user._id,
      displayName: user.displayName,
      email: user.email,
    });
  } else {
    return res.json({
      status: 400,
      message: "Invalid Email or Password",
    });
  }
});
