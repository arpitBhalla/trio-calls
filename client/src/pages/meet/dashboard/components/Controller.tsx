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
  PanTool,
  Brightness4,
  CallEnd,
  BrushOutlined,
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
import ControlButton from "@arpitbhalla/trio-calls/components/ControllerButton";
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
    margin: "0px 5px",
    color: "white",
  },
}));

type ControllerProps = {
  endCallHandler: () => unknown;
  raiseHandHandler: () => unknown;
};

const Controller: React.FC<ControllerProps> = ({
  endCallHandler,
  raiseHandHandler,
}) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { isAudio, isVideo, isScreenShare, isWhiteBoard, isHand } =
    useAppSelector(({ mediaReducer }) => mediaReducer);

  return (
    <Box className={classes.root}>
      <ControlButton
        title="Microphone"
        shortCut="m"
        isEnabled={isAudio}
        IconOn={MicOutlined}
        IconOff={MicOffOutlined}
        onClick={() => dispatch(toggleAudio(null))}
      />
      <ControlButton
        title="Video"
        shortCut="v"
        isEnabled={isVideo}
        IconOn={VideocamOutlined}
        IconOff={VideocamOffOutlined}
        onClick={() => dispatch(toggleVideo(null))}
      />
      <ControlButton
        title="ScreenShare"
        shortCut="s"
        isEnabled={isScreenShare}
        IconOn={CancelPresentationOutlined}
        IconOff={PresentToAllOutlined}
        onClick={() => dispatch(toggleScreen(null))}
      />
      <Tooltip title="End Call (Alt+e)">
        <IconButton
          accessKey="e"
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
        shortCut="w"
        IconOn={BrushOutlined}
        IconOff={BrushOutlined}
        onClick={() => dispatch(toggleWhiteBoard(null))}
      />
      <ControlButton
        title="Theme Mode"
        isEnabled={isWhiteBoard}
        shortCut="t"
        IconOn={Brightness4}
        IconOff={Brightness4}
        onClick={() => dispatch(toggleDarkMode(null))}
      />
      <ControlButton
        title="Raise Hand"
        isEnabled={isHand}
        shortCut="r"
        IconOn={PanTool}
        IconOff={PanToolOutlined}
        onClick={raiseHandHandler}
      />
    </Box>
  );
};
export default Controller;
