import express from "express";
import http from "http";
import cors from "cors";
import { ExpressPeerServer } from "peer";
import { NewMeetRoute } from "./routes/newMeet";
import { GetMeetRoute } from "./routes/getMeet";
import { SignUpRoute } from "./routes/signUp";
import { SignInRoute } from "./routes/signIn";
import { GetProfileRoute } from "./routes/getProfile";
import mongoose from "mongoose";
import chalk from "chalk";
import { Server } from "socket.io";
import { ChatModel } from "./models/chat";
import { MeetModel } from "./models/meeting";

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/teams";

console.log(
  process.env.MONGO_URI
    ? chalk.red.bold("Using production DB")
    : chalk.yellow.bold("Using development DB")
);

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

const app = express();
const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, {});
const PORT = process.env.PORT || 4000;
app.set("trust proxy", true);
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("MS Teams");
});
app.use("/newMeet", NewMeetRoute);
app.use("/getMeet", GetMeetRoute);
app.use("/getProfile", GetProfileRoute);
app.use("/signin", SignInRoute);
app.use("/signup", SignUpRoute);
app.use("/peerjs", peerServer);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("socket established");
  socket.on("join-room", (userData) => {
    const { meetID, userID } = userData;
    console.log("Joined ", meetID, userID, userData);
    socket.join(meetID);

    // Broadcast only if user is connected to video call, userID is not available for chats only
    if (userID) {
      socket.broadcast.to(meetID).emit("user-connected", userData);
    }

    socket.on("sendMessage", async (incomingData) => {
      console.log("message", incomingData);
      const msgData = await new ChatModel(incomingData).save();
      await MeetModel.findOneAndUpdate(
        { meetID },
        { $push: { chat: msgData } }
      );
      io.to(meetID).emit("newMessage", msgData);
    });

    socket.on("raiseHand", async (incomingData) => {
      console.log("raiseHand", incomingData);
      io.to(meetID).emit("raiseHand", incomingData);
    });

    socket.on("changeTab", async (incomingData) => {
      console.log("changeTab", incomingData);
      io.to(meetID).emit("changeTab", incomingData);
    });

    socket.on("disconnect", () => {
      socket.broadcast.to(meetID).emit("user-disconnected", userID);
    });
  });
});

server.listen(PORT, () => {
  console.log(`Running on Port: ${PORT}`);
});
