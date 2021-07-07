/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import Peer from "peerjs";
import { ServerURL } from "core/const";
import { io } from "socket.io-client";

const socket = io(ServerURL);
export {};
const initializePeerConnection = () => {
  return new Peer("", {
    host: peerjsEndpoint, // need to provide peerjs server endpoint
    // (something like localhost:9000)
    secure: true,
  });
};
const initializeSocketConnection = () => {
  return openSocket.connect(websocket, {
    // need to provide backend server endpoint
    // (ws://localhost:5000) if ssl provided then
    // (wss://localhost:5000)
    secure: true,
    reconnection: true,
    rejectUnauthorized: false,
    reconnectionAttempts: 10,
  });
};
class Connection {
  videoContainer = {};
  message = [];
  settings;
  streaming = false;
  myPeer;
  socket;
  myID = "";
  constructor(settings) {
    this.settings = settings;
    this.myPeer = initializePeerConnection();
    this.socket = initializeSocketConnection();
    this.initializeSocketEvents();
    this.initializePeersEvents();
  }
  initializeSocketEvents = () => {
    this.socket.on("connect", () => {
      console.log("socket connected");
    });
    this.socket.on("user-disconnected", (userID) => {
      console.log("user disconnected-- closing peers", userID);
      peers[userID] && peers[userID].close();
      this.removeVideo(userID);
    });
    this.socket.on("disconnect", () => {
      console.log("socket disconnected --");
    });
    this.socket.on("error", (err) => {
      console.log("socket error --", err);
    });
  };
  initializePeersEvents = () => {
    this.myPeer.on("open", (id) => {
      this.myID = id;
      const roomID = window.location.pathname.split("/")[2];
      const userData = {
        userID: id,
        roomID,
      };
      console.log("peers established and joined room", userData);
      this.socket.emit("join-room", userData);
      this.setNavigatorToStream();
    });
    this.myPeer.on("error", (err) => {
      console.log("peer connection error", err);
      this.myPeer.reconnect();
    });
  };
  setNavigatorToStream = () => {
    this.getVideoAudioStream().then((stream) => {
      if (stream) {
        this.streaming = true;
        this.createVideo({ id: this.myID, stream });
        this.setPeersListeners(stream);
        this.newUserConnection(stream);
      }
    });
  };
  getVideoAudioStream = (video = true, audio = true) => {
    let quality = this.settings.params?.quality;
    if (quality) quality = parseInt(quality);
    const myNavigator =
      navigator.mediaDevices.getUserMedia ||
      navigator.mediaDevices.webkitGetUserMedia ||
      navigator.mediaDevices.mozGetUserMedia ||
      navigator.mediaDevices.msGetUserMedia;
    return myNavigator({
      video: video
        ? {
            frameRate: quality ? quality : 12,
            noiseSuppression: true,
            width: { min: 640, ideal: 1280, max: 1920 },
            height: { min: 480, ideal: 720, max: 1080 },
          }
        : false,
      audio: audio,
    });
  };
  createVideo = (createObj) => {
    if (!this.videoContainer[createObj.id]) {
      this.videoContainer[createObj.id] = {
        ...createObj,
      };
      const roomContainer = document.getElementById("room-container");
      const videoContainer = document.createElement("div");
      const video = document.createElement("video");
      video.srcObject = this.videoContainer[createObj.id].stream;
      video.id = createObj.id;
      video.autoplay = true;
      if (this.myID === createObj.id) video.muted = true;
      videoContainer.appendChild(video);
      roomContainer.append(videoContainer);
    } else {
      // @ts-ignore
      document.getElementById(createObj.id)?.srcObject = createObj.stream;
    }
  };
  setPeersListeners = (stream) => {
    this.myPeer.on("call", (call) => {
      call.answer(stream);
      call.on("stream", (userVideoStream) => {
        console.log("user stream data", userVideoStream);
        this.createVideo({ id: call.metadata.id, stream: userVideoStream });
      });
      call.on("close", () => {
        console.log("closing peers listeners", call.metadata.id);
        this.removeVideo(call.metadata.id);
      });
      call.on("error", () => {
        console.log("peer error ------");
        this.removeVideo(call.metadata.id);
      });
      peers[call.metadata.id] = call;
    });
  };
  newUserConnection = (stream) => {
    this.socket.on("new-user-connect", (userData) => {
      console.log("New User Connected", userData);
      this.connectToNewUser(userData, stream);
    });
  };
  connectToNewUser(userData, stream) {
    const { userID } = userData;
    const call = this.myPeer.call(userID, stream, {
      metadata: { id: this.myID },
    });
    call.on("stream", (userVideoStream) => {
      this.createVideo({ id: userID, stream: userVideoStream, userData });
    });
    call.on("close", () => {
      console.log("closing new user", userID);
      this.removeVideo(userID);
    });
    call.on("error", () => {
      console.log("peer error ------");
      this.removeVideo(userID);
    });
    peers[userID] = call;
  }
  removeVideo = (id) => {
    delete this.videoContainer[id];
    const video = document.getElementById(id);
    if (video) video.remove();
  };
  destoryConnection = () => {
    const myMediaTracks = this.videoContainer[this.myID]?.stream.getTracks();
    myMediaTracks?.forEach((track: any) => {
      track.stop();
    });
    socketInstance?.socket.disconnect();
    this.myPeer.destroy();
  };
}

export function createSocketConnectionInstance(settings = {}) {
  return (socketInstance = new Connection(settings));
}
