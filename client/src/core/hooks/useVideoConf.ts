import { useEffect, useRef } from "react";
import Peer from "peerjs";
import { useAppDispatch, useAppSelector } from "core/hooks/redux";
import { useSocket } from "core/hooks/useSocket";
import {
  removeParticipant,
  updateChat,
  updateMeetDetails,
  updateParticipant,
} from "core/reducers/meeting";
import media, {
  toggleAudio,
  toggleHand,
  toggleScreen,
  toggleVideo,
} from "core/reducers/media";
import { ServerURL } from "core/config";

export const useVideoConferencing = (meetID: string): void => {
  const peerJs = useRef<Peer>();
  const socketClient = useSocket();
  const {
    mediaReducer: { videoStream: myStream },
  } = useAppSelector(({ mediaReducer, meetReducer }) => ({
    mediaReducer,
    meetReducer,
  }));
  const dispatch = useAppDispatch();

  useEffect(() => {
    peerJs.current = new Peer(meetID, {
      path: "/peerjs",
      host: ServerURL,
      port: 8000,
      debug: process.env.NODE_ENV === "development" ? 3 : 0,
    });
    peerJs.current.on("open", (id) => {
      socketClient.emit("join-room", meetID, id);
    });
  }, [meetID, socketClient]);
};
