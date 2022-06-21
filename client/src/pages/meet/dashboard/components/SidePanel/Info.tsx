import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import { useSnackbar } from "notistack";
import { CopyToClipboard } from "@arpitbhalla/trio-calls/utils/common";

type Props = {
  meetLink?: string;
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.action.hover,
  },
  margin: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

const InfoPanel: React.FC<Props> = ({ meetLink = window.location.href }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const handlePress = () => {
    enqueueSnackbar("Copied meeting link");
    CopyToClipboard(meetLink);
  };

  return (
    <>
      <Typography color="textPrimary" className={classes.margin}>
        Joining info
      </Typography>
      <Typography variant="caption" color="textSecondary">
        {meetLink}
      </Typography>
      <Button
        className={classes.margin}
        fullWidth
        variant="text"
        color="primary"
        onClick={handlePress}
        startIcon={<FileCopyOutlinedIcon />}
      >
        Copy joining info
      </Button>
    </>
  );
};
export default InfoPanel;
