import React from "react";
import { Flex } from "@fluentui/react-northstar";
import AppBarIcon from "assets/img/appBar.svg";

type Props = {};

const AppBar: React.FC<Props> = () => {
  return (
    <div style={{ backgroundColor: "brand" }}>
      <Flex styles={{ backgroundColor: "brand.foreground3" }} color="brand">
        aDS
        <AppBarIcon />
      </Flex>
    </div>
  );
};

export default AppBar;
