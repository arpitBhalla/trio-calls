import axiosFetch from "./axios.fetch";
import { UserDetails } from "./types";

type Response = UserDetails & { message?: string };

export const signIn = async (
  email: string,
  password: string
): Promise<UserDetails> => {
  return new Promise((resolve, reject) => {
    return axiosFetch
      .post<Response>("/signIn", {
        email,
        password,
      })
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data);
        } else reject(res.data.message);
      });
  });
};

export const signUp = async (
  displayName: string,
  email: string,
  password: string
): Promise<UserDetails> => {
  return new Promise((resolve, reject) => {
    return axiosFetch
      .post<Response>("/signUp", {
        displayName,
        email,
        password,
      })
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data);
        } else reject(res.data.message);
      });
  });
};
export const getProfile = async (UID: string): Promise<UserDetails> => {
  return new Promise((resolve, reject) => {
    return axiosFetch.post<Response>("/getProfile", { UID }).then((res) => {
      if (res.status === 200) {
        resolve(res.data);
      } else reject(res.data.message);
    });
  });
};
