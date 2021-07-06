import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, ListItemText } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

type Props = {
  name?: string;
  message?: string;
  time?: string;
  isMe?: boolean;
  hideAvatar?: boolean;
};

const useStyles = makeStyles((theme) => ({
  secondary: {
    display: "flex",
    justifyContent: "space-between",
  },
  avatar: {},
}));

const ChatMessage: React.FC<Props> = ({
  name,
  message,
  time,
  isMe,
  hideAvatar,
}) => {
  const classes = useStyles();
  return (
    <ListItem>
      {!hideAvatar && (
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            {String(name || "").toUpperCase()[0]}
          </Avatar>
        </ListItemAvatar>
      )}
      <ListItemText
        primary={
          <Typography
            className={classes.secondary}
            variant="caption"
            color="textSecondary"
          >
            <b>
              {name} {isMe && "(You)"}
            </b>
            <b>{time}</b>
          </Typography>
        }
        secondary={<Typography variant="body2">{message}</Typography>}
      />
    </ListItem>
  );
};

export default React.memo(ChatMessage);
