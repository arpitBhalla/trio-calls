import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(10),
  },
}));

const App: React.FC<Props> = () => {
  const classes = useStyles();

  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <>
      <TextField
        fullWidth
        label="Meeting Name"
        variant="outlined"
        // value={}
        // onChange={}
      />
      <br />

      <Switch
        value="sad"
        checked={false}
        onChange={console.log}
        inputProps={{ "aria-label": "asd" }}
      />
      <RadioGroup
        aria-label=""
        name=""
        value={"aa"}
        // onChange={}
      >
        <FormControlLabel value="a" label="Restricted" control={<Radio />} />
        <FormControlLabel value="aa" label="Anyone " control={<Radio />} />
      </RadioGroup>
      <br />
      <Button fullWidth variant="contained" color="primary">
        Start New Meeting
      </Button>
    </>
  );
};
export default App;
