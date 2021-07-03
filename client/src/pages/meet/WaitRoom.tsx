import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import VideoCallOutlined from "@material-ui/icons/VideoCallOutlined";
import VideoPreview from "./components/VideoPreview";
import Toolbar from "@material-ui/core/Toolbar";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import { useAppSelector } from "core/hooks/redux";

type Props = {};

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: "space-between",
  },
  logo: {
    height: theme.spacing(6),
  },
  root: {},
}));

const WaitingRoom: React.FC<Props> = () => {
  const classes = useStyles();
  const { displayName } = useAppSelector(({ authReducer }) => authReducer);

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <img
          alt="MS Teams"
          className={classes.logo}
          src="https://heliocentrix.co.uk/wp-content/uploads/2020/04/microsoft-teams-logo-png_480-480.png"
        />
        <Chip
          label={displayName}
          color="primary"
          avatar={<Avatar>{displayName[0].toUpperCase()}</Avatar>}
        />
      </Toolbar>
      <Container maxWidth="sm">
        <VideoPreview />
        <Box display="flex" justifyContent="center" p={5}>
          <Button
            size="large"
            variant="contained"
            color="primary"
            // fullWidth
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
