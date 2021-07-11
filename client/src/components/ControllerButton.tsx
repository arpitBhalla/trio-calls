import { MicOffOutlined } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import ToggleIcon from "material-ui-toggle-icon";

type ControlButtonProps = {
  title?: string;
  isEnabled: boolean;
  IconOn: typeof MicOffOutlined;
  IconOff: typeof MicOffOutlined;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  shortCut?: string;
};

const ControlButton: React.FC<ControlButtonProps> = ({
  title,
  isEnabled,
  IconOn,
  IconOff,
  onClick,
  shortCut,
}) => (
  <Tooltip
    title={`${title} ${!isEnabled ? "off" : "on"} ${
      shortCut ? `(Alt+${shortCut})` : ""
    }`}
  >
    <IconButton accessKey={shortCut || ""} onClick={onClick}>
      <ToggleIcon on={isEnabled} onIcon={<IconOn />} offIcon={<IconOff />} />
    </IconButton>
  </Tooltip>
);
export default ControlButton;
