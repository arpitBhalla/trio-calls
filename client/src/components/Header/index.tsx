import loadable from "@loadable/component";
import LinearProgress from "@material-ui/core/LinearProgress";

export default loadable(() => import("./Header"), {
  fallback: <LinearProgress />,
});
