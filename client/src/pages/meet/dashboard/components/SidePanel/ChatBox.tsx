import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import {
  ChatMessage,
  ChatTextInput,
} from "@arpitbhalla/trio-calls/components/Chat";
import { useMsgs } from "core/hooks/useMsgs";
import { useAppSelector } from "core/hooks/redux";
import { dateToTime } from "@arpitbhalla/trio-calls/utils/common";
import { useParams } from "react-router-dom";
import { LinearProgress } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  chatRoot: {
    position: "relative",
  },
  chatBox: {
    height: "60vh",
    overflowY: "auto",
  },
}));

const ChatLayout: React.FC = () => {
  const classes = useStyles();
  const { userID, chat } = useAppSelector((state) => ({
    userID: state.authReducer.UID,
    chat: state.chatReducer.chat,
  }));
  const { meetID } = useParams<{ meetID: string }>();
  const { sendMessage, loading } = useMsgs(meetID);

  console.log(chat);
  let prev = "";
  return (
    <Box className={classes.chatRoot}>
      <Box className={classes.chatBox}>
        {loading ? (
          <LinearProgress />
        ) : (
          chat?.map(({ message, displayName, createdAt, UID }, i) => (
            <ChatMessage
              key={i}
              hideAvatar
              hidePrimary={prev === (prev = UID)}
              displayName={displayName}
              isSelf={UID === userID}
              message={message}
              time={dateToTime(createdAt)}
            />
          ))
        )}
      </Box>
      <ChatTextInput isSmall onSend={sendMessage} />
    </Box>
  );
};
export default ChatLayout;
