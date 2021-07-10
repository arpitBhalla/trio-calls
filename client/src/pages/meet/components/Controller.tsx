import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import {
  MicOutlined,
  MicOffOutlined,
  VideocamOffOutlined,
  VideocamOutlined,
  CancelPresentationOutlined,
  PresentToAllOutlined,
  PanToolOutlined,
  CategoryOutlined,
  Category,
  Brightness4,
  CallEnd,
} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { useAppDispatch, useAppSelector } from "core/hooks/redux";
import {
  toggleAudio,
  toggleScreen,
  toggleVideo,
  toggleWhiteBoard,
} from "core/reducers/media";
import ControlButton from "components/ControllerButton";
import { toggleDarkMode } from "core/reducers/theme";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    bottom: theme.spacing(3),
    transform: "translateX(-50%)",
    left: "50%",
  },
  callEnd: {
    backgroundColor: "red",
    color: "white",
  },
}));

type ControllerProps = {
  endCallHandler: () => unknown;
};

const Controller: React.FC<ControllerProps> = ({ endCallHandler }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { isAudio, isVideo, isScreenShare, isWhiteBoard } = useAppSelector(
    ({ mediaReducer }) => mediaReducer
  );

  return (
    <Box className={classes.root}>
      <ControlButton
        title="Microphone"
        isEnabled={isAudio}
        IconOn={MicOutlined}
        IconOff={MicOffOutlined}
        onClick={() => dispatch(toggleAudio(null))}
      />
      <ControlButton
        title="Video"
        isEnabled={isVideo}
        IconOn={VideocamOutlined}
        IconOff={VideocamOffOutlined}
        onClick={() => dispatch(toggleVideo(null))}
      />
      <ControlButton
        title="ScreenShare"
        isEnabled={isScreenShare}
        IconOn={PresentToAllOutlined}
        IconOff={CancelPresentationOutlined}
        onClick={() => dispatch(toggleScreen(null))}
      />
      <Tooltip title="End Call">
        <IconButton
          className={classes.callEnd}
          aria-label="end call"
          style={{ backgroundColor: "red" }}
          onClick={endCallHandler}
        >
          <CallEnd />
        </IconButton>
      </Tooltip>
      <ControlButton
        title="White Board"
        isEnabled={isWhiteBoard}
        IconOn={Category}
        IconOff={CategoryOutlined}
        onClick={() => dispatch(toggleWhiteBoard(null))}
      />
      <Tooltip title="Dark Mode">
        <IconButton onClick={() => dispatch(toggleDarkMode(null))}>
          <Brightness4 />
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
export default Controller;
