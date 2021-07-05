import express from "express";
import { MeetModel } from "../models/meeting";
import { UserModel } from "../models/user";

const Router = express.Router();

export const GetMeetRoute = Router.post("/", async (req, res) => {
  const { meetID, UID } = req.body;

  const user = await UserModel.findById(UID);
  if (!user) {
    return res.status(400).json({
      message: "User Not found",
    });
  }
  const meet = (await MeetModel.find({ meetID }).populate(["hostID"]))[0];

  if (!meet) {
    return res.status(400).json({
      message: "Meeting Not found",
    });
  }

  const isInvited =
    // @ts-ignore
    String(meet.hostID._id) === UID ||
    meet.invitees?.includes(user.email) ||
    meet.type === "public";

  if (isInvited) {
    return res.status(200).json(meet);
  } else {
    return res.status(400).json({
      message: "User not Invited",
    });
  }
});
