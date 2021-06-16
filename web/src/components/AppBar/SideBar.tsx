import * as React from "react";
import { Flex, FlexItem, Text } from "@fluentui/react-northstar";
import {
  BellIcon,
  ChatIcon,
  ContactGroupIcon,
} from "@fluentui/react-icons-northstar";

type Props = unknown;

const sideBarItems = [
  ["Activity", BellIcon],
  ["Chat", ChatIcon],
  ["Teams", ContactGroupIcon],
];

const SideBar: React.FC<Props> = () => {
  return (
    <Flex
      column
      hAlign="stretch"
      styles={{
        backgroundColor: "#ebebeb",
        maxWidth: "68px",
      }}
    >
      {sideBarItems.map(([name, Icon]) => (
        <FlexItem
          key={name}
          styles={({ theme: { siteVariables } }) => ({
            padding: "14px 15px ",
            maxWidth: "68px",
            cursor: "pointer",
            color: siteVariables.colorScheme.brand.background6,
            "&:hover": {
              backgroundColor: "#ffffff",
            },
          })}
        >
          <Flex column hAlign="center">
            <Icon outline={name !== "Chat"} size="large" />
            <Text
              color={name === "Chat" ? "brand" : "grey"}
              size="smaller"
              content={name}
            />
          </Flex>
        </FlexItem>
      ))}
    </Flex>
  );
};

export default SideBar;
