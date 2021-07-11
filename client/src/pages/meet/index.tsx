import React from "react";
import { LinearProgress } from "@material-ui/core";
import loadable from "@loadable/component";
import { AudioProvider } from "core/provider/AudioProvider";

const WaitRoom = loadable(() => import("./WaitRoom"), {
  fallback: <LinearProgress />,
});
const Meet = loadable(() => import("./Meet"), {
  fallback: <LinearProgress />,
});
const App: React.FC = () => {
  const [meetStarted, setMeetStarted] = React.useState(false);
  const joinMeet = () => setMeetStarted(true);

  return (
    <AudioProvider>
      <Meet />
    </AudioProvider>
  );
  // if (meetStarted) {
  // } else {
  //   return <WaitRoom joinMeetHandler={joinMeet} />;
  // }
};
export default App;
