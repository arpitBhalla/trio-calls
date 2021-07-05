import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import VideoCallOutlined from "@material-ui/icons/VideoCallOutlined";
import VideoPreview from "./components/VideoPreview";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import ActiveUser from "components/ActiveUser";
import Logo from "components/Logo";
import { getMeet } from "utils/meetingFetch";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useAppSelector, useAppDispatch } from "core/hooks/redux";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

type Props = {};
type Params = { meetID: string };

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: "space-between",
    marginBottom: theme.spacing(8),
  },
}));

const WaitingRoom: React.FC<Props> = () => {
  const classes = useStyles();
  const { meetID } = useParams<Params>();
  const { enqueueSnackbar } = useSnackbar();
  const { UID } = useAppSelector(({ authReducer }) => authReducer);
  const dispatch = useAppDispatch();

  const [loading, setLoading] = React.useState(!true);

  // React.useEffect(() => {
  //   getMeet(meetID, UID)
  //     .then((meetingDetails) => console.log)
  //     .catch((error) => {
  //       enqueueSnackbar(error.message || "Something went wrong", {
  //         variant: "error",
  //       });
  //     })
  //     .finally(() => setLoading(false));
  // }, [meetID, enqueueSnackbar, UID]);

  const LoadingComponent = () => (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h5" color="textPrimary">
        <b>Getting Ready</b>
      </Typography>
      <Typography variant="subtitle2" color="textPrimary">
        You will be able to join in few time
      </Typography>
      <br />
      <CircularProgress />
    </Box>
  );
  const ReadyComponent = () => (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h5" color="textPrimary">
        <b>Ready to join?</b>
      </Typography>
      <br />
      <Button
        size="large"
        variant="contained"
        color="primary"
        startIcon={<VideoCallOutlined />}
      >
        {0 ? "Ask to Join" : "Join Now"}
      </Button>
    </Box>
  );

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Logo />
        <ActiveUser color="default" />
      </Toolbar>
      <Container maxWidth="md">
        <Grid container alignItems="center" spacing={1}>
          <Grid item md={7}>
            <VideoPreview />
          </Grid>
          <Grid item md={5}>
            {loading ? <LoadingComponent /> : <ReadyComponent />}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default WaitingRoom;
