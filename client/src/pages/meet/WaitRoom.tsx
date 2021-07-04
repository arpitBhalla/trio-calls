import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import VideoCallOutlined from "@material-ui/icons/VideoCallOutlined";
import VideoPreview from "./components/VideoPreview";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import ActiveUser from "components/ActiveUser";
import Logo from "components/Logo";

type Props = {};

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: "space-between",
  },
  logo: {
    height: theme.spacing(6),
  },
}));

const WaitingRoom: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Logo />
        <ActiveUser color="primary" />
      </Toolbar>
      <Container maxWidth="sm">
        <VideoPreview />
        <Box display="flex" justifyContent="center" p={5}>
          <Button
            size="large"
            variant="contained"
            color="primary"
            startIcon={<VideoCallOutlined />}
          >
            {1 ? "Ask to Join" : "Join Now"}
          </Button>
        </Box>
      </Container>
    </>
  );
};
export default WaitingRoom;
