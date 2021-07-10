import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const NotFound: React.FC = () => {
  const history = useHistory();

  return (
    <Container maxWidth="md">
      <Box textAlign="center">
        <Typography variant="h4">URL not found</Typography>
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/")}
        >
          Return to home screen
        </Button>
      </Box>
    </Container>
  );
};
export default NotFound;
