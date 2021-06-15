import * as React from "react";
import { Menu, MenuItemProps, Flex } from "@fluentui/react-northstar";
import { Stack } from "@fluentui/react";
import {
  BellIcon,
  ChatIcon,
  ContactGroupIcon,
  CallIcon,
  FilesEmptyIcon,
} from "@fluentui/react-icons-northstar";

const items: (MenuItemProps & { key: string })[] = [
  { key: "editorials", content: "Editorials", icon: <BellIcon /> },
  { key: "review", content: "Reviews" },
  { key: "events", content: "Upcoming Events" },
];

type Props = {};

const SideBar: React.FC<Props> = () => {
  return (
    <Flex styles={({ theme: { siteVariables } }) => ({})}>
      {/* <FlexItem */}
      <BellIcon size="large" />
      <ChatIcon outline={true} size="large" />
      <ContactGroupIcon outline={true} size="larger" />
      <CallIcon outline={true} size="larger" />
      <FilesEmptyIcon outline={true} size="larger" />
    </Flex>
  );
};

export default SideBar;
