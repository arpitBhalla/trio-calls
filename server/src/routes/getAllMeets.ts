import express from "express";
import { Meet } from "../models/meet";
import { User } from "../models/user";

const Router = express.Router();

export const GetMeetAll = Router.use("/", async (req, res) => {
  const { UID } = req.body;

  // get Logged in User
  const user = await User.findById(UID);
  if (!user) {
    return res.status(201).json({
      message: "User Not found",
    });
  }

  // get all meets that user was invited or is host
  const meets = await Meet.find({
    $or: [{ invitees: user.email }, { hostID: UID }],
  })
    .populate({
      path: "chat",
      options: {
        limit: 1,
        sort: { createdAt: -1 },
      },
    })
    .select("title meetID time chat");

  if (!meets.length) {
    return res.status(201).json({
      message: "Meeting Not found",
    });
  }
  console.log(JSON.stringify(meets));
  return res.status(200).json({ meets });
});
