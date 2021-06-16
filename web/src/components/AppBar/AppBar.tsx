import React from "react";
import { Flex, FlexItem, Text, Avatar } from "@fluentui/react-northstar";
import { AcceptIcon } from "@fluentui/react-icons-northstar";
import * as styles from "./AppBar.styles";
import MenuIcon from "./AppWaffleIcon";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";

type Props = unknown;

const AppBar: React.FC<Props> = () => {
  return (
    <>
      <Flex vAlign="center" variables={{}} styles={styles.headerContainer}>
        <FlexItem align="stretch" styles={styles.appIconContainer}>
          <MenuIcon />
        </FlexItem>
        <FlexItem styles={{ paddingLeft: "20px" }}>
          <Text
            color="white"
            content="Microsoft Teams"
            size="large"
            weight="semibold"
          />
        </FlexItem>
        <SearchBar />
        <Avatar
          name="Cecil Folk"
          status={{
            color: "green",
            icon: <AcceptIcon />,
            title: "Available",
          }}
        />
      </Flex>
      {/* <Provider.Consumer
        render={(theme) => (
          <code>{JSON.stringify(theme.siteVariables.colorScheme)}</code>
        )}
      /> */}
      <SideBar />
    </>
  );
};

export default AppBar;
