import axiosFetch from "./axios.fetch";
import { UserDetails } from "./types";

type Response = UserDetails & { message?: string };

export const signIn = async (
  email: string,
  password: string
): Promise<UserDetails> => {
  const res = await axiosFetch.post<Response>("/signIn", {
    email,
    password,
  });
  if (res.status === 200) {
    return res.data;
  } else throw new Error(res.data.message);
};

export const signUp = async (
  displayName: string,
  email: string,
  password: string
): Promise<UserDetails> => {
  const res = await axiosFetch.post<Response>("/signUp", {
    displayName,
    email,
    password,
  });
  if (res.status === 200) {
    return res.data;
  } else throw new Error(res.data.message);
};

export const getProfile = async (UID: string): Promise<UserDetails> => {
  const res = await axiosFetch.post<Response>("/getProfile", {
    UID,
  });
  if (res.status === 200) {
    return res.data;
  } else throw new Error(res.data.message);
};
