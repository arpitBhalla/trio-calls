import React from "react";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Grid from "@material-ui/core/Grid";

type PollCreatorProps = {
  open?: boolean;
  onClose?: () => unknown;
};

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const PollCreator: React.FC<PollCreatorProps> = ({
  onClose = () => "",
  open = false,
}) => {
  const classes = useStyles();
  return (
    <Dialog open={open} aria-labelledby="poll modal" onClose={onClose}>
      <DialogTitle>New Poll</DialogTitle>
      <DialogContent>
        <TextField
          label="Question"
          variant="filled"
          size="small"
          fullWidth
          //   value={}
          //   onChange={}
        />
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={2}>
            <Radio />
          </Grid>
          <Grid item xs={10}>
            <TextField
              fullWidth
              size="small"
              label="Option 1"
              margin="normal"
              variant="filled"
              //   value={}
              //   onChange={}
            />
          </Grid>
        </Grid>

        <Button
          fullWidth
          startIcon={<AddCircleOutlineOutlinedIcon />}
          variant="text"
          color="default"
        >
          Add option
        </Button>
      </DialogContent>
      <DialogActions>
        <Button size="small" variant="contained" color="primary">
          Create
        </Button>
        <Button color="default">Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};
export default PollCreator;
