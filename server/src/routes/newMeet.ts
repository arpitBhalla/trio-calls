import express from "express";
import { sendMail } from "../utils/sendMail";
import { createEvent } from "ics";
import { MeetModel } from "../models/meeting";
import { generateID } from "../utils/UID";
import { InviteTemplate } from "../email/invite";
import { UserModel } from "../models/user";

const Router = express.Router();

export const NewMeetRoute = Router.post("/", async (req, res) => {
  const { title, invitees, hostID, type, time } = req.body;

  const user = await UserModel.findById(hostID);
  if (!user) {
    return res.status(400).json({
      message: "User not found",
    });
  }
  const Meet = new MeetModel({
    title,
    invitees,
    hostID,
    type,
    time,
    meetID: generateID(),
  });

  try {
    await Meet.save();
  } catch (e) {
    console.trace(e);
    return res.status(201).json({
      message: "Error while saving meeting",
    });
  }

  if (invitees && invitees.length) {
    const now = new Date(Number(time));

    /**
     * Send Invitation to invited User
     */
    const hostedURL = process.env.DEV
      ? "http://localhost:3000/"
      : "http://ms-teams.vercel.app/";
    const chatLink = hostedURL + "chat/" + Meet.meetID;
    const meetLink = hostedURL + Meet.meetID;
    const html = InviteTemplate({
      chatLink,
      meetLink,
      displayName: user.displayName,
      email: user.email,
    });
    /**
     * Create a calender event sent as attachment
     */
    const { value } = createEvent({
      title,
      description: "You are invited for MS Teams meeting",
      start: [
        now.getFullYear(),
        now.getMonth() + 1,
        now.getDate(),
        now.getHours(),
        now.getMinutes(),
      ],
      url: meetLink,
      organizer: { name: user.displayName, email: user.email },
      duration: { minutes: 50 },
    });

    try {
      await sendMail({
        from: "'MS Teams' <teams@arpitbhalla.me>", // sender address
        cc: invitees,
        subject: "You are invited for MS Teams meeting",
        html,
        icalEvent: {
          filename: "invitation.ics",
          method: "request",
          content: value || "",
        },
      });
    } catch {
      return res.status(500).json({
        message: "Error while sending invite email",
      });
    }
  }
  res.status(200).json({ meetID: Meet.meetID });
});
