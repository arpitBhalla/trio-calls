import express from "express";
import { sendMail } from "./../utils/sendMail";
import { createEvent } from "ics";
import { MeetModel } from "../models/meeting";

const Router = express.Router();

export const InviteRoute = Router.post("/", async (req, res) => {
  const { title, invitees, hostID, type } = req.body;
  const now = new Date();
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
  const Meet = new MeetModel({
    title,
    invitees,
    hostIDa,
    type,
  });
  try {
    await sendMail({
      from: '"MS Teams" <teams-invite@microsoft.com>', // sender address
      cc: invitees,
      subject: "You are invited for MS Teams meeting",
      html: `<h2>Microsoft Teams meeting</h2>

      <h4>Join on your computer/h4>
  
      <a href='${Meet._id}'>Click here to join</a>`,
      icalEvent: {
        filename: "invitation.ics",
        method: "request",
        content: value || "",
      },
    });
  } catch {
    return res.status(500).json({
      message: "Error while sending email",
    });
  }
  try {
    await Meet.save();
  } catch {
    return res.status(500).json({
      message: "Error while saving meeting",
    });
  }

  return res.json({
    status: 200,
    message: "Done",
    meetLink: Meet._id,
  });
});
