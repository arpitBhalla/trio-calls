import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SideBar from "./components/SideBar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Controller from "./components/Controller";
import clsx from "clsx";
import Fade from "@material-ui/core/Fade";

interface Props {}
const drawerWidth = "350";

const useStyles = makeStyles((theme) => ({
  content: {
    width: `100%`,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  sideBarClose: {
    width: `0%`,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflow: "hidden",
  },
  sideBarOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflow: "hidden",
  },
  sideBarContent: {
    boxSizing: "border-box",
    boxShadow: "0px 0px 30px 1px rgb(214, 214, 214)",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    height: "100%",
  },
}));

const App: React.FC<Props> = ({}) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles({ open });

  return (
    <>
      <Box display="flex" height="90vh">
        <Box bgcolor="pink" className={classes.content}>
          Left
        </Box>
        <Box
          className={clsx({
            [classes.sideBarClose]: !open,
            [classes.sideBarOpen]: open,
          })}
        >
          <Box className={classes.sideBarContent}>
            <SideBar />
          </Box>
        </Box>
      </Box>
      <button onClick={() => setOpen(!open)}>Open</button>
      {JSON.stringify({ open })}
      {/* <Grid container>
        <Grid item xs={12} md={9}></Grid>
        <Grid item xs={12} md={3}>
          <Box className={classes.sideBarContent}>
            <SideBar />
          </Box>
        </Grid>
      </Grid> */}
      <Controller />
    </>
  );
};
export default App;
