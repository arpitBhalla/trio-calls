import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListSubheader } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ChatMessage from "./ChatMessage";
import TextField from "@material-ui/core/TextField";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

interface Props {}

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "25ch",
    paddingRight: 0,
  },
}));

const ChatComponent: React.FC<Props> = () => {
  const classes = useStyles();
  return (
    <>
      <List>
        <ListSubheader>
          <Typography variant="caption" color="textSecondary">
            <b>In Call</b>
          </Typography>
        </ListSubheader>
        <ChatMessage
          name="Arpit"
          message="Hii"
          time={new Date().toLocaleTimeString("en-IN", {
            hour12: true,
            hour: "numeric",
            minute: "2-digit",
          })}
        />
        <ChatMessage
          isMe
          name="Rajiv"
          message="Hello Arpit sadfdsjf sdafdsf hids dsifnsd fisdf sdf isda fias"
          time={new Date().toLocaleTimeString()}
        />
      </List>
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
    </>
  );
};
export default ChatComponent;
