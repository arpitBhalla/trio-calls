import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import ChatMessage from "./ChatMessage";
import ChatTextInput from "./ChatTextInput";

const useStyles = makeStyles(() => ({
  chatRoot: {
    height: "88%",
    overflowY: "auto",
    margin: "10px 0px",
    position: "relative",
  },
}));

const ChatLayout: React.FC = () => {
  const classes = useStyles();
  return (
    <>
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
        {[...new Array(2)].map((v, i) => (
          <ChatMessage
            key={i}
            hideAvatar
            hidePrimary
            displayName="Arpit"
            message="Hii"
            time={new Date().toLocaleTimeString("en-IN", {
              hour12: true,
              hour: "numeric",
              minute: "2-digit",
            })}
          />
        ))}
        <ChatTextInput isSmall />
      </Box>
    </>
  );
};
export default ChatLayout;
