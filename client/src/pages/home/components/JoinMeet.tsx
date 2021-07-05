import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import { isValidMeetID, stringToMeetID, setStateHandler } from "utils/common";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

const JoinMeet: React.FC = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [meetID, setMeetID] = useState("");
  const [error, setError] = useState("");

  const handleJoinMeet = async () => {
    const parsedMeetID = stringToMeetID(meetID);
    if (!isValidMeetID(parsedMeetID)) {
      setError("Invalid meeting ID");
      return enqueueSnackbar("Meet ID is invalid", {
        variant: "error",
      });
    }
    history.push(`/${parsedMeetID}`);
  };

  return (
    <>
      <FormControl fullWidth error={Boolean(error)}>
        <TextField
          error={Boolean(error)}
          fullWidth
          placeholder="Enter meeting code or link"
          variant="outlined"
          value={meetID}
          onChange={setStateHandler(setMeetID)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyboardIcon color={error ? "error" : "action"} />
              </InputAdornment>
            ),
          }}
        />
        <FormHelperText>{error}</FormHelperText>
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
