import express from "express";
import { MeetModel } from "../models/meeting";
import { UserModel } from "../models/user";
import { ChatModel } from "../models/chat";

const Router = express.Router();

export const GetMeetRoute = Router.post("/", async (req, res) => {
  const { meetID, UID } = req.body;
  ChatModel.find();
  // get Logged in User
  const user = await UserModel.findById(UID);
  if (!user) {
    return res.status(201).json({
      message: "User Not found",
    });
  }

  // get meet from meeting id xxxx-xxxx-xxxx
  const meet = (await MeetModel.find({ meetID }).populate(["chat"]))[0];

  if (!meet) {
    return res.status(201).json({
      message: "Meeting Not found",
    });
  }

  // respond if user is the host or invited by host or meeting is public
  const isInvited =
    String((meet.hostID as any)._id) === UID ||
    meet.invitees?.includes(user.email) ||
    meet.type === "public";

  if (isInvited) {
    return res.status(200).json(meet);
  } else {
    return res.status(201).json({
      message: "You are not Invited",
    });
  }
});
