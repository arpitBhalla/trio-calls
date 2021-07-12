import React from "react";
import { AudioProvider } from "core/provider/AudioProvider";
import LinearProgress from "@material-ui/core/LinearProgress";
import loadable from "@loadable/component";

const WaitRoom = loadable(() => import("./WaitRoom"), {
  fallback: <LinearProgress />,
});
const Meet = loadable(() => import("./Meet"), {
  fallback: <LinearProgress />,
});
const App: React.FC = () => {
  const [meetStarted, setMeetStarted] = React.useState(false);
  const joinMeet = () => setMeetStarted(true);

  if (meetStarted) {
    return (
      <AudioProvider>
        <Meet />
      </AudioProvider>
    );
  } else {
    return <WaitRoom joinMeetHandler={joinMeet} />;
  }
};
export default App;
