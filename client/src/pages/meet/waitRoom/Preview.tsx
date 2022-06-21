import React from "react";
import { useAppDispatch, useAppSelector } from "core/hooks/redux";
import { toggleAudio, toggleVideo } from "core/reducers/media";
import ControlButton from "@arpitbhalla/trio-calls/components/ControllerButton";
import {
  MicOutlined,
  MicOffOutlined,
  VideocamOffOutlined,
  VideocamOutlined,
} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ShadowBox from "@arpitbhalla/trio-calls/components/ShadowBox";
import { useStyles } from "./Preview.useStyles";

const Preview: React.FC = () => {
  const classes = useStyles();
  const videoController = React.useRef<HTMLVideoElement>(null);
  const dispatch = useAppDispatch();
  const { isAudio, isVideo } = useAppSelector(
    ({ mediaReducer }) => mediaReducer
  );
  React.useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: isVideo, audio: true })
      .then((stream) => {
        if (videoController.current) {
          videoController.current.srcObject = stream;
        }
      });
  }, [isVideo]);

  React.useEffect(() => {
    if (videoController.current) {
      videoController.current.muted = !isAudio;
    }
  }, [isAudio]);

  return (
    <ShadowBox className={classes.root}>
      {isVideo ? (
        <video muted className={classes.video} ref={videoController} autoPlay />
      ) : (
        <Typography className={classes.text} variant="h5" color="textSecondary">
          Camera is off
        </Typography>
      )}
      <Box className={classes.controller}>
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
      </Box>
    </ShadowBox>
  );
};
export default Preview;
