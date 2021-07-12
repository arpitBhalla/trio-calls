import { useEffect } from "react";
import { SnackbarKey, useSnackbar } from "notistack";

export const useConnection = (): void => {
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    let snackKey: SnackbarKey;
    const offlineHandler = () => {
      snackKey = enqueueSnackbar("No Internet connection", {
        variant: "error",
        preventDuplicate: true,
        anchorOrigin: {
          horizontal: "center",
          vertical: "bottom",
        },
        persist: true,
      });
    };
    const onlineHandler = () => {
      closeSnackbar(snackKey);
    };
    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);
    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  });
};
