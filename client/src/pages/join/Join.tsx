import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import VideoCallOutlined from "@material-ui/icons/VideoCallOutlined";
import VideoPreview from "./components/VideoPreview";

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const App: React.FC<Props> = () => {
  const classes = useStyles();
  return (
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
  );
};
export default App;
