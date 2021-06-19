export const useSetTitle = (title?: string): void => {
  document.title = [title || "", "Microsoft Teams"].join(title ? " | " : "");
};
