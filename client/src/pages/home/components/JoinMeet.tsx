import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import { isValidMeetID, stringToMeetID } from "utils/common";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

const JoinMeet: React.FC = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [meetID, setMeetID] = useState({ text: "", error: "" });

  const handleJoinMeet = async () => {
    const parsedMeetID = stringToMeetID(meetID.text);
    if (!isValidMeetID(parsedMeetID)) {
      setMeetID({ ...meetID, error: "Invalid meeting ID" });
      return enqueueSnackbar("Meet ID is invalid", {
        variant: "error",
      });
    }
    history.push(`/${parsedMeetID}`);
  };

  return (
    <>
      <FormControl fullWidth error={Boolean(meetID.error)}>
        <TextField
          error={Boolean(meetID.error)}
          fullWidth
          placeholder="Enter meeting code or link"
          variant="outlined"
          value={meetID.text}
          onChange={(event) =>
            setMeetID({ text: event.target.value, error: "" })
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyboardIcon color={meetID.error ? "error" : "action"} />
              </InputAdornment>
            ),
          }}
        />
        <FormHelperText>{meetID.error}</FormHelperText>
      </FormControl>
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
