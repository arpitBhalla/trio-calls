import { getChat } from "../../utils/chat.fetch";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "core/hooks/redux";
import { useSocket } from "./useSocket";
import { addChat, clearChat, initialChat } from "core/reducers/chat";
import React from "react";
import { Chat } from "utils/types";
import { useSnackbar } from "notistack";

export const useMsgs = (meetID?: string) => {
  const socketClient = useSocket();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const { UID, displayName } = useAppSelector(
    ({ authReducer: { UID, displayName } }) => ({
      UID,
      displayName,
    })
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!meetID) return;
    resetChat();
    setLoading(true);
    getChat(UID, meetID)
      .then((chats) => {
        dispatch(initialChat(chats));
        setLoading(false);
      })
      .catch((err) => {
        enqueueSnackbar(err || "Something went wrong", {
          variant: "error",
        });
      });
  }, [meetID, UID]);

  useEffect(() => {
    if (!meetID) return;
    socketEvents();
  }, []);

  const socketEvents = () => {
    socketClient.on("newMessage", (messageData) => {
      dispatch(
        addChat({
          MID: messageData._id,
          UID: messageData.UID,
          displayName: messageData.displayName || "",
          message: messageData.message || "",
          time: messageData.createdAt || "",
        })
      );
    });
  };

  const sendMessage = React.useCallback((message: string) => {
    socketClient.emit("sendMessage", {
      displayName,
      message,
      UID,
    });
  }, []);

  const resetChat = () => {
    dispatch(clearChat());
  };

  return { sendMessage, resetChat, loading };
};
