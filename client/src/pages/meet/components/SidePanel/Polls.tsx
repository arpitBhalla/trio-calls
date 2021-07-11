import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import { useSnackbar } from "notistack";
import { CopyToClipboard } from "utils/common";
import AddIcon from "@material-ui/icons/Add";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import A from "./PollForm";

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
      <A />
      <Box p={2} borderRadius={3} border="1px solid #e2e2e2">
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1" color="textPrimary">
            Poll Question 1
          </Typography>
          <Chip label="Live" color="primary" />
        </Box>
        <Box py={1} display="flex" justifyContent="space-between">
          <Typography variant="body2" color="textSecondary">
            Answer 1
          </Typography>
          <Typography variant="caption" color="textSecondary">
            1 vote
          </Typography>
        </Box>
        <BorderLinearProgress variant="determinate" value={50} />{" "}
        <Box py={1} display="flex" justifyContent="space-between">
          <Typography variant="body2" color="textSecondary">
            Answer 2
          </Typography>
          <Typography variant="caption" color="textSecondary">
            1 vote
          </Typography>
        </Box>
        <BorderLinearProgress variant="determinate" value={20} />
      </Box>
      <Button
        fullWidth
        startIcon={<AddIcon />}
        variant="text"
        color="secondary"
      >
        Create a poll
      </Button>
    </>
  );
};
export default InfoPanel;

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
  },
}))(LinearProgress);
