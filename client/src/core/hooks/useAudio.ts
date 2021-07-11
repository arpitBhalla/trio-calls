import React from "react";
import { AudioContext } from "core/provider/AudioProvider";

export const useAudio = (): {
  playAudio: () => undefined;
} => {
  return React.useContext(AudioContext);
};
