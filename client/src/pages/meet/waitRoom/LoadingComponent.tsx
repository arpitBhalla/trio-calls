import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export const LoadingComponent: React.FC = () => (
  <Box display="flex" flexDirection="column" alignItems="center">
    <Typography variant="h5" color="textPrimary">
      <b>Getting Ready</b>
    </Typography>
    <Typography variant="subtitle2" color="textPrimary">
      Checking Meet info
    </Typography>
    <br />
    <CircularProgress />
  </Box>
);
