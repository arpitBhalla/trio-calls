import React from "react";
import Peer from "peerjs";
import { useTitle } from "core/hooks/common";
import { useSnackbar } from "notistack";
import { useAppDispatch, useAppSelector } from "core/hooks/redux";
import { iceServers } from "core/config";
import { useSocket } from "core/hooks/useSocket";
import { useAudio } from "core/hooks/useAudio";
import { useHistory } from "react-router-dom";
import { useDocVisible } from "core/hooks/useDocVisible";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useVideoConf = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const socketClient = useSocket();
  const { enqueueSnackbar } = useSnackbar();
  const { playAudio } = useAudio();
  const changeTab = useDocVisible();
  const peers = React.useRef<Record<string, Peer.MediaConnection>>();
  const myStream = React.useRef<MediaStream>();
  const peerStream =
    React.useRef<Map<string, { displayName: string; stream: MediaStream }>>();
  const peerJs = React.useRef<Peer>();
  const { mediaReducer, meetReducer, authReducer } = useAppSelector((s) => s);
  const [reRender, setReRender] = React.useState(0);
  useTitle(meetReducer.meetDetails.title);

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

  React.useEffect(() => {
    let done = true;
    if (done) {
      // socketClient.emit("changeTab", authReducer.displayName);
      done = false;
    }
  }, [changeTab]);

  const socketEvents = () => {
    socketClient.on("connect", () => {
      console.log("socket connected");
    });
    socketClient.on("user-disconnected", (userID) => {
      console.log("user disconnected-- closing peers", userID);
      peers.current?.[userID]?.close();
    });
    socketClient.on("onRaiseHand", ({ displayName, UID }) => {
      console.log("user raised hand", displayName);
      if (UID != authReducer.UID) {
        console.log(UID, authReducer.UID);
        playAudio?.();
        enqueueSnackbar(displayName + " raised hand");
      }
    });
    socketClient.once("changeTab", (displayName) => {
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
        displayName: authReducer.displayName,
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
      call.on("stream", (userVideoStream) => {
        console.log("user stream data", userVideoStream);
        playAudio?.();
        peerStream.current?.set(call.metadata.id, {
          stream: userVideoStream,
          displayName: call.metadata.displayName,
        });
        setReRender(12);
      });
      call.on("close", () => {
        console.log("closing peers listeners", call.metadata.id);
        enqueueSnackbar(call.metadata.displayName + " left", {
          variant: "info",
        });
        setReRender(2);

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
      enqueueSnackbar(userData.displayName + " joined", {
        variant: "info",
      });
      setReRender(16);
    });
  };
  const connectToNewUser = (
    userData: { userID: string; displayName: string },
    stream: MediaStream
  ) => {
    const { userID, displayName } = userData;

    const call = peerJs.current?.call(userID, stream, {
      metadata: {
        id: peerJs.current?.id,
        displayName: authReducer.displayName,
      },
    });

    call?.on("stream", (userVideoStream) => {
      peerStream.current?.set(userID, {
        stream: userVideoStream,
        displayName,
      });
      setReRender(0);
    });
    call?.on("close", () => {
      console.log("closing new user", userID);
      peerStream.current?.delete(userID);
      setReRender(16);
    });
    call?.on("error", () => {
      console.log("peer error ------");
      console.log("closing new user", userID);
    });
    peers.current && call && (peers.current[userID] = call);
  };
  const raiseHand = () => {
    socketClient.emit("raiseHand", {
      displayName: authReducer.displayName,
      UID: authReducer.UID,
    });
  };
  const destroyConnection = () => {
    const myMediaTracks = myStream.current?.getTracks();
    myMediaTracks?.forEach((track) => {
      track.stop();
    });
    peerJs.current?.destroy();
    history.push("/");
  };
  return {
    myStream,
    peerStream,
    destroyConnection,
    raiseHand,
    reRender,
  };
};
