import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { LockOpenOutlined, LockOutlined } from "@material-ui/icons";
import { useSocket } from "core/hooks/useSocket";

const LockMeet: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [locked, setLocked] = React.useState(false);
  const socket = useSocket();

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handlePress = () => {
    socket.emit("lockMeeting", true);
    setLocked(true);
    onClose();
  };

  return (
    <>
      <Tooltip title="Lock Meet">
        <IconButton onClick={onOpen} disabled={locked}>
          {locked ? <LockOutlined color="error" /> : <LockOpenOutlined />}
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={onClose} aria-labelledby="lock meeting">
        <DialogTitle>Do you really want to lock meeting?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            New member would not able to join, You can not undo this action
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePress} variant="contained" color="primary">
            Yeah Sure
          </Button>
          <Button onClick={onClose} color="default">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default LockMeet;
