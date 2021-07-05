export type UserDetails = {
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
  chat?: [];
}
