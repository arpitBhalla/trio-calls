import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, Box } from "@material-ui/core";
import ChatMessage from "./ChatMessage";

interface Props {}

const useStyles = makeStyles((theme) => ({
  chatRoot: {
    maxHeight: "88%",
    overflowY: "scroll",
    margin: "10px 0px",
  },
}));

const ChatLayout: React.FC<Props> = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.chatRoot}>
        <List>
          <ChatMessage
            name="Arpit"
            message="Hii"
            time={new Date().toLocaleTimeString("en-IN", {
              hour12: true,
              hour: "numeric",
              minute: "2-digit",
            })}
          />
          {[...new Array(2)].map((v) => (
            <ChatMessage
              isMe
              name="Rajiv"
              message="Hello Arpit sadfdsjf sdafdsf hids dsifnsd fisdf sdf isda fias"
              time={new Date().toLocaleTimeString()}
            />
          ))}
        </List>
      </Box>
    </>
  );
};
export default ChatLayout;
