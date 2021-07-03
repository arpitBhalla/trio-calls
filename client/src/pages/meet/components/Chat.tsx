import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListSubheader } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ChatMessage from "./ChatMessage";

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const ChatComponent: React.FC<Props> = () => {
  const classes = useStyles();
  return (
    <List>
      <ListSubheader>
        <Typography variant="caption" color="textSecondary">
          <b>In Call</b>
        </Typography>
      </ListSubheader>
      <ChatMessage
        name="Arpit"
        message="Hii"
        time={new Date().toLocaleTimeString()}
      />
      <ChatMessage
        isMe
        name="Rajiv"
        message="Hello Arpit sadfdsjf sdafdsf hids dsifnsd fisdf sdf isda fias"
        time={new Date().toLocaleTimeString()}
      />
    </List>
  );
};
export default ChatComponent;
