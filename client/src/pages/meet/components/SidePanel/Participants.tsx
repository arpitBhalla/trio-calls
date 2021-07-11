import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MicOffOutlinedIcon from "@material-ui/icons/MicOffOutlined";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import GetAppOutlinedIcon from "@material-ui/icons/GetAppOutlined";
import Button from "@material-ui/core/Button";
import { CSVLink, CSVDownload } from "react-csv";

const useStyles = makeStyles((theme) => ({
  avatar: {
    // backgroundColor: (props: { bgColor: string; lightBgColor: string }) =>
    //   theme.palette.type === "dark" ? props.lightBgColor : props.bgColor,
    marginRight: 8,
  },
}));

type ParticipantBoxProps = {
  isHost?: boolean;
  isSelf?: boolean;
  displayName?: string;
};

const ParticipantBox: React.FC<ParticipantBoxProps> = ({
  isHost = true,
  isSelf,
  displayName,
}) => {
  const classes = useStyles();
  return (
    <Box
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
          <b>
            {displayName} {isSelf && "(You)"}
          </b>
        </Typography>
      </Box>
      {isHost && (
        <div>
          <Tooltip
            title={(Math.random() > 0.1 ? "Mute " : "Unmute ") + displayName}
          >
            <IconButton aria-label="mute">
              {Math.random() > 0.1 ? (
                <MicNoneOutlinedIcon fontSize="small" />
              ) : (
                <MicOffOutlinedIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
          <Tooltip title={"Remove " + displayName}>
            <IconButton aria-label="remove from meeting">
              <RemoveCircleOutlineOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </div>
      )}
    </Box>
  );
};

type Props = {
  isHost?: boolean;
};

const Participants: React.FC<Props> = ({ isHost }) => {
  return (
    <>
      <CSVLink filename="TeamsMeeting.csv" data={[]}>
        <Button
          fullWidth
          variant="text"
          color="primary"
          startIcon={<GetAppOutlinedIcon />}
        >
          Download Attendance
        </Button>
      </CSVLink>
      {["Arpit", "rajiv", "Prem", "@kiran"].map((e) => (
        <ParticipantBox displayName={e} key={e} />
      ))}
    </>
  );
};
export default Participants;
