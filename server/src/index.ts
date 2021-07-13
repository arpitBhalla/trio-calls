import express from "express";
import http from "http";
import cors from "cors";
import { ExpressPeerServer } from "peer";
import { Chat, Meet } from "./models";
import { Server } from "socket.io";
import Routes from "./routes";
import mongoose from "mongoose";
import chalk from "chalk";

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/teams";

console.log(
  process.env.MONGO_URI
    ? chalk.red.bold("Using production DB")
    : chalk.yellow.bold("Using development DB")
);

// connect to mongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

const app = express();
const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, {});
const PORT = process.env.PORT || 4000;

// for google app engine
app.set("trust proxy", true);
// cors
app.use(cors());
// POST request body json parser
app.use(express.json());
// routes for REST API
app.use(Routes);
// Peer js endpoint
app.use("/peerjs", peerServer);
// Initialize Socket Server
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// Listens to socket events
io.on("connection", (socket) => {
  socket.on("join-room", (userData) => {
    const { meetID, userID } = userData;

    // Join the meet room
    socket.join(meetID);

    // Broadcast only if user is connected to video call, userID is not available for chats only
    if (userID) {
      console.log("Video");
      socket.broadcast.to(meetID).emit("user-connected", userData);
    }

    // Handles Messages of room
    socket.on("sendMessage", async (incomingData) => {
      console.log("message", incomingData);
      const msgData = await new Chat(incomingData).save();
      await Meet.findOneAndUpdate({ meetID }, { $push: { chat: msgData } });
      io.to(meetID).emit("newMessage", msgData);
    });

    // Lock meeting
    socket.on("lockMeeting", async (incomingData) => {
      console.log("lockMeeting", incomingData);
      await Meet.findOneAndUpdate({ meetID }, { chat: incomingData });
      io.to(meetID).emit("lockMeeting", incomingData);
    });

    // someone raises hand
    socket.on("raiseHand", async (incomingData) => {
      console.log("raiseHand", incomingData);
      io.to(meetID).emit("onRaiseHand", incomingData);
    });

    // poll created
    socket.on("newPoll", async (incomingData) => {
      console.log("newPoll", incomingData);
      io.to(meetID).emit("onNewPoll", incomingData);
    });

    // poll respond
    socket.on("respondPoll", async (incomingData) => {
      console.log("newPoll", incomingData);
      io.to(meetID).emit("respondPoll", incomingData);
    });

    // someone changes the tab
    socket.on("changeTab", async (incomingData) => {
      console.log("changeTab", incomingData);
      io.to(meetID).emit("changeTab", incomingData);
    });

    // user gets disconnected
    socket.on("disconnect", () => {
      socket.broadcast.to(meetID).emit("user-disconnected", userID);
    });
  });
});

// server listen to port
server.listen(PORT, () => {
  console.log(`Running on Port: ${PORT}`);
});
