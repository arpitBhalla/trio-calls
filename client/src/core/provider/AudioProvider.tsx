import React from "react";
import NotificationTune from "assets/notification.mp3";
import ReactHowler from "react-howler";

export const AudioContext = React.createContext({ playAudio: () => undefined });

export const AudioProvider: React.FC = ({ children }) => {
  const audioPlayer = React.useRef<ReactHowler>(null);

  const playAudio = () => {
    audioPlayer.current?.howler.play();
    return undefined;
  };

  return (
    <AudioContext.Provider value={{ playAudio }}>
      {children}
      <ReactHowler
        ref={audioPlayer}
        src={NotificationTune}
        preload
        playing={false}
        loop={false}
      />
    </AudioContext.Provider>
  );
};
