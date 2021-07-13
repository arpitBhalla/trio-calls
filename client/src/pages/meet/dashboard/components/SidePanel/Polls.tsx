import React from "react";
import Button from "@material-ui/core/Button";
import { useSnackbar } from "notistack";
import AddIcon from "@material-ui/icons/Add";
import Box from "@material-ui/core/Box";
import PollModal from "./Poll/Modal";
import PollAlert from "./Poll/Form";
import { useSocket } from "core/hooks/useSocket";
import { PollType } from "./Poll/PollType";
import { useAppSelector } from "core/hooks/redux";

const Polls: React.FC = () => {
  const socketClient = useSocket();
  const { enqueueSnackbar } = useSnackbar();
  const [openModal, setOpenModal] = React.useState(false);
  const poll = useAppSelector((state) => state.meetReducer.poll);
  const handlePress = () => {
    setOpenModal(true);
  };

  const createPoll = React.useCallback((pollData: PollType) => {
    socketClient.emit("newPoll", pollData);
    enqueueSnackbar("Poll Published");
  }, []);

  console.log(poll);
  return (
    <>
      <PollModal
        pollHandler={createPoll}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
      {!poll.question ? (
        <Box py={3} display="flex" justifyContent="center">
          <img
            width={"90"}
            alt="Poll Icon"
            src="https://avatars.slack-edge.com/2020-05-09/1112549471909_7543dde099089941d3c3_512.png"
          />
        </Box>
      ) : (
        <PollAlert {...poll} />
      )}
      <Button
        fullWidth
        startIcon={<AddIcon />}
        variant="text"
        color="secondary"
        onClick={handlePress}
      >
        Create a poll
      </Button>
    </>
  );
};
export default Polls;
