import { ComponentSlotStyle } from "@fluentui/react-northstar";

export const headerContainer: ComponentSlotStyle = ({
  theme: { siteVariables },
}) => ({
  // padding: "8px 13px",
  backgroundColor: siteVariables.colorScheme.brand.background4,
});

export const appIconContainer: ComponentSlotStyle = ({
  theme: { siteVariables },
}) => ({
  padding: "6px 18px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: siteVariables.colorScheme.brand.background6,
  },
});
