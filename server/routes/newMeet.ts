import express from "express";
import { sendMail } from "../utils/sendMail";
import { createEvent } from "ics";
import { MeetModel } from "../models/meeting";
import { generateID } from "../utils/UID";

const Router = express.Router();

export const NewMeetRoute = Router.post("/", async (req, res) => {
  const { title, invitees, hostID, type, time } = req.body;

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
      duration: { minutes: 50 },
    });

    /**
     * Send Invitation to invited User
     */
    try {
      await sendMail({
        from: '"MS Teams" <teams@arpitbhalla.me>', // sender address
        cc: invitees,
        subject: "You are invited for MS Teams meeting",
        html: `<h2>Microsoft Teams meeting</h2>

      <h4>Join on your computer</h4>
  
      <a href='https://ms-teams.vercel.app/${Meet.meetID}'>Click here to join</a>`,
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
