import React from "react";
import { Flex, FlexItem, Text, mergeStyles } from "@fluentui/react-northstar";
import AppBarIcon from "./AppWaffleIcon";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";

type Props = {};

const AppBar: React.FC<Props> = () => {
  return (
    <>
      <Flex
        vAlign="center"
        styles={({ theme: { siteVariables } }) => ({
          padding: "8px 13px ",
          backgroundColor: siteVariables.colorScheme.brand.background4,
        })}
      >
        <FlexItem
          styles={({ theme: { siteVariables } }) => ({
            padding: "8px 13px ",
            backgroundColor: siteVariables.colorScheme.brand.background4,
          })}
        >
          <AppBarIcon />
        </FlexItem>
        <FlexItem styles={{ paddingLeft: "2em" }}>
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
