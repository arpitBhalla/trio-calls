import { ComponentSlotStyle } from "@fluentui/react-northstar";

export const Box: ComponentSlotStyle = ({ theme: { siteVariables } }) => ({
  padding: "13px 15px ",
  maxWidth: "68px",
  cursor: "pointer",
  color: siteVariables.colorScheme.brand.background6,
  "&:hover": {
    backgroundColor: "#ffffff",
  },
});

export const Item: ComponentSlotStyle<unknown, { selected?: boolean }> = ({
  theme: { siteVariables },
  variables,
}) => ({
  borderLeft: "2px solid transparent",
  borderLeftColor: variables.selected
    ? siteVariables.colorScheme.brand.background6
    : "none",
  margin: "2px",
});
