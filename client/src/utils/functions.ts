import axiosFetch from "./axiosFetch";

type UserDetails = {
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
}

export const signIn = (email: string, password: string): Promise<UserDetails> =>
  new Promise(async (resolve, reject) => {
    let res = await axiosFetch.post<UserDetails>("/signin", {
      email,
      password,
    });
    resolve(res.data);
  });

export const signUp = (
  displayName: string,
  email: string,
  password: string
): Promise<UserDetails> =>
  new Promise(async (resolve, reject) => {
    let res = await axiosFetch.post<UserDetails>("/signup", {
      displayName,
      email,
      password,
    });
    if (res.status === 200) {
      resolve(res.data);
    } else reject();
  });

export const getProfile = (UID: string): Promise<UserDetails> =>
  new Promise(async (resolve, reject) => {
    let res = await axiosFetch.post<UserDetails>("/getProfile", {
      UID,
    });
    if (res.status === 200) {
      resolve(res.data);
    } else reject();
  });

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

export const stringToID = (str: string) => str.match(/.{1,4}/g)?.join("-");

export const isID = (str: string) => /(\w+){4}-(\w+){4}-(\w+){4}/.test(str);
