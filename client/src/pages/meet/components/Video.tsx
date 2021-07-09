import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "90%",
    width: 550,
    backgroundColor: "#333333",
    borderRadius: 8,
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
    aspectRatio: "16/9",
  },
  caption: {
    position: "absolute",
    color: "white",
    left: theme.spacing(2),
    bottom: theme.spacing(2),
  },
}));

type VideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  stream: MediaStream;
  displayName?: string;
};

const Video: React.FC<VideoProps> = ({
  stream,
  displayName = "You",
  ...props
}) => {
  const classes = useStyles();
  const videoController = React.useRef<HTMLVideoElement>(null);
  React.useEffect(() => {
    if (videoController.current) {
      videoController.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <Box className={classes.root}>
      {Math.random() ? (
        <video
          className={classes.video}
          ref={videoController}
          autoPlay
          {...props}
        />
      ) : (
        <Typography className={classes.text} variant="h5" color="textSecondary">
          Camera is off
        </Typography>
      )}
      <Typography
        className={classes.caption}
        variant="subtitle1"
        color="textSecondary"
      >
        {displayName}
      </Typography>
    </Box>
  );
};
export default React.memo(Video);
