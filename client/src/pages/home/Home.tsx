import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import NewMeet from "./components/NewMeet";
import JoinMeet from "./components/JoinMeet";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import Header from "components/Header";
import Fab from "@material-ui/core/Fab";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(10),
  },
  fab: {
    position: "absolute",
    right: theme.spacing(4),
    bottom: theme.spacing(4),
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <Header />
      <Tooltip title="Chat">
        <Fab
          color="primary"
          className={classes.fab}
          onClick={() => history.push("/chat")}
        >
          <ChatOutlinedIcon />
        </Fab>
      </Tooltip>
      <Container maxWidth="md" className={classes.root}>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={false} sm={7}>
            <img
              alt="Meeting"
              src="https://www.gstatic.com/meet/user_edu_brady_bunch_light_81fa864771e5c1dd6c75abe020c61345.svg"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Fade in timeout={500} unmountOnExit>
              <Box boxShadow="0px 0px 30px 1px rgb(214, 214, 214)" p={4} py={5}>
                <JoinMeet />
                <Typography align="center" variant="h6" color="textSecondary">
                  or
                </Typography>
                <NewMeet />
              </Box>
              {/* <Box textAlign="center">
              <CircularProgress />
            </Box> */}
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Home;
