import React from "react";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { PollType } from "./PollType";
import { AfterPoll } from "./AfterPoll";

const PollForm: React.FC<PollType> = ({ question, options, correct }) => {
  const [response, setResponse] = React.useState("");
  const [submit, setSubmit] = React.useState(false);

  if (submit) {
    return <AfterPoll {...{ question, options, correct, myRes: response }} />;
  }
  return (
    <Box>
      <Typography variant="subtitle1" color="textPrimary">
        {question}
      </Typography>
      <FormControl component="fieldset" fullWidth>
        <RadioGroup
          aria-label="options"
          value={response}
          onChange={(event, val) => setResponse(val)}
        >
          {options.map((opt) => (
            <FormControlLabel
              key={opt}
              value={opt}
              label={opt}
              control={<Radio />}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Box display="flex" justifyContent="flex-end">
        <Button
          onClick={() => setSubmit(true)}
          size="small"
          variant="contained"
          color="primary"
        >
          Vote
        </Button>
      </Box>
    </Box>
  );
};

export default PollForm;
