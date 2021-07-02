import express from "express";
import http from "http";
import path from "path";

const app = express();
const server = http.createServer(app);
import { ExpressPeerServer } from "peer";

const peerServer = ExpressPeerServer(server, {});

app.use("/peerjs", peerServer);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

app.use(express.json());

const _dirname = path.resolve();
app.use(express.static(path.join(_dirname, "/client/public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(_dirname, "/client/public/index.html"));
});

io.on("connection", (socket) => {
  console.log(" user connected", socket.id);
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

const port = 8000;
server.listen(port, () => {
  console.log(`Running on Port: ${port}`);
});
