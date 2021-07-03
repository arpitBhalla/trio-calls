import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import {
  AudiotrackOutlined,
  VideoCallOutlined,
  ScreenShareOutlined,
  MicOffOutlined,
  VideocamOffOutlined,
  CancelPresentationOutlined,
  PresentToAllOutlined,
  PanToolOutlined,
  InfoOutlined,
} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    bottom: 20,
    transform: "translateX(-50%)",
    left: "50%",
  },
}));

const App: React.FC<Props> = ({}) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Tooltip title="Meet Info">
        <IconButton aria-label="">
          <InfoOutlined />
        </IconButton>
      </Tooltip>
      <Tooltip title="Microphone">
        <IconButton style={{ backgroundColor: "red" }}>
          <MicOffOutlined htmlColor="white" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Video">
        <IconButton>
          <VideocamOffOutlined />
        </IconButton>
      </Tooltip>
      <Tooltip title="Screen Share">
        <IconButton>
          <ScreenShareOutlined />
        </IconButton>
      </Tooltip>
      <Tooltip title="Raise Hand">
        <IconButton>
          <PanToolOutlined />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
export default App;
