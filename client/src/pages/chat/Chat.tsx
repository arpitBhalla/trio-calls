import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header";
import Grid from "@material-ui/core/Grid";
import { ChatLayout, ChatTextInput } from "components/Chat";
import ChartParticipants from "./components/ChatParticipants";
import { useTitle } from "core/hooks/common";
import Container from "@material-ui/core/Container";

type Props = { a?: unknown };

const useStyles = makeStyles((theme) => ({
  root: {},
  chatBox: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
}));

const Chat: React.FC<Props> = () => {
  useTitle("Chats");
  const classes = useStyles();
  const [activeMeetID, setActiveMeetID] = React.useState("");
  return (
    <>
      <Header toolBarBottomMargin={1} />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item sm={4}>
            <ChartParticipants
              onClick={setActiveMeetID}
              selectedMeetID={activeMeetID}
              chats={[
                {
                  displayName: "Arpit Bhalla",
                  lastMessage: "Hello World",
                  meetID: "2a",
                  lastMessageTime: "Now",
                },
                {
                  displayName: "Arpit Bhalla",
                  lastMessage: "Hello World",
                  meetID: "2",
                  lastMessageTime: "Now",
                },
                {
                  displayName: "Arpit Bhalla",
                  lastMessage: "Hello World",
                  meetID: "20",
                  lastMessageTime: "Now",
                },
              ]}
            />
          </Grid>
          <Grid item className={classes.chatBox} sm={8}>
            <ChatLayout />
            <ChatTextInput />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Chat;
