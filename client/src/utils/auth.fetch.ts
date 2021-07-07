import axiosFetch from "./axios.fetch";
import { UserDetails } from "./types";

export const signIn = async (
  email: string,
  password: string
): Promise<UserDetails> => {
  const res = await axiosFetch.post<UserDetails>("/signin", {
    email,
    password,
  });
  if (res.status === 200) {
    return res.data;
  } else throw new Error("");
};

export const signUp = async (
  displayName: string,
  email: string,
  password: string
): Promise<UserDetails> => {
  const res = await axiosFetch.post<UserDetails>("/signup", {
    displayName,
    email,
    password,
  });
  if (res.status === 200) {
    return res.data;
  } else throw new Error("");
};

export const getProfile = async (UID: string): Promise<UserDetails> => {
  const res = await axiosFetch.post<UserDetails>("/getProfile", {
    UID,
  });
  if (res.status === 200) {
    return res.data;
  } else throw new Error("");
};
