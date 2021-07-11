import React from "react";
import { LinearProgress } from "@material-ui/core";
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
    return <Meet />;
  } else {
    return <WaitRoom joinMeetHandler={joinMeet} />;
  }
};
export default App;
