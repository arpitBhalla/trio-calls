import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import { isValidMeetID, stringToMeetID, setStateHandler } from "utils/common";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(10),
  },
}));
// isValidMeetID, stringToMeetID;
const JoinMeet: React.FC<Props> = ({}) => {
  const classes = useStyles();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [meetID, setMeetID] = useState("");

  const handleJoinMeet = async () => {
    if (!isValidMeetID(stringToMeetID(meetID))) {
      enqueueSnackbar("Meet ID is invalid", {
        variant: "error",
      });
    }
  };

  return (
    <>
      <TextField
        fullWidth
        placeholder="Enter meeting code or link"
        variant="outlined"
        value={meetID}
        onChange={setStateHandler(setMeetID)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <KeyboardIcon color="action" />
            </InputAdornment>
          ),
        }}
      />
      <br />
      <br />
      <Button
        fullWidth
        onClick={handleJoinMeet}
        variant="contained"
        color="primary"
      >
        Join Meeting
      </Button>
    </>
  );
};
export default JoinMeet;
