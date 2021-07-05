import React from "react";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import ChipInput from "material-ui-chip-input";
import { newMeet } from "utils/meetingFetch";
import { useAppSelector } from "core/hooks/redux";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";

type MeetType = "public" | "private";

const NewMeetComponent: React.FC = () => {
  const [meetingName, setMeetingName] = React.useState({ text: "", error: "" });
  const [meetingType, setMeetingType] = React.useState<MeetType>("public");
  const [meetingTime, setMeetingTime] = React.useState(new Date());
  const [meetingInvitees, setMeetingInvitees] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { UID } = useAppSelector(({ authReducer }) => authReducer);

  const handleSubmit = async () => {
    setLoading(true);
    await newMeet({
      title: meetingName.text,
      type: meetingType,
      hostID: UID,
      invitees: meetingInvitees,
      time: meetingTime.getTime().toString(),
    })
      .then(({ meetID }) => {
        enqueueSnackbar("Meet Generated", { variant: "info" });
        history.push(`/${meetID}`);
      })
      .catch((error) => {
        enqueueSnackbar(error?.message || "SomeThing went wrong", {
          variant: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <Button
        fullWidth
        variant="outlined"
        color="primary"
        onClick={() => setOpenDialog(!openDialog)}
        startIcon={<VideoCallIcon />}
      >
        Create New Link
      </Button>
      <Dialog
        fullWidth
        onClose={() => setOpenDialog(!openDialog)}
        maxWidth="xs"
        open={openDialog}
        aria-labelledby="new meeting dialog"
      >
        <DialogTitle>Create New Meeting</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <TextField
              disabled={loading}
              fullWidth
              label="Meeting Name"
              variant="outlined"
              value={meetingName.text}
              error={Boolean(meetingName.error)}
              onChange={(event) =>
                setMeetingName({ text: event.target.value, error: "" })
              }
            />
            <FormHelperText>{meetingName.error}</FormHelperText>
          </FormControl>
          <FormControl>
            <RadioGroup
              aria-label="meeting type"
              value={meetingType}
              onChange={(_event, value) => setMeetingType(value as MeetType)}
            >
              <FormControlLabel
                disabled={loading}
                value="public"
                label="Anyone can join"
                control={<Radio />}
              />
              <FormControlLabel
                disabled={loading}
                value="private"
                label="Restricted to invited users"
                control={<Radio />}
              />
            </RadioGroup>
          </FormControl>
          <ChipInput
            fullWidth
            onChange={setMeetingInvitees}
            label="Invite users by email"
            placeholder="Type and press enter to add emails"
          />
          <br />
          <br />
          <Button
            disabled={loading}
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Start New Meeting
          </Button>
          <br />
          <br />
        </DialogContent>
      </Dialog>
    </>
  );
};
export default NewMeetComponent;
