import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { ChatMessage, ChatTextInput } from "components/Chat";
import { useMsgs } from "core/hooks/useMsgs";
import { useSocket } from "core/hooks/useSocket";
import { useParams } from "react-router-dom";
import { useAppSelector } from "core/hooks/redux";
import { ChatMsgSkeleton } from "components/Chat/ChatSkeleton";

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
  meetID?: string;
};

const ChatMsgs: React.FC<ChatMsgsProps> = () => {
  const classes = useStyles();
  const { meetID } = useParams<{ meetID: string }>();
  const { sendMessage, loading } = useMsgs(meetID);
  const { UID: userID } = useAppSelector((state) => state.authReducer);
  const { chat } = useAppSelector((state) => state.chatReducer);
  const socketClient = useSocket();

  React.useEffect(() => {
    socketClient.emit("join-room", {
      meetID,
    });
  }, []);

  let prev = "";

  return (
    <Box className={classes.root}>
      <Box className={classes.chatRoot}>
        {loading
          ? [...new Array(5)].map((e, i) => <ChatMsgSkeleton key={i} />)
          : chat?.map(({ message, displayName, createdAt, UID }, i) => (
              <ChatMessage
                key={i}
                hideAvatar
                hidePrimary={prev === (prev = UID)}
                displayName={displayName}
                isSelf={UID === userID}
                message={message}
                time={new Date(createdAt || Date.now()).toLocaleTimeString(
                  "en-IN",
                  {
                    hour12: true,
                    hour: "numeric",
                    minute: "2-digit",
                  }
                )}
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
