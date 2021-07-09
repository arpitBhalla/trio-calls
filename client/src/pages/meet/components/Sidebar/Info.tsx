import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MicOffOutlinedIcon from "@material-ui/icons/MicOffOutlined";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import { useSnackbar } from "notistack";

interface Props {
  a?: unknown;
}

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const App: React.FC<Props> = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const handlePress = () => {
    enqueueSnackbar("Copied meeting link");
  };

  return (
    <>
      <Typography variant="subtitle1" color="textSecondary">
        Joining info
      </Typography>
      <Typography variant="caption" color="textSecondary">
        https://ms-teams.vercel.app/my-meet-id
      </Typography>
      <Button
        variant="text"
        color="primary"
        startIcon={<FileCopyOutlinedIcon />}
      >
        Copy joining info
      </Button>
    </>
  );
};
export default App;
