import loadable from "@loadable/component";
import LinearProgress from "@material-ui/core/LinearProgress";

export const Video = loadable(() => import("./Video"), {
  fallback: <LinearProgress />,
});
export const SidePanel = loadable(() => import("./SidePanel"), {
  fallback: <LinearProgress />,
});
export const LeftBar = loadable(() => import("./LeftBar"), {
  fallback: <LinearProgress />,
});
export const Sketch = loadable(() => import("./Sketch"), {
  fallback: <LinearProgress />,
});
