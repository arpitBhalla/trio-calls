import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import GetAppOutlinedIcon from "@material-ui/icons/GetAppOutlined";
import Button from "@material-ui/core/Button";
import { CSVLink } from "react-csv";
import { MeetParticipants } from "core/reducers/meeting";
import { useSocket } from "core/hooks/useSocket";

const useStyles = makeStyles(() => ({
  avatar: {
    marginRight: 8,
  },
}));

type Props = {
  isHost?: boolean;
  participants: Record<string, MeetParticipants>;
};

const Participants: React.FC<Props> = ({ isHost, participants }) => {
  const classes = useStyles();
  const socket = useSocket();
  const removeParticipant = (UID: string) => {
    console.log(UID);
    socket.emit("forceQuit", UID);
  };

  return (
    <>
      {isHost && (
        <CSVLink
          filename="TrioCallsMeeting.csv"
          data={Object.values(participants)}
        >
          <Button
            fullWidth
            variant="text"
            color="primary"
            startIcon={<GetAppOutlinedIcon />}
          >
            Download Attendance
          </Button>
        </CSVLink>
      )}
      <Box
        display="flex"
        my={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          <Avatar className={classes.avatar}></Avatar>
          <Typography variant="subtitle1" color="textSecondary">
            <b>You</b>
          </Typography>
        </Box>
      </Box>
      {[...Object.entries(participants)].map(
        ([UID, { displayName, isAvail }], key) =>
          isAvail ? (
            <Box
              key={key}
              display="flex"
              my={1}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center">
                <Avatar className={classes.avatar}>
                  {displayName?.[0].toUpperCase()}
                </Avatar>
                <Typography variant="subtitle1" color="textSecondary">
                  <b>{displayName}</b>
                </Typography>
              </Box>
              {isHost && UID && (
                <Tooltip title={"Remove " + displayName}>
                  <IconButton
                    aria-label="remove from meeting"
                    onClick={() => removeParticipant?.(UID)}
                  >
                    <RemoveCircleOutlineOutlinedIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              )}
            </Box>
          ) : (
            <div key={key} />
          )
      )}
    </>
  );
};
export default Participants;
