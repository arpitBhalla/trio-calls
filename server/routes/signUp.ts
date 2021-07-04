import express from "express";
import { UserModel } from "../models/user";

const Router = express.Router();

export const SignUpRoute = Router.post("/", async (req, res) => {
  const { displayName, email, password } = req.body;

  const user = new UserModel({ displayName, email, password });

  await user.save();

  return res.json({
    status: 200,
    message: "Done",
    UID: user._id,
    displayName,
    email,
  });
});
