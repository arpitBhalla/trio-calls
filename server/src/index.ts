import express from "express";
import http from "http";
import cors from "cors";
import { ExpressPeerServer } from "peer";
import { Chat, Meet } from "./models";
import * as Routes from "./routes";
import { Server } from "socket.io";
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
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("MS Teams");
});
app.use("/newMeet", Routes.NewMeet);
app.use("/getMeet", Routes.GetMeet);
app.use("/getProfile", Routes.GetProfile);
app.use("/signIn", Routes.SignIn);
app.use("/signUp", Routes.SignUp);
app.use("/peerjs", peerServer);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

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

    // someone raises hand
    socket.on("raiseHand", async (incomingData) => {
      console.log("raiseHand", incomingData);
      io.to(meetID).emit("onRaiseHand", incomingData);
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
