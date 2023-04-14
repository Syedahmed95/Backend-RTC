import app from "../app";
import http from "http";
import { Server } from "socket.io";
import { socketConn } from "../modules/io_conn/connection";
// import { peerServer } from "../modules/peer/server";
const createServer = http.createServer(app);
export const io = new Server(createServer);
socketConn();
// peerServer(createServer);
const port = Number(process.env.PORT) || 3010;
const ip = "192.168.180.149";
createServer.listen(port, ip, () => {
  console.log(`Server listening at ${port}`);
});
