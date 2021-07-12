import axiosFetch from "./axios.fetch";
import { Meeting, Chat } from "./types";

export const getAllMeets = async (UID: string): Promise<Meeting[]> => {
  return new Promise((resolve, reject) => {
    return axiosFetch
      .post<{ message?: string; meets: Meeting[] }>("/getAllMeet", {
        UID,
      })
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data.meets);
        } else reject(res.data.message);
      });
  });
};

export const getChat = async (UID: string, meetID: string): Promise<Chat[]> => {
  return new Promise((resolve, reject) => {
    return axiosFetch
      .post<Chat[] & { message?: string }>("/getChat", {
        UID,
        meetID,
      })
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data);
        } else reject(res.data.message);
      });
  });
};
