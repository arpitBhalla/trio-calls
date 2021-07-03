import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
        label="Enter meeting code or link"
        variant="outlined"
        // value={}
        // onChange={}
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
