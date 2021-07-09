import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SideBar from "./components/SidePanel";
import Box from "@material-ui/core/Box";
import Controller from "./components/Controller";
import clsx from "clsx";
import { useVideoConf } from "core/hooks/useVideoConf";
import Video from "./components/Video";
import Grid, { GridSize } from "@material-ui/core/Grid";
import LeftBar from "./components/LeftBar";
import Sketch from "./components/Sketch";
interface Props {
  a?: unknown;
}

const useStyles = makeStyles((theme) => ({
  content: {
    width: "100%",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    padding: theme.spacing(1),
  },
  contentOff: {
    marginRight: "370px",
  },
}));

const App: React.FC<Props> = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles({ open });
  const { myStream, peerStream } = useVideoConf();
  console.log(peerStream, myStream);

  const TOTAL_PARTICIPANTS = 2;
  const GRID_SIZE = 12 / TOTAL_PARTICIPANTS;

  return (
    <>
      <Box display="flex" height="88vh">
        <Box className={clsx(classes.content, open && classes.contentOff)}>
          <Grid container spacing={1}>
            <Grid item xs={GRID_SIZE as GridSize}>
              <Box display="flex" height={"100%"}>
                <Video
                  stream={myStream.current}
                  isVideo={true}
                  displayName={"You"}
                />
              </Box>
            </Grid>
            {Array.from(peerStream.current || []).map(([key, stream]) => {
              return (
                <Grid key={key} item xs={GRID_SIZE as GridSize}>
                  <Box display="flex" height={"100%"}>
                    <Video stream={stream} isVideo={true} displayName={key} />
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
      <SideBar open={open} setOpen={setOpen} />
      <Controller />
      <LeftBar />
      <Sketch
        open
        onClose={() => {
          return "";
        }}
      />
    </>
  );
};
export default App;
