import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Peer from 'peerjs';
import { useParams } from 'react-router-dom';

import './App.css';

const SOCKET_URL = 'http://127.0.0.1:8000';

let myStream, peer;
let peers = [];
let socket = io(SOCKET_URL);

const Video = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [muted, setMuted] = useState(false);
  const [hideVideo, setHideVideo] = useState(false);

  const { roomId } = useParams();

  useEffect(() => {
    const handleReceiveMessage = () => {
      socket.on('createMessage', (message) => {
        setMessages([...messages, message]);
      });
    };
    setInterval(handleReceiveMessage(), 100);
    return () => {
      socket.off();
    };
  });

  useEffect(() => {
    peer = new Peer(undefined, {
      path: '/peerjs',
      host: '/',
      port: 8000,
    });

    peer.on('open', (id) => {
      socket.emit('join-room', roomId, id);
    });

    navigator.mediaDevices
      .getUserMedia({
        video: true,
        //audio: true,
      })
      .then((stream) => {
        myStream = stream;
        const myVideo = document.createElement('video');
        handleAddVideoStream(myVideo, myStream);
        handleAnswerCall(stream);
      })
      .catch((error) => {
        console.error(error);
      });

    socket.on('user-disconnected', (userId) => {
      if (peers[userId]) peers[userId].destroy();
      socket.disconnect();
    });

    const handleAnswerCall = (stream) => {
      peer.on('call', (call) => {
        call.answer(stream);
        const video = document.createElement('video');
        call.on('stream', (userVideoStream) => {
          handleAddVideoStream(video, userVideoStream);
        });
      });
    };

    const handleNewUserJoin = () => {
      socket.on('user-connected', (userId) => {
        navigator.mediaDevices
          .getUserMedia({
            video: true,
            //audio: true, // For Testing Purpose
          })
          .then((stream) => {
            const call = peer.call(userId, stream);
            const video = document.createElement('video');

            call.on('stream', (userVideoStream) => {
              handleAddVideoStream(video, userVideoStream);
            });

            call.on('close', () => {
              video.remove();
            });

            peers[userId] = call;
          })
          .catch((error) => {
            console.error(error);
          });
      });
    };

    handleNewUserJoin();

    return () => {
      socket.off();
    };
  }, [roomId]);

  const handleAddVideoStream = (video, stream) => {
    const videoGrid = document.getElementById('video-grid');
    video.srcObject = stream;

    video.addEventListener('loadedmetadata', () => {
      video.play();
      video.muted = true; // muted for testing purposes
    });
    videoGrid.append(video);
  };

  // Handlining Mute And Unmute
  const handleMuteUnmute = () => {
    const enabled = myStream.getAudioTracks()[0].enabled;
    if (enabled) {
      myStream.getAudioTracks()[0].enabled = false;
      setMuted(true);
    } else {
      myStream.getAudioTracks()[0].enabled = true;
      setMuted(false);
    }
  };

  //Handling video off and one
  const handlePlayStopVideo = () => {
    const enabled = myStream.getVideoTracks()[0].enabled;

    if (enabled) {
      myStream.getVideoTracks()[0].enabled = false;
      setHideVideo(true);
    } else {
      myStream.getVideoTracks()[0].enabled = true;
      setHideVideo(false);
    }
  };

  // MESSAGE PART
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    socket.emit('message', { message: message, userId: peer.id });
    setMessage('');
    event.target.reset();
  };

  const handleLeaveMeet = () => {
    window.location.href = '/';
  };

  return (
    <>
      <header>
        <div className="header">
          <p>VIDEO CONFERENCE</p>
          <p>ROOM ID: {roomId}</p>
        </div>
      </header>

      <div className="show-case">
        <div className="main-left">
          <div className="videos-grp">
            <div id="video-grid"></div>
          </div>

          <div className="options">
            <div className="options-left">
              {!muted ? (
                <div id="muteButton" className="options-button" onClick={handleMuteUnmute}>
                  <i className="fa fa-microphone-slash"></i>
                </div>
              ) : (
                <div id="muteButton" className="options-button">
                  <i class="fas fa-microphone"></i>
                </div>
              )}

              {!hideVideo ? (
                <div id="stopVideo" className="options-button" onClick={handlePlayStopVideo}>
                  <i className="fa fa-video-slash"></i>
                </div>
              ) : (
                <div id="stopVideo" className="options-button" onClick={handlePlayStopVideo}>
                  <i className="fa fa-video"></i>
                </div>
              )}
            </div>
            <div className="options-right">
              <div className="leave-meet">
                <button onClick={handleLeaveMeet}>Leave Meeting</button>
              </div>
            </div>
          </div>
        </div>

        <div className="main-right">
          <div className="main-chat-window">
            <div className="messages">
              {messages.map((msg, idx) => (
                <div key={idx} className="msg chat">
                  <p key={idx}>{msg}</p>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSendMessage}>
            <div className="main-message-container">
              <input
                id="chat-message"
                type="text"
                onChange={handleMessage}
                autoComplete="off"
                placeholder="Type message here..."
                required
              />

              <button type="submit" id="send" className="options-button">
                <i className="fab fa-telegram-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Video;
