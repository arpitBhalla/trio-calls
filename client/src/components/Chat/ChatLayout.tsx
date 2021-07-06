import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListSubheader, Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ChatMessage from "./ChatMessage";
import TextField from "@material-ui/core/TextField";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

interface Props {}

const useStyles = makeStyles((theme) => ({
  chatRoot: {
    maxHeight: "88%",
    overflowY: "scroll",
    margin: "10px 0px",
  },
}));

const ChatComponent: React.FC<Props> = () => {
  const classes = useStyles();
  return (
    <Box height="90%">
      <Typography variant="subtitle2" color="textSecondary">
        <b>In Call</b>
      </Typography>
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
          {[...new Array(10)].map((v) => (
            <ChatMessage
              isMe
              name="Rajiv"
              message="Hello Arpit sadfdsjf sdafdsf hids dsifnsd fisdf sdf isda fias"
              time={new Date().toLocaleTimeString()}
            />
          ))}
        </List>
      </Box>

      <TextField
        fullWidth
        placeholder="Send a message to everyone"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="">
                <SendOutlinedIcon style={{ margin: 0, padding: 0 }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
export default ChatComponent;
