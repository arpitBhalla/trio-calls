import express from "express";
import { sendInvite } from "./../utils/sendMail";

const Router = express.Router();

export const InviteRoute = Router.post("/", async (req, res) => {
  const { title } = req.body;
  const now = new Date();

  await sendInvite(
    "arpit@gmail.com",
    "saf",
    `<h2>Microsoft Teams meeting</h2>

<h4>Join on your computer/h4>

<a href={${"sad"}}>Click here</a>`,
    {
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
    }
  );
  res.json({
    status: 200,
    message: "Done",
  });
});
