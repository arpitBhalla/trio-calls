import axiosFetch from "./axiosFetch";

type UserDetails = {
  displayName: string;
  email: string;
  UID: string;
};

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

export const newMeet = (UID: string): Promise<UserDetails> =>
  new Promise(async (resolve, reject) => {
    let res = await axiosFetch.post<UserDetails>("/newMeet", {
      UID,
    });
    if (res.status === 200) {
      resolve(res.data);
    } else reject();
  });
