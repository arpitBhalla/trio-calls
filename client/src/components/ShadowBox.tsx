import { withStyles } from "@material-ui/core/styles";
import Box, { BoxProps } from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

const ShadowBox = withStyles(({ palette: { type } }) => ({
  root: {
    boxShadow: `0px 0px 30px 1px  ${type === "dark" ? "#0e0c0c" : "#c2c2c2"}`,
  },
}))((p: BoxProps) => <Box component={Paper} {...p} />);

export default ShadowBox;
