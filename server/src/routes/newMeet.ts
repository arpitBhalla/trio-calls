import express from "express";
import { sendMail } from "../utils/sendMail";
import { createEvent } from "ics";
import { Meet } from "../models";
import { generateID } from "../utils/UID";
import { InviteTemplate } from "../email/invite";
import { User } from "../models/user";

const Router = express.Router();

export const NewMeet = Router.use("/", async (req, res) => {
  const { title, invitees, hostID, type, time } = req.body;

  const user = await User.findById(hostID);
  if (!user) {
    return res.status(201).json({
      message: "User not found",
    });
  }

  const meetID = generateID();
  const meet = new Meet({
    title: title || meetID,
    invitees,
    hostID,
    type,
    time,
    meetID,
  });

  try {
    await meet.save();
  } catch (e) {
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
      : "http://trio-calls.vercel.app/";
    const chatLink = hostedURL + "chat/" + meet.meetID;
    const meetLink = hostedURL + meet.meetID;
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
      title: title || "Trio Calls Meet",
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
        from: "'Trio Calls' <teams@arpitbhalla.me>", // sender address
        cc: invitees,
        subject: "You are invited for Trio Calls meeting",
        html,
        icalEvent: {
          filename: "invitation.ics",
          method: "request",
          content: value || "",
        },
      });
    } catch {
      return res.status(201).json({
        message: "Error while sending invite email",
      });
    }
  }
  res.status(200).json({ meetID: meet.meetID });
});
