import axiosFetch from "./axios.fetch";
import { Meeting } from "./types";

type Response = Meeting & { message?: string };

export const getMeet = async (
  meetID: string,
  UID: string
): Promise<Meeting> => {
  return new Promise((resolve, reject) => {
    return axiosFetch
      .post<Response>("/getMeet", {
        meetID,
        UID,
      })
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data);
        } else reject(res.data.message);
      });
  });
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
