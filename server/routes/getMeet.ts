import express from "express";
import { MeetModel } from "../models/meeting";

const Router = express.Router();

export const GetMeetRoute = Router.post("/", async (req, res) => {
  const { meetID } = req.body;

  const meet = await MeetModel.findById(meetID);
  if (meet) {
    return res.status(200).json(meet);
  } else {
    return res.status(400).json({
      message: "Meeting Not found",
    });
  }
});
