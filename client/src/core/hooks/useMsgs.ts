import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "core/hooks/redux";
import { useSocket } from "./useSocket";
import { Chat, updateChat } from "core/reducers/meeting";
import React from "react";

export const useMsgs = (): {
  sendMessage: (message: string) => void;
  chat: Chat[];
  UID: string;
} => {
  const socketClient = useSocket();
  const { chat, UID, displayName } = useAppSelector((state) => ({
    chat: state.meetReducer.chat,
    UID: state.authReducer.UID,
    displayName: state.authReducer.displayName,
  }));
  const dispatch = useAppDispatch();

  useEffect(() => {
    socketEvents();
    return () => {
      socketClient.off();
    };
  }, []);

  const socketEvents = React.useCallback(() => {
    socketClient.on("newMessage", (d) => {
      console.log(d);
      dispatch(
        updateChat({
          MID: d._id,
          UID: d.UID,
          displayName: d.displayName || "",
          message: d.message || "",
          time: d.createdAt || "",
        })
      );
    });
  }, []);

  const sendMessage = React.useCallback((message: string) => {
    socketClient.emit("sendMessage", {
      displayName,
      message,
      UID,
    });
  }, []);

  return { sendMessage, chat, UID };
};
