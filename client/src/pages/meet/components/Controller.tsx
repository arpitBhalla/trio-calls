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
  InfoOutlined,
  CategoryOutlined,
} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { useAppDispatch, useAppSelector } from "core/hooks/redux";
import { toggleAudio, toggleScreen, toggleVideo } from "core/actions/media";

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    bottom: 20,
    transform: "translateX(-50%)",
    left: "50%",
  },
}));

type ControlButtonProps = {
  title?: string;
  isEnabled?: boolean;
  IconOn: typeof MicOffOutlined;
  IconOff: typeof MicOffOutlined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const ControlButton: React.FC<ControlButtonProps> = ({
  title,
  isEnabled,
  IconOn,
  IconOff,
  onClick,
}) => (
  <Tooltip title={title + " " + (isEnabled ? "off" : "on")}>
    {/* @ts-ignore */}
    <IconButton onClick={onClick}>
      {isEnabled ? <IconOn htmlColor="red" /> : <IconOff />}
    </IconButton>
  </Tooltip>
);

const App: React.FC<Props> = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { isAudio, isVideo, isScreenShare } = useAppSelector(
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

      <Tooltip title="Raise Hand">
        <IconButton>
          <PanToolOutlined />
        </IconButton>
      </Tooltip>
      <Tooltip title="White Board">
        <IconButton>
          <CategoryOutlined />
        </IconButton>
      </Tooltip>
      <Tooltip title="Meet Info">
        <IconButton aria-label="">
          <InfoOutlined />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
export default App;
