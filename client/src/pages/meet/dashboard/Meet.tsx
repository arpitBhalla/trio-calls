import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Controller from "./components/Controller";
import { makeStyles } from "@material-ui/core/styles";
import { useVideoConf } from "../hooks/useVideoConf";
import { LeftBar, SidePanel, Sketch, Video } from "./components";
import Grid, { GridSize } from "@material-ui/core/Grid";

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

const Meet: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles({ open });

  const { myStream, peerStream, destroyConnection, raiseHand } = useVideoConf();
  const [gridSize, setGridSize] = React.useState(1);

  React.useEffect(() => {
    const TOTAL_PARTICIPANTS = peerStream.current?.size || 0;
    const GRID_SIZE = [12, 6, 4, 3, 3, 3, 3][TOTAL_PARTICIPANTS];
    let mount = true;
    if (mount) setGridSize(GRID_SIZE);
    return () => {
      mount = false;
    };
  }, [peerStream.current?.size, myStream.current?.active]);

  return (
    <>
      <Box display="flex" height="88vh" alignItems="center">
        <Box className={clsx(classes.content, open && classes.contentOff)}>
          <Grid container spacing={1} direction="row" alignItems="center">
            <Grid item xs={gridSize as GridSize}>
              <Box display="flex" justifyContent="center">
                <Video stream={myStream.current} displayName={"You"} />
              </Box>
            </Grid>
            {Array.from(peerStream.current || []).map(
              ([key, { displayName, stream }]) => {
                return (
                  <Grid key={key} item xs={gridSize as GridSize}>
                    <Box display="flex" justifyContent="center">
                      <Video stream={stream} displayName={displayName} />
                    </Box>
                  </Grid>
                );
              }
            )}
          </Grid>
        </Box>
      </Box>
      <SidePanel open={open} setOpen={setOpen} />
      <Controller
        endCallHandler={destroyConnection}
        raiseHandHandler={raiseHand}
      />
      <LeftBar />
      <Sketch />
    </>
  );
};
export default Meet;
