import React from "react";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import { SocketContext } from "core/provider/socket";

export const useSocket = (): Socket<DefaultEventsMap, DefaultEventsMap> => {
  const socketConsumerContext = React.useContext(SocketContext);
  return socketConsumerContext;
};
