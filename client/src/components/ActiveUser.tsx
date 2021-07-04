import Chip, { ChipProps } from "@material-ui/core/Chip";
import { useAppDispatch, useAppSelector } from "core/hooks/redux";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { updateAuth } from "core/actions/auth";
import Tooltip from "@material-ui/core/Tooltip";
import Avatar from "@material-ui/core/Avatar";

type ActiveUserComponentProps = {
  color?: ChipProps["color"];
};

const ActiveUserComponent: React.FC<ActiveUserComponentProps> = ({
  color = "default",
}) => {
  const { displayName } = useAppSelector(({ authReducer }) => authReducer);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      updateAuth({ isAuth: false, displayName: "", UID: "", email: "" })
    );
  };

  return (
    <Tooltip title="Logout">
      <Chip
        label={displayName}
        color={color}
        onClick={handleClick}
        avatar={
          <Avatar>
            <PowerSettingsNewIcon />
          </Avatar>
        }
      />
    </Tooltip>
  );
};
export default ActiveUserComponent;
