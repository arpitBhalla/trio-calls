import axiosFetch from "./axiosFetch";
import { UserDetails } from "./functions";

export const signIn = (email: string, password: string): Promise<UserDetails> =>
  new Promise(async (resolve, reject) => {
    let res = await axiosFetch.post<UserDetails>("/signin", {
      email,
      password,
    });
    if (res.status === 200) {
      resolve(res.data);
    } else reject();
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
