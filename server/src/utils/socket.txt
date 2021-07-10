import { Server, ServerOptions } from "socket.io";
import http from "http";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

let ioq: Server<DefaultEventsMap, DefaultEventsMap>;

export const io = (): Server<DefaultEventsMap, DefaultEventsMap> => {
  return ioq;
};

export const initializeSocket = (
  server?: http.Server,
  options?: Partial<ServerOptions>
): Server<DefaultEventsMap, DefaultEventsMap> => {
  return (ioq = new Server(server, options));
};
