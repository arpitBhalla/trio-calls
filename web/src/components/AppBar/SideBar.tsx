import * as React from "react";
import { Menu, MenuItemProps } from "@fluentui/react-northstar";
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

const MenuExampleVerticalPointing = () => (
  <Menu defaultActiveIndex={0} items={items} vertical pointing />
);

export default MenuExampleVerticalPointing;
