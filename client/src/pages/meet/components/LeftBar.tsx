import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    bottom: theme.spacing(4),
    left: theme.spacing(2),
  },
}));

type Props = {
  meetTitle?: string;
};

const LeftBar: React.FC<Props> = ({ meetTitle = "My Title" }) => {
  const classes = useStyles();
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => {
    const subs = setTimeout(() => {
      setTime(new Date());
    }, 60e3);
    return () => {
      clearInterval(subs);
    };
  }, []);
  return (
    <Box className={classes.root}>
      <Typography variant="h6" color="textSecondary">
        <b>
          {time.toLocaleTimeString("en-IN", {
            hour12: true,
            hour: "numeric",
            minute: "2-digit",
          })}{" "}
          | {meetTitle}
        </b>
      </Typography>
    </Box>
  );
};
export default LeftBar;
