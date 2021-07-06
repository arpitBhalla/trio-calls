import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import clsx from "clsx";

type Participants = {
  lastMessage?: string;
  lastMessageTime?: string;
  displayName: string;
  meetID?: string;
};

type ChartParticipantsProps = {
  chats?: Participants[];
  selectedMeetID?: string;
  onClick?: (meetID: string) => unknown;
};

const useStyles = makeStyles((theme) => ({
  chatRoot: {
    overflowY: "auto",
  },
  secondary: {
    display: "flex",
    justifyContent: "space-between",
  },
  selectedListItem: {
    backgroundColor: theme.palette.action.hover,
  },
}));

const ChatComponent: React.FC<ChartParticipantsProps> = ({
  chats,
  selectedMeetID,
  onClick,
}) => {
  const classes = useStyles();

  return (
    <List className={classes.chatRoot}>
      {React.Children.toArray(
        chats?.map((chat) => (
          <ListItem
            button
            onClick={() => {
              onClick?.(chat.meetID || "");
            }}
            className={clsx({
              [classes.selectedListItem]: selectedMeetID === chat.meetID,
            })}
          >
            <ListItemText
              primary={
                <Typography
                  className={classes.secondary}
                  variant="subtitle2"
                  color="textSecondary"
                >
                  <b>{chat.displayName}</b>
                  <b>{chat.lastMessageTime}</b>
                </Typography>
              }
              secondary={
                <Typography variant="caption">
                  {String(chat.lastMessage || "").slice(0, 35)}&nbsp;
                </Typography>
              }
            />
          </ListItem>
        ))
      )}
    </List>
  );
};
export default ChatComponent;
