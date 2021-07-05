import axiosFetch from "./axiosFetch";
import { Meeting } from "./types";

export const getMeet = (meetID: string): Promise<Meeting> =>
  new Promise(async (resolve, reject) => {
    let res = await axiosFetch.post<Meeting>("/getMeet", {
      meetID,
    });
    if (res.status === 200) {
      resolve(res.data);
    } else reject();
  });

export const newMeet = ({
  hostID,
  invitees,
  title,
  type,
  time,
}: Meeting): Promise<Meeting> =>
  new Promise(async (resolve, reject) => {
    let res = await axiosFetch.post<Meeting>("/newMeet", {
      hostID,
      invitees,
      title,
      type,
      time,
    });
    if (res.status === 200) {
      resolve(res.data);
    } else reject();
  });
