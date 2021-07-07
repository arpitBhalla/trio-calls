import { io } from "./../utils/socket";
import { Socket } from "socket.io";

io().on("connection", (socket: Socket) => {
  socket.on("join-room", (roomId, userId) => {
    console.log(roomId, userId);
    socket.join(roomId);
    socket.broadcast.to(roomId).emit("user-connected", userId);

    socket.on("message", ({ message, userId }) => {
      console.log(message, userId);
      io().to(roomId).emit("createMessage", message, userId);
    });

    // When User Disconnected
    socket.on("disconnect", (userId) => {
      socket.broadcast.to(roomId).emit("user-disconnected", userId);
    });
  });
});
