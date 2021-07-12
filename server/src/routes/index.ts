import express from "express";
import { GetMeetAll } from "./getAllMeets";
import { GetProfile } from "./getProfile";
import { GetChat } from "./getChat";
import { GetMeet } from "./getMeet";
import { NewMeet } from "./newMeet";
import { SignIn } from "./signIn";
import { SignUp } from "./signUp";

const Router = express.Router();

Router.post("/getChat", GetChat);
Router.post("/newMeet", NewMeet);
Router.post("/getAllMeet", GetMeetAll);
Router.post("/getMeet", GetMeet);
Router.post("/getProfile", GetProfile);
Router.post("/signIn", SignIn);
Router.post("/signUp", SignUp);

export default Router;
