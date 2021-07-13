import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: 350,
    width: 550,
    borderRadius: 10,
    backgroundColor: "#333333",
  },
  controller: {
    position: "absolute",
    bottom: theme.spacing(2),
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#dddbdba7",
    borderRadius: theme.shape.borderRadius,
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
