import express from "express";
import { Meet } from "../models/meet";
import { User } from "../models/user";

const Router = express.Router();

export const GetChat = Router.use("/", async (req, res) => {
  const { meetID, UID } = req.body;

  // get Logged in User
  const user = await User.findById(UID);
  if (!user) {
    return res.status(201).json({
      message: "User Not found",
    });
  }

  // get meet from meeting id xxxx-xxxx-xxxx
  const meet = (
    await Meet.find({ meetID }).populate({
      path: "chat",
      options: {
        limit: 20,
        sort: { created: -1 },
      },
    })
  )[0];

  if (!meet) {
    return res.status(201).json({
      message: "Meeting Not found",
    });
  }

  // respond if user is the host or invited by host or meeting is public
  const isInvited =
    String(meet.hostID) === UID ||
    meet.invitees?.includes(user.email) ||
    meet.type === "public";

  if (isInvited) {
    return res.status(200).json({ meetTitle: meet.title, chats: meet.chat });
  } else {
    return res.status(201).json({
      message: "You are not Invited",
    });
  }
});
