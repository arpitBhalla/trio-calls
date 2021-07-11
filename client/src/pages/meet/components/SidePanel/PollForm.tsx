import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import Box from "@material-ui/core/Box";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";

type Props = { a?: string };

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const App: React.FC<Props> = () => {
  const classes = useStyles();
  return (
    <Box py={1}>
      <TextField
        label="Question"
        variant="filled"
        size="small"

        //   value={}
        //   onChange={}
      />
      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">Options</FormLabel>
        <RadioGroup aria-label="" name="">
          {/* //value={} onChange={}> */}
          <FormControlLabel
            value=""
            label={
              <TextField
                size="small"
                label="Option 1"
                margin="normal"
                variant="filled"
                fullWidth
                //   value={}
                //   onChange={}
              />
            }
            control={<Radio />}
          />
        </RadioGroup>
        <Button
          startIcon={<AddCircleOutlineOutlinedIcon />}
          fullWidth
          variant="text"
          color="default"
        >
          Add option
        </Button>
      </FormControl>
      <Box display="flex" justifyContent="flex-end">
        <Button size="small" variant="contained" color="primary">
          Create
        </Button>
        <IconButton size="small" aria-label="">
          <DeleteOutlinedIcon />
        </IconButton>
      </Box>

      <Box>
        <Typography variant="subtitle1" color="textPrimary">
          Question
        </Typography>
        <FormControl component="fieldset" fullWidth>
          <RadioGroup aria-label="" name="" value="saf">
            <FormControlLabel
              value="aa"
              label="adsfasgduj"
              control={<Radio />}
            />
            <FormControlLabel
              value="a"
              label="adsfasgduj"
              control={<Radio />}
            />
            <FormControlLabel
              value="aaa"
              label="adsfasgduj"
              control={<Radio />}
            />
          </RadioGroup>
        </FormControl>
        <Button size="small" variant="contained" color="primary">
          Vote
        </Button>
      </Box>
    </Box>
  );
};
export default App;
