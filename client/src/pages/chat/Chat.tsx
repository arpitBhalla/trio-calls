import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header";
import ShadowBox from "components/ShadowBox";
import Grid from "@material-ui/core/Grid";
import ChartParticipants from "./components/ChatParticipants";
import ChatHeader from "./components/ChatHeader";
import { useTitle } from "core/hooks/common";
import Container from "@material-ui/core/Container";
import ChatMsgs from "./components/ChatMsgs";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

type Props = { a?: unknown };

const useStyles = makeStyles((theme) => ({
  root: {},
  chatContainer: {},
  chatList: {
    padding: theme.spacing(1),
  },
  chatBox: {
    // padding: theme.spacing(2),
  },
}));

const Chat: React.FC<Props> = () => {
  useTitle("Chats");
  const classes = useStyles();
  const [activeMeetID, setActiveMeetID] = React.useState("");
  return (
    <>
      <Header toolBarBottomMargin={1} />
      <Container maxWidth="md">
        <ShadowBox>
          <ChatHeader />
          <Grid container className={classes.chatContainer}>
            <Grid item sm={4} className={classes.chatList}>
              <TextField
                variant="outlined"
                placeholder="Search"
                margin="dense"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                // value={}
                // onChange={}
              />
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
                    meetID: "2",
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
                    meetID: "2",
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
              <ChatMsgs />
            </Grid>
          </Grid>
        </ShadowBox>
      </Container>
    </>
  );
};
export default Chat;
