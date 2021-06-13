import React from "react";
import { Flex } from "@fluentui/react-northstar";
import AppBarIcon from "./AppWaffleIcon";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";

type Props = {};

const AppBar: React.FC<Props> = () => {
  return (
    <>
      <Flex styles={{ backgroundColor: "brand" }} color="brand">
        <AppBarIcon />
        <SearchBar />
      </Flex>
      <SideBar />
    </>
  );
};

export default AppBar;
