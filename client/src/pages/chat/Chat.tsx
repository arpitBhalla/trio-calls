import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header";
import ShadowBox from "components/ShadowBox";
import Grid from "@material-ui/core/Grid";
import ChatHeader from "./components/ChatHeader";
import { useTitle } from "core/hooks/common";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import VoiceChatOutlinedIcon from "@material-ui/icons/VoiceChatOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import { useHistory, useParams } from "react-router-dom";
import loadable from "@loadable/component";
import LinearProgress from "@material-ui/core/LinearProgress";

const ChatParticipants = loadable(
  () => import("./components/ChatParticipants"),
  {
    fallback: <LinearProgress />,
  }
);
const ChatMsgs = loadable(() => import("./components/ChatMsgs"), {
  fallback: <LinearProgress />,
});

const useStyles = makeStyles((theme) => ({
  chatList: {
    padding: theme.spacing(1),
  },
  fab: {
    position: "fixed",
    right: theme.spacing(4),
    bottom: theme.spacing(4),
  },
}));

const Chat: React.FC = () => {
  useTitle("Chats");
  const history = useHistory();
  const classes = useStyles();
  const { meetID } = useParams<{ meetID: string }>();
  const [activeMeetID, setActiveMeetID] = React.useState("");
  console.log(meetID);
  return (
    <>
      <Tooltip title="Video Calls">
        <Fab
          color="primary"
          className={classes.fab}
          onClick={() => history.push("/")}
        >
          <VoiceChatOutlinedIcon />
        </Fab>
      </Tooltip>
      <Header toolBarBottomMargin={2} />
      <Container maxWidth="md">
        <ShadowBox>
          {meetID}
          <ChatHeader />
          <Grid container>
            <Grid item sm={4} className={classes.chatList}>
              {/* <ChatParticipants
                onClick={setActiveMeetID}
                selectedMeetID={activeMeetID}
                chats={[
                  {
                    displayName: "Arpit Bhalla",
                    lastMessage: "Hello World",
                    meetID: "20",
                    lastMessageTime: "Now",
                  },
                ]}
              /> */}
            </Grid>
            <Grid item sm={8}>
              {/* <ChatMsgs /> */}
            </Grid>
          </Grid>
        </ShadowBox>
      </Container>
    </>
  );
};
export default Chat;
