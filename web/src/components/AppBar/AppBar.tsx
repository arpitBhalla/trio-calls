import React from "react";
import { Flex, FlexItem, Text } from "@fluentui/react-northstar";
import * as styles from "./AppBar.styles";
import MenuIcon from "./AppWaffleIcon";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";

type Props = {};

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
