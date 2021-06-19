import * as React from "react";
import { Flex, FlexItem, Text } from "@fluentui/react-northstar";
import {
  BellIcon,
  ChatIcon,
  ContactGroupIcon,
} from "@fluentui/react-icons-northstar";
import * as styles from "./SideBar.styles";
import { useLocation } from "react-router-dom";

type Props = unknown;

const sideBarItems = [
  ["Activity", BellIcon],
  ["Chat", ChatIcon],
  ["Teams", ContactGroupIcon],
];

const SideBar: React.FC<Props> = () => {
  const { pathname } = useLocation();

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
        <FlexItem key={name.toString()} styles={styles.Box}>
          <Flex
            column
            hAlign="center"
            variables={{ selected: name === "Chat" }}
            styles={styles.Item}
          >
            <Icon outline={name !== "Chat"} size="large" />
            <Text
              color={name === "Chat" ? "brand" : "#ac1313"}
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
