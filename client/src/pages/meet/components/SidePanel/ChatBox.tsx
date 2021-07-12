import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { ChatMessage, ChatTextInput } from "components/Chat";
import { useMsgs } from "core/hooks/useMsgs";

const useStyles = makeStyles(() => ({
  chatRoot: {
    margin: "10px 0px",
    position: "relative",
  },
  chatBox: {
    height: "60vh",
    overflowY: "auto",
  },
}));

const ChatLayout: React.FC = () => {
  const classes = useStyles();
  // const { chat, sendMessage, UID: userID } = useMsgs();

  // console.log(chat);
  return (
    <Box className={classes.chatRoot}>
      <Box className={classes.chatBox}>
        {/* {chat.map(({ displayName, UID, message, time }, i) => (
          <ChatMessage
            key={i}
            // hidePrimary
            isSelf={UID === userID}
            displayName={displayName}
            message={message}
            time={new Date(time).toLocaleTimeString("en-IN", {
              hour12: true,
              hour: "numeric",
              minute: "2-digit",
            })}
          />
        ))} */}
      </Box>
      {/* <ChatTextInput isSmall onSend={sendMessage} /> */}
    </Box>
  );
};
export default ChatLayout;
