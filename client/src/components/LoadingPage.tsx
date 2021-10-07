import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    display: "flex",
    backgroundColor: theme.palette.background.default,
    flexDirection: "column",
  },
}));

const LoadingPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open>
      <Box p={2}>
        <Logo size={10} />
      </Box>
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default LoadingPage;
