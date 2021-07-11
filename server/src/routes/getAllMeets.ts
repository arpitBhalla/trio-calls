import express from "express";
import { Meet } from "../models/meet";
import { User } from "../models/user";

const Router = express.Router();

export const GetMeetAll = Router.post("/", async (req, res) => {
  const { UID } = req.body;

  // get Logged in User
  const user = await User.findById(UID);
  if (!user) {
    return res.status(201).json({
      message: "User Not found",
    });
  }

  // get all meets that user was invited
  const meets = await Meet.find({ invitees: user.email });

  if (!meets.length) {
    return res.status(201).json({
      message: "Meeting Not found",
    });
  }

  return res.status(200).json({ meets });
});
