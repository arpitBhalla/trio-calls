import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory, useParams } from "react-router-dom";

type Participants = {
  lastMessage?: string;
  lastMessageTime?: string;
  displayName: string;
  meetID?: string;
};

type ChartParticipantsProps = {
  chats?: Participants[];
  meetID?: string;
};

const useStyles = makeStyles((theme) => ({
  chatRoot: {
    overflowY: "auto",
    height: "60vh",
  },
  secondary: {
    display: "flex",
    justifyContent: "space-between",
  },
  selectedListItem: {
    backgroundColor: theme.palette.action.hover,
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const ChatComponent: React.FC<ChartParticipantsProps> = ({ chats, meetID }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <TextField
        variant="outlined"
        placeholder="Search"
        margin="dense"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        // value={}
        // onChange={}
      />
      <List className={classes.chatRoot}>
        {React.Children.toArray(
          chats?.map((chat, key) => (
            <ListItem
              key={key}
              button
              onClick={() => {
                history.push(`/chat/${chat.meetID}`);
              }}
              className={clsx({
                [classes.selectedListItem]: meetID === chat.meetID,
              })}
            >
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  {String(chat.displayName || "").toUpperCase()[0]}
                </Avatar>
              </ListItemAvatar>
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
    </>
  );
};
export default ChatComponent;
