export type UserDetails = {
  _id?: string;
  displayName: string;
  email: string;
  UID: string;
};
export interface Meeting {
  _id?: string;
  title: string;
  hostID: string;
  invitees: string[];
  type: "public" | "private";
  time: string;
  chat?: [];
  meetID?: string;
}

export interface Chat {
  _id?: string;
  createdAt?: string;
  message: string;
  MID: string | Meeting;
  UID: string;
  displayName: string;
  time: string;
}
