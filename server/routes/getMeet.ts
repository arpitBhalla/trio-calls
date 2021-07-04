import express from "express";
import { MeetModel } from "../models/meeting";

const Router = express.Router();

export const GetMeetRoute = Router.post("/", async (req, res) => {
  const { meetID } = req.body;

  const meet = await MeetModel.findById(meetID);

  return res.json({
    status: 200,
    message: "Done",
    meet: meet,
  });
});
//60e18ef5a0acf8419cb0147f
