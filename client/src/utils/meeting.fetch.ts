import axiosFetch from "./axios.fetch";
import { Meeting } from "./types";

export const getMeet = async (
  meetID: string,
  UID: string
): Promise<Meeting> => {
  const res = await axiosFetch.post<Meeting>("/getMeet", {
    meetID,
    UID,
  });
  if (res.status === 200) {
    return res.data;
  } else throw new Error("");
};

export const newMeet = async ({
  hostID,
  invitees,
  title,
  type,
  time,
}: Meeting): Promise<Meeting> => {
  const res = await axiosFetch.post<Meeting>("/newMeet", {
    hostID,
    invitees,
    title,
    type,
    time,
  });
  if (res.status === 200) {
    return res.data;
  } else throw new Error("");
};
