import React from "react";
import { AudioProvider } from "core/provider/AudioProvider";
import LinearProgress from "@material-ui/core/LinearProgress";
import loadable from "@loadable/component";

const WaitRoom = loadable(() => import("./waitRoom"), {
  fallback: <LinearProgress />,
});

const Dashboard = loadable(() => import("./dashboard/Meet"), {
  fallback: <LinearProgress />,
});

const MeetRoom: React.FC = () => {
  const [meetStarted, setMeetStarted] = React.useState(false);
  const joinMeet = () => setMeetStarted(true);

  if (meetStarted) {
    return (
      <AudioProvider>
        <Dashboard />
      </AudioProvider>
    );
  } else {
    return <WaitRoom joinMeetHandler={joinMeet} />;
  }
};
export default MeetRoom;
