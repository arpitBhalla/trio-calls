import React from "react";
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
import { ChatParticipantSkeleton } from "components/Chat/ChatSkeleton";
import { getAllMeets } from "utils/chat.fetch";
import { useSnackbar } from "notistack";
import { Meeting } from "utils/types";
import { useStyles } from "./styles/ChatParticipants";
import { useAppSelector } from "core/hooks/redux";

// type Participants = {
//   lastMessage?: string;
//   lastMessageTime?: string;
//   displayName: string;
//   meetID?: string;
// };

const ChatParticipants: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { meetID } = useParams<{ meetID: string }>();
  const [loading, setLoading] = React.useState(true);
  const [users, setUsers] = React.useState<Meeting[]>([]);
  const [search, setSearch] = React.useState("");
  const UID = useAppSelector((state) => state.authReducer.UID);

  React.useEffect(() => {
    getAllMeets(UID)
      .then((users) => {
        setUsers(users);
        setLoading(false);
      })
      .catch((err) => {
        enqueueSnackbar(err || "Something went wrong", {
          variant: "error",
        });
      });
  }, []);

  const filterChats = (chat: Meeting) => {
    return search ? chat.title?.includes(search) : true;
  };

  return (
    <div>
      <TextField
        variant="outlined"
        placeholder="Search"
        margin="dense"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <List className={classes.chatRoot}>
        {loading
          ? [...new Array(5)].map((e, i) => <ChatParticipantSkeleton key={i} />)
          : users?.filter(filterChats).map((chat, key) => (
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
                    {String(chat.title || "").toUpperCase()[0]}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      className={classes.secondary}
                      variant="subtitle2"
                      color="textSecondary"
                    >
                      <b>{chat.title}</b>
                      {/* <b>{chat.}</b> */}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="caption">
                      {/* {String(chat.lastMessage || "").slice(0, 35)}&nbsp; */}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
      </List>
    </div>
  );
};
export default ChatParticipants;
