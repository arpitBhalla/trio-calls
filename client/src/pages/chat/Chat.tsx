import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ChatComponent from "components/Chat/ChatLayout";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ChartParticipants from "./components/ChatParticipants";

type Props = {};

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Chat: React.FC<Props> = ({}) => {
  const classes = useStyles();
  const [activeMeetID, setActiveMeetID] = React.useState("");

  return (
    <>
      <Header toolBarBottomMargin={5} />
      <Container maxWidth="md">
        <Grid container spacing={1}>
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
          <Grid item sm={8}>
            <ChatComponent />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Chat;
