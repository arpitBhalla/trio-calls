import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import Fab from "@material-ui/core/Fab";

type ChatTextInputProps = {
  onSend?: React.MouseEventHandler<HTMLButtonElement>;
  isSmall?: boolean;
};

const useStyles = makeStyles((theme) => ({
  rootBox: {
    display: "flex",
    alignItems: "center",
    bottom: 0,
  },
  sendIcon: {
    marginLeft: theme.spacing(2),
    paddingLeft: 4,
  },
}));

const ChatTextInput: React.FC<ChatTextInputProps> = ({
  onSend = (e) => e,
  isSmall,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.rootBox}>
      <TextField
        fullWidth
        placeholder="Send a message to everyone"
        variant="outlined"
        margin={isSmall ? "dense" : "none"}
      />
      <div>
        <Fab
          size={isSmall ? "small" : "medium"}
          color="primary"
          aria-label="send message"
          className={classes.sendIcon}
          onClick={onSend}
        >
          <SendOutlinedIcon fontSize={"small"} />
        </Fab>
      </div>
    </Box>
  );
};
export default ChatTextInput;
