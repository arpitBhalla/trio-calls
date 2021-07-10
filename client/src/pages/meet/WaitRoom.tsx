import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import VideoPreview from "./components/Preview";
import Box from "@material-ui/core/Box";
import Header from "components/Header";
import { getMeet } from "utils/meeting.fetch";
import { useHistory, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useAppSelector, useAppDispatch } from "core/hooks/redux";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import VoiceChatOutlinedIcon from "@material-ui/icons/VoiceChatOutlined";
import { updateMeetDetails } from "core/reducers/meeting";
import { useTitle } from "core/hooks/common";

type Params = { meetID: string };

type WaitingRoomProps = {
  joinMeetHandler: () => unknown;
};

const WaitingRoom: React.FC<WaitingRoomProps> = ({ joinMeetHandler }) => {
  const { meetID } = useParams<Params>();
  const { enqueueSnackbar } = useSnackbar();
  const { UID } = useAppSelector(({ authReducer }) => authReducer);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = React.useState(true);
  const [meetOk, setMeetOk] = React.useState<boolean | null>(null);
  const history = useHistory();

  useTitle("Join Meet");

  React.useEffect(() => {
    getMeet(meetID, UID)
      .then((details) => {
        const { _id, hostID, title, type } = details;
        dispatch(
          updateMeetDetails({
            MID: _id || "",
            hostID,
            isHost: hostID === UID,
            meetID,
            title,
            type,
          })
        );
        setMeetOk(true);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setMeetOk(false);
        enqueueSnackbar(error || "Something went wrong", {
          variant: "error",
        });
      });
  }, [meetID, UID]);

  const LoadingComponent = () => (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h5" color="textPrimary">
        <b>Getting Ready</b>
      </Typography>
      <Typography variant="subtitle2" color="textPrimary">
        Checking Meet info
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
        onClick={joinMeetHandler}
        startIcon={<VoiceChatOutlinedIcon />}
      >
        {Math.random() > 1 ? "Ask to Join" : "Join Now"}
      </Button>
    </Box>
  );

  return (
    <>
      <Header />
      <Container maxWidth="md">
        {meetOk === false ? (
          <Box textAlign="center">
            <Typography variant="h4">Invalid meeting</Typography>
            <Typography variant="subtitle1">
              Either link does not exist or you are not invited
            </Typography>
            <br />
            <br />
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push("/")}
            >
              Return to home screen
            </Button>
          </Box>
        ) : (
          <Grid container alignItems="center" spacing={1}>
            <Grid item md={7}>
              <VideoPreview />
            </Grid>
            <Grid item md={5}>
              {loading ? <LoadingComponent /> : <ReadyComponent />}
            </Grid>
          </Grid>
        )}
      </Container>
    </>
  );
};
export default WaitingRoom;
