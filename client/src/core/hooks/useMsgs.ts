import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "core/hooks/redux";
import { useSocket } from "./useSocket";
import { Chat, updateChat } from "core/reducers/meeting";

export const useMsgs = (): {
  sendMessage: (message: string) => void;
  chat: Set<Chat>;
} => {
  const socketClient = useSocket();
  const { chat, UID, displayName } = useAppSelector((state) => ({
    chat: state.meetReducer.chat,
    UID: state.authReducer.UID,
    displayName: state.authReducer.displayName,
  }));
  const dispatch = useAppDispatch();

  useEffect(() => {
    socketClient.on("getMessage", () => {
      dispatch(
        updateChat({
          MID: "6as",
          UID: "76",
          displayName: "Arpit Bhalla",
          message: "Hello world",
          time: "",
        })
      );
    });
    return () => {
      socketClient.off();
    };
  }, []);

  const sendMessage = (message: string) => {
    socketClient.emit("sendMessage", {
      displayName,
      message,
      UID,
      time: new Date().getTime(),
    });
  };

  return { sendMessage, chat };
};
