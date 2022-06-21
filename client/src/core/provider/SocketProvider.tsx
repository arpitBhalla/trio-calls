import React from "react";
import io, { Socket } from "socket.io-client";
import { ServerURL } from "core/config";

export interface DefaultEventsMap {
  // eslint-disable-next-line
  // @ts-ignore
  [event: string]: (...args: any[]) => void;
}

const socket: Socket<DefaultEventsMap, DefaultEventsMap> = io(ServerURL);

export const SocketContext =
  React.createContext<Socket<DefaultEventsMap, DefaultEventsMap>>(socket);

export const SocketProvider: React.FC = ({ children }) => {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export default SocketProvider;
