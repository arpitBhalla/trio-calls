export type UserDetails = {
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
