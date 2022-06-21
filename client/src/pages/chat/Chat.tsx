import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "@arpitbhalla/trio-calls/components/Header";
import ShadowBox from "@arpitbhalla/trio-calls/components/ShadowBox";
import Box from "@material-ui/core/Box";
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
import Typography from "@material-ui/core/Typography";

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
  const history = useHistory();
  const classes = useStyles();
  const { meetID } = useParams<{ meetID: string }>();
  const [title, setTitle] = React.useState("");

  useTitle(title || "Chats");

  return (
    <>
      <Header toolBarBottomMargin={2} />
      <Container maxWidth="md">
        <ShadowBox>
          <ChatHeader title={title} meetID={meetID} />
          <Grid container>
            <Grid item sm={4} className={classes.chatList}>
              <ChatParticipants />
            </Grid>
            <Grid item sm={8}>
              {meetID ? (
                <ChatMsgs handleTitle={setTitle} />
              ) : (
                <Box
                  display="flex"
                  justifyContent="center"
                  flexDirection="column"
                  py={8}
                >
                  <img
                    alt="Start new chat"
                    width={180}
                    style={{ alignSelf: "center", margin: 20 }}
                    src={
                      "https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg"
                    }
                  />
                  <Typography variant="h5" align="center">
                    Select someone to chat.
                  </Typography>
                </Box>
              )}
            </Grid>
          </Grid>
        </ShadowBox>
      </Container>
      <Tooltip title="Video Calls (Alt+v)">
        <Fab
          accessKey="v"
          color="primary"
          className={classes.fab}
          onClick={() => history.push("/")}
        >
          <VoiceChatOutlinedIcon />
        </Fab>
      </Tooltip>
    </>
  );
};
export default Chat;
