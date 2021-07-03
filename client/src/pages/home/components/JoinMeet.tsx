import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import KeyboardIcon from "@material-ui/icons/Keyboard";

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(10),
  },
}));

const App: React.FC<Props> = ({}) => {
  const classes = useStyles();

  return (
    <>
      <TextField
        fullWidth
        placeholder="Enter meeting code or link"
        variant="outlined"
        // value={}
        // onChange={}
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
      <Button fullWidth variant="contained" color="primary">
        Join Meeting
      </Button>
    </>
  );
};
export default App;
