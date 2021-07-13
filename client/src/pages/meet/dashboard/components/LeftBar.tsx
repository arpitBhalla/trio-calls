import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    bottom: theme.spacing(4),
    left: theme.spacing(2),
  },
}));

const LeftBar: React.FC = () => {
  const classes = useStyles();
  const [time, setTime] = React.useState(new Date());
  const { meetID } = useParams<{ meetID: string }>();

  React.useEffect(() => {
    const subs = setTimeout(() => {
      setTime(new Date());
    }, 60e3);
    return () => {
      clearInterval(subs);
    };
  }, [time]);

  return (
    <Box className={classes.root}>
      <Typography variant="h6" color="textSecondary">
        <b>
          {time.toLocaleTimeString("en-IN", {
            hour12: true,
            hour: "numeric",
            minute: "2-digit",
          })}{" "}
          | {meetID}
        </b>
      </Typography>
    </Box>
  );
};
export default LeftBar;
