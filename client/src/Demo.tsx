import React from "react";
import { useSocket } from "core/hooks/useSocket";
import { SocketProvider } from "core/provider/socket";

type Props = { a?: string };

const App: React.FC<Props> = ({ a }) => {
  const socket = useSocket();
  return <>sadsd</>;
};

const Root: React.FC = () => {
  return (
    <SocketProvider>
      <App />
    </SocketProvider>
  );
};

export default Root;
