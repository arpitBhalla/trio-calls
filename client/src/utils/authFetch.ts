import axiosFetch from "./axiosFetch";
import { UserDetails } from "./types";

export const signIn = (email: string, password: string): Promise<UserDetails> =>
  new Promise(async (resolve, reject) => {
    try {
      let res = await axiosFetch.post<UserDetails>("/signin", {
        email,
        password,
      });
      if (res.status === 200) {
        resolve(res.data);
      } else reject(res.data);
    } catch (e) {
      reject(e);
    }
  });

export const signUp = (
  displayName: string,
  email: string,
  password: string
): Promise<UserDetails> =>
  new Promise(async (resolve, reject) => {
    try {
      let res = await axiosFetch.post<UserDetails>("/signup", {
        displayName,
        email,
        password,
      });
      if (res.status === 200) {
        resolve(res.data);
      } else reject(res.data);
    } catch (e) {
      reject(e);
    }
  });

export const getProfile = (UID: string): Promise<UserDetails> =>
  new Promise(async (resolve, reject) => {
    try {
      let res = await axiosFetch.post<UserDetails>("/getProfile", {
        UID,
      });
      if (res.status === 200) {
        resolve(res.data);
      } else reject(res.data);
    } catch (e) {
      reject(e);
    }
  });
