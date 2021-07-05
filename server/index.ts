import express from "express";
import http from "http";
import cors from "cors";
import { Socket, Server } from "socket.io";
import { ExpressPeerServer } from "peer";
import { NewMeetRoute } from "./routes/newMeet";
import { GetMeetRoute } from "./routes/getMeet";
import { SignUpRoute } from "./routes/signUp";
import { SignInRoute } from "./routes/signIn";
import { GetProfileRoute } from "./routes/getProfile";
import mongoose from "mongoose";
import chalk from "chalk";

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/teams";

console.log(process.env.MONGO_URI && chalk.red.bold("Using Prod DB"));

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, {});
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use("/peerJs", peerServer);
app.use(express.json());

app.use("/newMeet", NewMeetRoute);
app.use("/getMeet", GetMeetRoute);
app.use("/getProfile", GetProfileRoute);
app.use("/signin", SignInRoute);
app.use("/signup", SignUpRoute);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket: Socket) => {
  socket.on("join-room", (roomId, userId) => {
    console.log(roomId, userId);
    socket.join(roomId);
    socket.broadcast.to(roomId).emit("user-connected", userId);

    socket.on("message", ({ message, userId }) => {
      console.log(message, userId);
      io.to(roomId).emit("createMessage", message, userId);
    });

    // When User Disconnected
    socket.on("disconnect", (userId) => {
      socket.broadcast.to(roomId).emit("user-disconnected", userId);
    });
  });
});

server.listen(PORT, () => {
  console.log(`Running on Port: ${PORT}`);
});
