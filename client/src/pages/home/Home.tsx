import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import NewMeet from "./components/NewMeet";
import JoinMeet from "./components/JoinMeet";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useAppSelector } from "core/hooks/redux";

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(10),
  },
}));

const App: React.FC<Props> = () => {
  const classes = useStyles();
  const { displayName } = useAppSelector(({ authReducer }) => authReducer);
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6">Microsoft Mini Teams</Typography>
          <Chip
            label={displayName}
            avatar={<Avatar>{displayName[0]}</Avatar>}
          />
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={7}>
            <img
              alt="Meeting"
              src="https://www.gstatic.com/meet/user_edu_brady_bunch_light_81fa864771e5c1dd6c75abe020c61345.svg"
            />
          </Grid>
          <Grid item xs={5}>
            <Box
              boxShadow="0px 0px 30px 1px rgb(214, 214, 214)"
              p={3}
              minHeight="50vh"
            >
              <Tabs
                centered
                value={tabIndex}
                onChange={(e, n) => setTabIndex(n)}
                variant="fullWidth"
              >
                <Tab label="Join with Code" />
                <Tab label="Create New" />
              </Tabs>
              <Box pt={3} p={2}>
                {tabIndex ? <NewMeet /> : <JoinMeet />}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default App;
