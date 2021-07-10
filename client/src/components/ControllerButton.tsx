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
};

const ControlButton: React.FC<ControlButtonProps> = ({
  title,
  isEnabled,
  IconOn,
  IconOff,
  onClick,
}) => (
  <Tooltip title={title + " " + (!isEnabled ? "off" : "on")}>
    <IconButton onClick={onClick}>
      <ToggleIcon on={isEnabled} onIcon={<IconOn />} offIcon={<IconOff />} />
    </IconButton>
  </Tooltip>
);
export default ControlButton;
