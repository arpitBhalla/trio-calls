export const useSetTitle = (title?: string) => {
  document.title = [title || "", "Microsoft Teams"].join(title ? " | " : "");
};
