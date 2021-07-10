import { useSnackbar } from "notistack";
import React from "react";
import Peer from "peerjs";
import { useAppSelector } from "core/hooks/redux";
import { iceServers } from "core/config";
import { useSocket } from "./useSocket";
import { useHistory } from "react-router-dom";

export const useVideoConf = () => {
  const history = useHistory();
  const socketClient = useSocket();
  const { enqueueSnackbar } = useSnackbar();
  const peers = React.useRef<Record<string, Peer.MediaConnection>>();
  const myStream = React.useRef<MediaStream>();
  const peerStream = React.useRef<Map<string, MediaStream>>();
  const peerJs = React.useRef<Peer>();
  const { mediaReducer, meetReducer } = useAppSelector((s) => s);

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

  React.useEffect(() => {
    peers.current = {};
    peerStream.current = new Map();
    peerJs.current = new Peer({
      path: "/",
      host: "0.peerjs.com",
      port: 443,
      config: { iceServers },
    });
    socketEvents();
    initializePeersEvents();
  }, []);

  const socketEvents = () => {
    socketClient.on("connect", () => {
      console.log("socket connected");
    });
    socketClient.on("user-disconnected", (userID) => {
      console.log("user disconnected-- closing peers", userID);
      peers.current?.[userID]?.close();
    });
    socketClient.on("onRaiseHand", (displayName) => {
      console.log("user raised hand", displayName);
      enqueueSnackbar(displayName + " raised hand");
    });
    socketClient.on("changeTab", (displayName) => {
      console.log("changes tab", displayName);
      enqueueSnackbar(displayName + " changing tabs");
    });
    socketClient.on("disconnect", () => {
      console.log("socket disconnected --");
    });
    socketClient.on("error", (err) => {
      console.log("socket error --", err);
    });
  };

  const initializePeersEvents = () => {
    peerJs.current?.on("open", (id) => {
      const userData = {
        userID: id,
        meetID: meetReducer.meetDetails.meetID,
      };
      console.log("peers established and joined room", userData);
      socketClient.emit("join-room", userData);
      setNavigatorToStream();
    });
    peerJs.current?.on("error", (err) => {
      console.log("peer connection error", err);
      // peerJs.current?.reconnect();
    });
  };
  const setNavigatorToStream = () => {
    getVideoAudioStream().then((stream) => {
      if (stream) {
        stream.getVideoTracks()[0].enabled = mediaReducer.isAudio;
        stream.getVideoTracks()[0].enabled = mediaReducer.isVideo;

        myStream.current = stream;
        setPeersListeners(stream);
        newUserConnection(stream);
      }
    });
  };
  const getVideoAudioStream = () => {
    const myNavigator = navigator.mediaDevices.getUserMedia;

    return myNavigator({
      video: {
        frameRate: 12,
        noiseSuppression: true,
        width: { min: 640, ideal: 1280, max: 1920 },
        height: { min: 480, ideal: 720, max: 1080 },
      },
      audio: true,
    });
  };
  const setPeersListeners = (stream: MediaStream) => {
    peerJs.current?.on("call", (call) => {
      call.answer(stream);
      enqueueSnackbar(call.metadata.displayName + " joined", {
        variant: "info",
      });
      call.on("stream", (userVideoStream) => {
        console.log("user stream data", userVideoStream);
        peerStream.current?.set(call.metadata.id, userVideoStream);
      });
      call.on("close", () => {
        console.log("closing peers listeners", call.metadata.id);
        enqueueSnackbar(call.metadata.displayName + " left", {
          variant: "info",
        });
        peerStream.current?.delete(call.metadata.id);
      });
      call.on("error", () => {
        console.log("peer error ------");
        peerStream.current?.delete(call.metadata.id);
      });
      peers.current && (peers.current[call.metadata.id] = call);
    });
  };
  const newUserConnection = (stream: MediaStream) => {
    socketClient.on("user-connected", (userData) => {
      console.log("New User Connected", userData);
      connectToNewUser(userData, stream);
    });
  };
  const connectToNewUser = (
    userData: { userID: string },
    stream: MediaStream
  ) => {
    const { userID } = userData;

    const call = peerJs.current?.call(userID, stream, {
      metadata: { id: peerJs.current?.id, displayName: "" },
    });
    call?.on("stream", (userVideoStream) => {
      peerStream.current?.set(userID, userVideoStream);
    });
    call?.on("close", () => {
      console.log("closing new user", userID);
      peerStream.current?.delete(userID);
    });
    call?.on("error", () => {
      console.log("peer error ------");
      console.log("closing new user", userID);
    });
    peers.current && call && (peers.current[userID] = call);
  };
  const destroyConnection = () => {
    const myMediaTracks = myStream.current?.getTracks();
    myMediaTracks?.forEach((track) => {
      track.stop();
    });
    socketClient.disconnect();
    peerJs.current?.destroy();
    history.push("/");
  };
  return {
    myStream,
    peerStream,
    destroyConnection,
  };
};
