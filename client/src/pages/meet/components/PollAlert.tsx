import React, { useState, forwardRef, useCallback } from "react";
import classnames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { useSnackbar, SnackbarContent } from "notistack";
import Collapse from "@material-ui/core/Collapse";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      minWidth: "344px !important",
    },
  },
  card: {
    backgroundColor: "#fddc6c",
    width: "100%",
  },
  typography: {
    fontWeight: "bold",
  },
  actionRoot: {
    padding: "8px 8px 8px 16px",
    justifyContent: "space-between",
  },
  icons: {
    marginLeft: "auto",
  },
  expand: {
    padding: "8px 8px",
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  collapse: {
    padding: 16,
  },
  checkIcon: {
    fontSize: 20,
    color: "#b3b3b3",
    paddingRight: 4,
  },
  button: {
    padding: 0,
    textTransform: "none",
  },
}));

const SnackMessage = forwardRef<
  HTMLDivElement,
  { id: string | number; message: string | React.ReactNode }
>((props, ref) => {
  const classes = useStyles();
  const { closeSnackbar } = useSnackbar();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = useCallback(() => {
    setExpanded((oldExpanded) => !oldExpanded);
  }, []);

  const handleDismiss = useCallback(() => {
    closeSnackbar(props.id);
  }, [props.id, closeSnackbar]);

  return (
    <SnackbarContent ref={ref} className={classes.root}>
      <Card className={classes.card}>
        <CardActions classes={{ root: classes.actionRoot }}>
          <Typography variant="subtitle2" className={classes.typography}>
            {props.message}
          </Typography>
          <div className={classes.icons}>
            <IconButton
              aria-label="Show more"
              className={classnames(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
            >
              <ExpandMoreIcon />
            </IconButton>
            <IconButton className={classes.expand} onClick={handleDismiss}>
              <CloseIcon />
            </IconButton>
          </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Paper className={classes.collapse}>
            <Typography gutterBottom>PDF ready</Typography>
            <Button size="small" className={classes.button}>
              <CheckCircleIcon className={classes.checkIcon} />
              Download now
            </Button>
          </Paper>
        </Collapse>
      </Card>
    </SnackbarContent>
  );
});

SnackMessage.displayName = "Poll";

export default SnackMessage;
