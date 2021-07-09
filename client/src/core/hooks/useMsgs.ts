import React, { useEffect } from "react";
import Peer from "peerjs";
import { useAppSelector } from "core/hooks/redux";
import { useSocket } from "./useSocket";

export const useVideoConf = () => {
  const peers = React.useRef<Record<string, Peer.MediaConnection>>();
  const myStream = React.useRef<MediaStream>();
  const peerStream = React.useRef<Map<string, MediaStream>>();
  const peerJs = React.useRef<Peer>();
  const socketClient = useSocket();
  const { mediaReducer, meetReducer } = useAppSelector((s) => s);

  useEffect(() => {
    return () => {
      socketClient.off();
    };
  }, []);
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    socketClient.current?.emit("message", {
      message: message,
      userId: peerJs.current?.id,
    });
    setMessage("");
    event.target.reset();
  };

  const handleLeaveMeet = () => {
    window.location.href = "/";
  };

  return { myStream, peerStream };
};
