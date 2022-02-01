import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import Fab from "@material-ui/core/Fab";
import Picker from "emoji-picker-react";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Popper from "@material-ui/core/Popper";

type ChatTextInputProps = {
  onSend?: (message: string) => unknown;
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

const ChatTextInput: React.FC<ChatTextInputProps> = ({ onSend, isSmall }) => {
  const classes = useStyles();
  const [text, setText] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleSubmit = () => {
    if (!text) return;
    onSend?.(text);
    setText("");
  };

  return (
    <Box className={classes.rootBox}>
      <Popper open={Boolean(anchorEl)} anchorEl={anchorEl}>
        <Picker
          onEmojiClick={(_event, { emoji }) => {
            setText(text + emoji);
          }}
        />
      </Popper>
      <TextField
        fullWidth
        multiline
        rowsMax={2}
        placeholder="Send a message to everyone"
        variant="outlined"
        value={text}
        margin={isSmall ? "dense" : "none"}
        onChange={(e) => setText(e.target.value)}
        InputProps={{
          startAdornment: !isSmall && (
            <InputAdornment style={{ margin: 0, padding: 0 }} position="start">
              <IconButton aria-label="" onClick={handleClick}>
                <TagFacesIcon color="action" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <div>
        <Fab
          size={isSmall ? "small" : "medium"}
          color="primary"
          aria-label="send message"
          className={classes.sendIcon}
          onClick={handleSubmit}
        >
          <SendOutlinedIcon fontSize={"small"} />
        </Fab>
      </div>
    </Box>
  );
};
export default ChatTextInput;
