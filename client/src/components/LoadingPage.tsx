import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    display: "flex",
    backgroundColor: "#fff",
    flexDirection: "column",
  },
}));

const LoadingPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open>
      <Logo size={16} />
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default LoadingPage;
