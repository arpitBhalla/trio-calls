/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { ReactSketchCanvas } from "react-sketch-canvas";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Tooltip from "@material-ui/core/Tooltip";
import clsx from "clsx";
import ShadowBox from "@arpitbhalla/trio-calls/components/ShadowBox";
// Icon
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import FormatPaintOutlinedIcon from "@material-ui/icons/FormatPaintOutlined";
import UndoOutlinedIcon from "@material-ui/icons/UndoOutlined";
import RedoOutlinedIcon from "@material-ui/icons/RedoOutlined";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import GetAppOutlinedIcon from "@material-ui/icons/GetAppOutlined";
import { useAppDispatch, useAppSelector } from "core/hooks/redux";
import { toggleWhiteBoard } from "core/reducers/media";

function downloadFile(fileName: string, data: string): void {
  const linkSource = "data:jpg;base64" + data;
  const downloadLink = document.createElement("a");
  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    marginBottom: theme.spacing(3),
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  activeTool: {
    backgroundColor: theme.palette.action.focus,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  //@ts-ignore
  return <Slide direction="up" ref={ref} {...props} />;
});

const Sketch: React.FC = () => {
  const classes = useStyles();
  const [color, setColor] = React.useState("red");
  const [size, setSize] = React.useState(4);
  const [tool, setTool] = React.useState("");
  const sketchRef = React.useRef<ReactSketchCanvas | null>(null);
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.mediaReducer.isWhiteBoard);

  const onClose = () => {
    dispatch(toggleWhiteBoard(false));
  };

  const tools: [
    string,
    typeof BrushOutlinedIcon,
    React.MouseEventHandler<HTMLButtonElement>
  ][] = [
    [
      "Draw",
      BrushOutlinedIcon,
      () => {
        setTool("Draw");
        sketchRef.current?.eraseMode(false);
      },
    ],
    [
      "Erase",
      FormatPaintOutlinedIcon,
      () => {
        setTool("Erase");
        sketchRef.current?.eraseMode(true);
      },
    ],
    ["Undo", UndoOutlinedIcon, () => sketchRef.current?.undo()],
    ["Redo", RedoOutlinedIcon, () => sketchRef.current?.redo()],
    ["Clean", DeleteOutlineIcon, () => sketchRef.current?.clearCanvas()],
    [
      "Download",
      GetAppOutlinedIcon,
      () =>
        sketchRef.current
          ?.exportImage("jpeg")
          .then((e) => downloadFile("Trio Calls.jpg", e)),
    ],
  ];

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      // @ts-ignore
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            White Board
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={1}>
            {tools.map(([title, Icon, handler]) => (
              <Tooltip placement="right" title={title} key={title}>
                <IconButton
                  aria-label={title}
                  onClick={handler}
                  className={clsx(title === tool && classes.activeTool)}
                >
                  <Icon color="action" />
                </IconButton>
              </Tooltip>
            ))}
          </Grid>
          <Grid item xs={11}>
            <ShadowBox>
              <ReactSketchCanvas
                ref={sketchRef}
                style={{}}
                height="450px"
                strokeWidth={size}
                eraserWidth={size}
                strokeColor={color}
              />
            </ShadowBox>
          </Grid>
        </Grid>
        <Container maxWidth="sm">
          <Grid container spacing={1}>
            <Grid item xs={6}>
              {["red", "green", "#e7e700", "blue", "purple", "orange"].map(
                (item) => (
                  <IconButton
                    style={{ backgroundColor: item, margin: 5 }}
                    key={item}
                    onClick={() => {
                      setColor(item);
                    }}
                  />
                )
              )}
            </Grid>
            <Grid item xs={6}>
              <Slider
                value={size}
                onChange={(_event, value) => setSize(value as number)}
                aria-labelledby="pencil size"
                min={2}
                max={40}
              />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Dialog>
  );
};
export default Sketch;
