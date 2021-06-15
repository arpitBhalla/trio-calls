import * as React from "react";
import { Flex } from "@fluentui/react-northstar";
import {
  BellIcon,
  ChatIcon,
  ContactGroupIcon,
} from "@fluentui/react-icons-northstar";

type Props = {};

const sideBarItems = [
  ["Activity", BellIcon],
  ["Chat", ChatIcon],
  ["Teams", ContactGroupIcon],
];

const SideBar: React.FC<Props> = () => {
  return (
    <Flex
      column
      hAlign="center"
      styles={({ theme: { siteVariables } }) => ({
        padding: "2px 14px 15px 14px",
        maxWidth: "68px",
        backgroundColor: "red",
      })}
    >
      {sideBarItems.map(([name, Icon]) => (
        <React.Fragment>
          <Icon outline={name !== "Chat"} size="large" />
          {name}
        </React.Fragment>
      ))}
    </Flex>
  );
};

export default SideBar;
