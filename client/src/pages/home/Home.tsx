import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import NewMeet from "./components/NewMeet";
import JoinMeet from "./components/JoinMeet";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { useAppSelector } from "core/hooks/redux";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(10),
  },
  typo: { flexGrow: 1 },
}));

const Home: React.FC = () => {
  const classes = useStyles();
  const { displayName } = useAppSelector(({ authReducer }) => authReducer);

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" className={classes.typo}>
            Microsoft Teams
          </Typography>
          <Chip
            label={displayName}
            avatar={<Avatar>{displayName[0].toUpperCase()}</Avatar>}
          />
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" className={classes.root}>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={7}>
            <img
              alt="Meeting"
              src="https://www.gstatic.com/meet/user_edu_brady_bunch_light_81fa864771e5c1dd6c75abe020c61345.svg"
            />
          </Grid>
          <Grid item xs={5}>
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
