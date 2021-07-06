import { withStyles } from "@material-ui/core/styles";
import Box, { BoxProps } from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

const ShadowBox = withStyles(({ palette: { divider } }) => ({
  root: {
    boxShadow: `0px 0px 30px 1px ${divider}`,
  },
}))((p: BoxProps) => <Box component={Paper} {...p} />);

export default ShadowBox;
