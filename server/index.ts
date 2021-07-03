import express from "express";
import http from "http";
import { Socket, Server } from "socket.io";
import { ExpressPeerServer } from "peer";
import { InviteRoute } from "./routes/invite";

const app = express();
const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, {});
const PORT = process.env.PORT || 4000;

app.use("/peerJs", peerServer);
app.use(express.json());
app.use("/invite", InviteRoute);
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
