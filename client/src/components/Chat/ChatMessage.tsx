import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, ListItemText } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

type Props = {
  displayName?: string;
  message?: string;
  time?: string;
  isSelf?: boolean;
  hideAvatar?: boolean;
  hidePrimary?: boolean;
};

const useStyles = makeStyles(() => ({
  secondary: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const ChatMessage: React.FC<Props> = ({
  displayName,
  message,
  time,
  isSelf,
  hidePrimary,
}) => {
  const classes = useStyles();
  return (
    <ListItem style={{ padding: 2 }}>
      <ListItemText
        style={{ margin: 0 }}
        primary={
          !hidePrimary && (
            <Typography
              className={classes.secondary}
              variant="caption"
              color="textSecondary"
            >
              <b>
                {displayName} {isSelf && "(You)"}
              </b>
              <b>{time}</b>
            </Typography>
          )
        }
        secondary={<Typography variant="body2">{message}</Typography>}
      />
    </ListItem>
  );
};

export default React.memo(ChatMessage);
