import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import VideoCallOutlined from "@material-ui/icons/VideoCallOutlined";
import VideoPreview from "./components/VideoPreview";
import Toolbar from "@material-ui/core/Toolbar";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import { useAppSelector } from "core/hooks/redux";

type Props = {};

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: "flex-end",
  },
  root: {},
}));

const WaitingRoom: React.FC<Props> = () => {
  const classes = useStyles();
  const { displayName } = useAppSelector(({ authReducer }) => authReducer);

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Chip
          label={displayName}
          color="primary"
          avatar={<Avatar>{displayName[0].toUpperCase()}</Avatar>}
        />
      </Toolbar>
      <Container maxWidth="sm">
        <VideoPreview />
        <Button
          size="large"
          variant="contained"
          color="primary"
          startIcon={<VideoCallOutlined />}
        >
          {1 ? "Ask to Join" : "Join Now"}
        </Button>
      </Container>
    </>
  );
};
export default WaitingRoom;
