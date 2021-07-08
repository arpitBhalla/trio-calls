import { useEffect, useState, useRef } from "react";
import Peer from "peerjs";
import { useAppDispatch, useAppSelector } from "core/hooks/redux";
import { useSocket } from "core/hooks/ws";
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

  useEffect(() => {
    // For new user join
    peerJs.current?.connect(meetID, { metadata: {} });
    if (myStream) {
      peerJs.current?.call(meetID, myStream, { metadata: {} });
    }
    // peerJs.current?
    socketClient.on("user-connected", (userId) => {
      navigator.mediaDevices
        .getUserMedia({
          video: true,
          //audio: true, // For Testing Purpose
        })
        .then((stream) => {
          const call = peerJs.current?.call(userId, stream);
          const video = document.createElement("video");

          call?.on("stream", (userVideoStream) => {
            handleAddVideoStream(video, userVideoStream);
          });

          call?.on("close", () => {
            video.remove();
          });

          peers[userId] = call;
        })
        .catch((error) => {
          console.error(error);
        });
    });
  });
};
