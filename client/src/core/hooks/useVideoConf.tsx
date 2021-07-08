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
    peerJs.current = new Peer(undefined, {
      path: "/peerjs",
      host: "localhost",
      port: 4000,
    });
    peerJs.current.on("open", (id) => {
      socketClient.emit("join-room", meetReducer.meetDetails.meetID, id);
    });
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        myStream.current = stream;
        // handleAddVideoStream(myVideo, stream);
        handleAnswerCall(stream);
      })
      .catch((error) => {
        console.error(error);
      });

    socketClient.on("user-disconnected", (userId: string) => {
      if (peers.current) {
        peers.current[userId].close();
      }
      socketClient.disconnect();
    });

    handleNewUserJoin();

    return () => {
      socketClient.off();
    };
  }, []);
  const handleAnswerCall = (stream: MediaStream) => {
    peerJs.current?.on("call", (call) => {
      call.answer(stream);
      // call.on("stream", (userVideoStream) => {
      //   // peerStream.current?.add(userVideoStream);
      // });
    });
  };

  const handleNewUserJoin = () => {
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
            // handleAddVideoStream(video, userVideoStream);
            if (userVideoStream) {
              peerStream.current?.set(userId, userVideoStream);
            }
          });

          call?.on("close", () => {
            video.remove();
          });

          if (peers.current) {
            call && (peers.current[userId] = call);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  React.useEffect(() => {
    if (myStream.current) {
      myStream.current.getAudioTracks()[0].enabled = mediaReducer.isAudio;
    }
  }, [mediaReducer.isAudio]);

  React.useEffect(() => {
    if (myStream.current) {
      myStream.current.getVideoTracks()[0].enabled = mediaReducer.isVideo;
    }
  }, [mediaReducer.isVideo]);

  return { myStream, peerStream };
  // MESSAGE PART
  // const handleMessage = (event) => {
  //   setMessage(event.target.value);
  // };

  // const handleSendMessage = (event) => {
  //   event.preventDefault();
  //   socketClient.current?.emit("message", {
  //     message: message,
  //     userId: peerJs.current?.id,
  //   });
  //   setMessage("");
  //   event.target.reset();
  // };

  // const handleLeaveMeet = () => {
  //   window.location.href = "/";
  // };
};
