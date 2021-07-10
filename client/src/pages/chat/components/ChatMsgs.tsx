import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { ChatMessage, ChatTextInput } from "components/Chat";
import { useMsgs } from "core/hooks/useMsgs";
import { useSocket } from "core/hooks/useSocket";

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

type ChatMsgsProps = {
  meetID: string;
};

const ChatMsgs: React.FC<ChatMsgsProps> = ({ meetID }) => {
  const classes = useStyles();
  const { chat, sendMessage, UID: userID } = useMsgs();
  const socketClient = useSocket();

  React.useEffect(() => {
    socketClient.emit("join-room", {
      meetID,
    });
    return () => {
      socketClient.off();
    };
  }, []);
  return (
    <Box className={classes.root}>
      <Box className={classes.chatRoot}>
        {chat?.map(({ message, displayName, time, UID }, i) => (
          <ChatMessage
            key={i}
            hideAvatar
            // hidePrimary={i % 3 === 0}
            displayName={displayName}
            isSelf={UID === userID}
            message={message}
            time={new Date(time).toLocaleTimeString("en-IN", {
              hour12: true,
              hour: "numeric",
              minute: "2-digit",
            })}
          />
        ))}
      </Box>
      <Box className={classes.textBox}>
        <ChatTextInput onSend={sendMessage} />
      </Box>
    </Box>
  );
};
export default ChatMsgs;
