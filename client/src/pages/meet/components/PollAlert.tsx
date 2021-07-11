import React, { forwardRef, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSnackbar, SnackbarContent } from "notistack";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      minWidth: "344px !important",
    },
  },
}));

const SnackMessage = forwardRef<
  HTMLDivElement,
  { id: string | number; message: string | React.ReactNode }
>((props, ref) => {
  const classes = useStyles();
  const { closeSnackbar } = useSnackbar();

  const handleDismiss = useCallback(() => {
    closeSnackbar(props.id);
  }, [props.id, closeSnackbar]);

  return (
    <SnackbarContent ref={ref} className={classes.root}>
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
        <Box display="flex" justifyContent="flex-end">
          <Button size="small" variant="contained" color="primary">
            Vote
          </Button>
        </Box>
      </Box>
    </SnackbarContent>
  );
});

SnackMessage.displayName = "Poll";

export default SnackMessage;
