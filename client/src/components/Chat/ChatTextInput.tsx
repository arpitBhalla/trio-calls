import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Fab from "@material-ui/core/Fab";

type ChatTextInputProps = {
  onSend?: React.MouseEventHandler<HTMLButtonElement>;
};

const useStyles = makeStyles((theme) => ({
  rootBox: {
    display: "flex",
  },
  sendIcon: {
    marginLeft: theme.spacing(2),
  },
}));

const ChatTextInput: React.FC<ChatTextInputProps> = ({ onSend = () => {} }) => {
  const classes = useStyles();
  return (
    <Box className={classes.rootBox}>
      <TextField
        fullWidth
        placeholder="Send a message to everyone"
        variant="outlined"
        // InputProps={{
        //   startAdornment: (
        //     <InputAdornment position="start">
        //       <IconButton aria-label="">
        //         <SendOutlinedIcon style={{ margin: 0, padding: 0 }} />
        //       </IconButton>
        //     </InputAdornment>
        //   ),
        // }}
      />
      <div>
        <Fab
          color="primary"
          aria-label="send message"
          className={classes.sendIcon}
          onClick={onSend}
        >
          <SendOutlinedIcon />
        </Fab>
      </div>
    </Box>
  );
};
export default ChatTextInput;
