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

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/teams";

console.log(
  process.env.MONGO_URI
    ? chalk.red.bold("Using production DB")
    : chalk.yellow.bold("Using development DB")
);

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, {});
const PORT = process.env.PORT || 4000;
app.set("trust proxy", true);
app.use(cors());
app.use(express.json());

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
    socket.broadcast.to(meetID).emit("user-connected", userData);
    socket.on("disconnect", () => {
      socket.broadcast.to(meetID).emit("user-disconnected", userID);
    });
  });
});

// socket.on("message", ({ message, userId }) => {
//   console.log(message, userId);
//   io.to(meetID).emit("createMessage", message, userId);
// });

server.listen(PORT, () => {
  console.log(`Running on Port: ${PORT}`);
});
