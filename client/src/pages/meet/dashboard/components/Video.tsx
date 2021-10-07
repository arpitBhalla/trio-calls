import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "30rem",
    width: "60rem",
    backgroundColor: "#a2a2a2",
    maxWidth: "800px",
    maxHeight: "900px",
    borderRadius: 8,
  },
  video: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: 8,
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
  stream: MediaStream | undefined;
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
    if (videoController.current && stream) {
      videoController.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <Box className={classes.root}>
      <video
        className={classes.video}
        ref={videoController}
        autoPlay
        {...props}
      />
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
