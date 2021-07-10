import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { ChatMessage, ChatTextInput } from "components/Chat";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    height: "70vh",
    position: "relative",
  },
  chatRoot: {
    height: "57vh",
    overflowY: "auto",
  },
  textBox: {
    bottom: 0,
    width: "100%",
  },
}));

const ChatMsgs: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.chatRoot}>
        <ChatMessage
          hideAvatar
          displayName="Arpit"
          message="Hii"
          isSelf
          time={new Date().toLocaleTimeString("en-IN", {
            hour12: true,
            hour: "numeric",
            minute: "2-digit",
          })}
        />
        {[...new Array(20)].map((v, i) => (
          <ChatMessage
            key={i}
            hideAvatar
            hidePrimary={i % 3 === 0}
            displayName="Arpit"
            message="Hii"
            time={new Date().toLocaleTimeString("en-IN", {
              hour12: true,
              hour: "numeric",
              minute: "2-digit",
            })}
          />
        ))}
      </Box>
      <Box className={classes.textBox}>
        <ChatTextInput />
      </Box>
    </Box>
  );
};
export default ChatMsgs;
