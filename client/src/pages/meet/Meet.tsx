import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SideBar from "./components/SideBar";
import Grid from "@material-ui/core/Grid";
import Controller from "./components/Controller";

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const App: React.FC<Props> = ({}) => {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={9}></Grid>
        <Grid item xs={12} md={3}>
          <SideBar />
        </Grid>
      </Grid>
      <Controller />
    </>
  );
};
export default App;
