import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import VoiceChatOutlinedIcon from "@material-ui/icons/VoiceChatOutlined";

type Props = {
  joinMeetHandler: () => unknown;
};

export const ReadyComponent: React.FC<Props> = ({ joinMeetHandler }) => (
  <Box display="flex" flexDirection="column" alignItems="center">
    <Typography variant="h5" color="textPrimary">
      <b>Ready to join?</b>
    </Typography>
    <br />
    <Button
      size="large"
      variant="contained"
      color="primary"
      onClick={joinMeetHandler}
      startIcon={<VoiceChatOutlinedIcon />}
    >
      Join Now
    </Button>
  </Box>
);
