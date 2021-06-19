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

const sideBarItems: [string, typeof BellIcon][] = [
  ["Activity", BellIcon],
  ["Chat", ChatIcon],
  ["Teams", ContactGroupIcon],
];

type ItemProps = {
  Icon: typeof BellIcon;
  name?: string;
  selected?: boolean;
};

const Item: React.FC<ItemProps> = ({ Icon, name, selected }) => (
  <FlexItem styles={styles.Box}>
    <Flex column hAlign="center" variables={{ selected }} styles={styles.Item}>
      <Icon outline={!selected} size="large" />
      <Text
        color={selected ? "brand" : "#ac1313"}
        size="smaller"
        content={name}
      />
    </Flex>
  </FlexItem>
);

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
        <Item
          key={name.toString()}
          {...{ Icon, name }}
          selected={name === "Teams"}
        />
      ))}
    </Flex>
  );
};

export default SideBar;
