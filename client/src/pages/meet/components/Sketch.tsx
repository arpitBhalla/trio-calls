import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ReactSketchCanvas } from "react-sketch-canvas";

const styles = {
  border: "0.0625rem solid #9c9c9c",
  borderRadius: "0.25rem",
};

const Canvas = () => {
  return (
    <ReactSketchCanvas
      style={styles}
      width="600"
      height="400"
      strokeWidth={4}
      strokeColor="red"
      onUpdate={console.log}
    />
  );
};

type SketchProps = {
  open: boolean;
};

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Sketch: React.FC<SketchProps> = ({ open }) => {
  const classes = useStyles();
  return (
    <>
      <Canvas />
    </>
  );
};
export default Sketch;
