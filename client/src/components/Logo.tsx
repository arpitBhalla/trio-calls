import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import logo from "../assets/teams.png";

type Props = {
  size?: number;
};

const useStyles = makeStyles((theme) => ({
  logo: {
    height: ({ size }: { size: number }) => theme.spacing(size),
  },
}));

const Logo: React.FC<Props> = ({ size = 6 }) => {
  const classes = useStyles({ size });
  const history = useHistory();
  return (
    <img
      className={classes.logo}
      alt="Trio Calls"
      src={logo}
      onClick={() => history.push("/")}
    />
  );
};
export default React.memo(Logo);
