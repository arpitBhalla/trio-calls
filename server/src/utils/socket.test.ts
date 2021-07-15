import { createServer } from "http";
import { AddressInfo } from "net";
import { Server, Socket as ServerSocket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import Client, { Socket as ClientSocket } from "socket.io-client";

describe("my awesome project", () => {
  let io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap>,
    serverSocket: ServerSocket,
    clientSocket: ClientSocket;

  beforeAll((done) => {
    const httpServer = createServer();
    io = new Server(httpServer);
    httpServer.listen(() => {
      const port = (httpServer.address() as AddressInfo)?.port;
      clientSocket = Client(`http://localhost:${port}`);
      io.on("connection", (socket) => {
        serverSocket = socket;
      });
      clientSocket.on("connect", done);
    });
  });

  afterAll(() => {
    io.close();
    clientSocket.close();
  });

  test("should work", (done) => {
    clientSocket.on("hello", (arg) => {
      expect(arg).toBe("world");
      done();
    });
    serverSocket.emit("hello", "world");
  });

  test("should work (with ack)", (done) => {
    serverSocket.on("hi", (cb) => {
      cb("hola");
    });
    clientSocket.emit("hi", (arg: unknown) => {
      expect(arg).toBe("hola");
      done();
    });
  });
});
