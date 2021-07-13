import React from "react";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import TextField from "@material-ui/core/TextField";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import InputAdornment from "@material-ui/core/InputAdornment";
import { PollType } from "./PollType";

type PollCreatorProps = {
  open?: boolean;
  onClose?: () => unknown;
  pollHandler: (pollData: PollType) => unknown;
};

const PollCreator: React.FC<PollCreatorProps> = ({
  onClose = () => "",
  open = false,
  pollHandler,
}) => {
  const [question, setQuestion] = React.useState("");
  const [options, setOptions] = React.useState(["", ""] as string[]);
  const [correct, setCorrect] = React.useState("");

  const handleClick = () => {
    pollHandler({
      question,
      options,
      correct,
    });
    setQuestion("");
    setOptions(["", ""]);
    onClose();
  };

  return (
    <Dialog open={open} aria-labelledby="poll modal" onClose={onClose}>
      <DialogTitle>New Poll</DialogTitle>
      <DialogContent>
        <TextField
          label="Question"
          variant="filled"
          size="small"
          fullWidth
          rows={3}
          multiline
          rowsMax={3}
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
        />
        {options.map((value, index) => {
          return (
            <Grid container key={index} alignItems="center">
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  placeholder={"Option " + (index + 1)}
                  margin="normal"
                  variant="outlined"
                  value={value}
                  onChange={(event) => {
                    const opts = options;
                    opts[index] = event.target.value;
                    setOptions([...opts]);
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Radio
                          checked={Boolean(value && value === correct)}
                          onChange={(event) => setCorrect(event.target.value)}
                          value={value}
                          inputProps={{ "aria-label": value }}
                        />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="delete option"
                          onClick={() => {
                            const opts = options;
                            opts.splice(index, 1);
                            setOptions([...opts]);
                          }}
                        >
                          <CloseIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          );
        })}

        <Button
          fullWidth
          startIcon={<AddCircleOutlineOutlinedIcon />}
          variant="text"
          color="default"
          onClick={() => {
            setOptions([...options, ""]);
          }}
        >
          Add option
        </Button>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClick}
          size="small"
          disabled={!options.length || !question}
          variant="contained"
          color="primary"
        >
          Create
        </Button>
        <Button onClick={onClose} color="default">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default PollCreator;
