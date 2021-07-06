import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { ChatLayout, ChatMessage, ChatTextInput } from "components/Chat";
import Avatar from "@material-ui/core/Avatar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ChartParticipants from "./components/ChatParticipants";
import { useTitle } from "core/hooks/common";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackOutlined from "@material-ui/icons/ArrowBackOutlined";

type Props = {};

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Chat: React.FC<Props> = ({}) => {
  useTitle("Chats");
  const classes = useStyles();
  const [activeMeetID, setActiveMeetID] = React.useState("");
  return (
    <>
      {/* <Header toolBarBottomMargin={1} /> */}
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid item sm={4}>
              <Typography variant="h6">
                <IconButton aria-label="" onClick={console.log}>
                  <ArrowBackOutlined color="action" />
                </IconButton>
                <b>Recent Chats</b>
              </Typography>
            </Grid>
            <Grid item sm={8}>
              <Avatar>A</Avatar>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

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
        <Grid item sm={8}>
          <ChatLayout />
          <ChatTextInput />
        </Grid>
      </Grid>
      {/* </Container> */}
    </>
  );
};
export default Chat;
