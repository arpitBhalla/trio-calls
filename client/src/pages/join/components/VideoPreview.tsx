import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "core/hooks/redux";
import { toggleAudio, toggleVideo } from "core/actions/media";
import ControlButton from "components/ControllerButton";
import {
  MicOutlined,
  MicOffOutlined,
  VideocamOffOutlined,
  VideocamOutlined,
} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: 350,
    width: 550,
    backgroundColor: "#333333",
    borderRadius: 10,
  },
  controller: {
    position: "absolute",
    bottom: 10,
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#dddbdb",
    borderRadius: 10,
  },
  text: {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translateX(-50%)",
    color: "white",
  },
  video: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: 10,
  },
}));

const App: React.FC = () => {
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

  return (
    <>
      {JSON.stringify({ isAudio, isVideo })}
      <Box className={classes.root}>
        {isVideo ? (
          <video className={classes.video} ref={videoController} autoPlay />
        ) : (
          <Typography
            className={classes.text}
            variant="h5"
            color="textSecondary"
          >
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
      </Box>
    </>
  );
};
export default App;
