import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ToolBar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const App: React.FC<Props> = ({}) => {
  const classes = useStyles();
  return (
    <>
      <ToolBar />
      <Container maxWidth="sm">
        <Grid container spacing={1}>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <Box p={1}>
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Audio Source"
                  select
                  //   value={}
                  //   onChange={}
                >
                  <MenuItem value={"sd"}>sad</MenuItem>
                </TextField>
              </FormControl>

              <FormControl fullWidth margin="normal">
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Video Source"
                  select
                  //   value={}
                  //   onChange={}
                >
                  <MenuItem value={"sd"}>sad</MenuItem>
                </TextField>
              </FormControl>
              <Button
                size="large"
                fullWidth
                variant="contained"
                color="primary"
              >
                Join Now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default App;
