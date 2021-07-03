import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import {
  AudiotrackOutlined,
  VideoCallOutlined,
  ScreenShareOutlined,
  MicOffOutlined,
  VideocamOffOutlined,
} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const App: React.FC<Props> = ({}) => {
  const classes = useStyles();
  return (
    <Box>
      <IconButton style={{ backgroundColor: "red" }}>
        <MicOffOutlined htmlColor="white" />
      </IconButton>
      <IconButton>
        <VideocamOffOutlined />
      </IconButton>
      <IconButton>
        <ScreenShareOutlined />
      </IconButton>
    </Box>
  );
};
export default App;
