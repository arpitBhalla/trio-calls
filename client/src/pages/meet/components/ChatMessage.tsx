import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, ListItem, ListItemText } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

type Props = {
  name?: string;
  message?: string;
  time?: string;
  isMe?: boolean;
};

const useStyles = makeStyles((theme) => ({
  secondary: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const ChatComponent: React.FC<Props> = ({ name, message, time, isMe }) => {
  const classes = useStyles();
  return (
    <ListItem>
      <ListItemText
        primary={
          <Box className={classes.secondary}>
            <Typography variant="caption" color="textSecondary">
              <b>
                {name} {isMe && "(You)"}
              </b>
            </Typography>
            <Typography variant="caption" color="textSecondary">
              <b>{time}</b>
            </Typography>
          </Box>
        }
        secondary={<Typography variant="body2">{message}</Typography>}
      />
    </ListItem>
  );
};

export default React.memo(ChatComponent);
