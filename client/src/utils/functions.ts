import axiosFetch from "./axiosFetch";

export type UserDetails = {
  displayName: string;
  email: string;
  UID: string;
};
export interface Meeting {
  title: string;
  hostID: string;
  invitees: string[];
  type: "public" | "private";
  time: string;
  chat: [];
}

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

export const stringToMeetID = (str: string) => str.match(/.{1,4}/g)?.join("-");

export const isValidMeetID = (str: string) =>
  /(\w+){4}-(\w+){4}-(\w+){4}/.test(str);
