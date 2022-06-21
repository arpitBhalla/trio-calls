import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Preview from "./Preview";
import Box from "@material-ui/core/Box";
import Header from "@arpitbhalla/trio-calls/components/Header";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { getMeet } from "@arpitbhalla/trio-calls/utils/meeting.fetch";
import { useHistory, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useAppSelector, useAppDispatch } from "core/hooks/redux";
import { updateMeetDetails } from "core/reducers/meeting";
import { useTitle } from "core/hooks/common";
import { LoadingComponent } from "./LoadingComponent";
import { ReadyComponent } from "./ReadyComponent";

type Params = { meetID: string };

type WaitingRoomProps = {
  joinMeetHandler: () => unknown;
};

const WaitingRoom: React.FC<WaitingRoomProps> = ({ joinMeetHandler }) => {
  const dispatch = useAppDispatch();
  const { meetID } = useParams<Params>();
  const { enqueueSnackbar } = useSnackbar();
  const { UID } = useAppSelector(({ authReducer }) => authReducer);
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

  return (
    <>
      <Header elevation={1} />
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
              <Preview />
            </Grid>
            <Grid item md={5}>
              {loading ? (
                <LoadingComponent />
              ) : (
                <ReadyComponent joinMeetHandler={joinMeetHandler} />
              )}
            </Grid>
          </Grid>
        )}
      </Container>
    </>
  );
};
export default WaitingRoom;
