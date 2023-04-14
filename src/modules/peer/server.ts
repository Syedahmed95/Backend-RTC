import { Application } from "express";
import { PeerServer } from "peer";
import app from "../../app";

export const peerServer = (httpServer: any) => {
  const peer = PeerServer({
    path: "/peer",
    port: 3020,
  });
  //   app.use("/peer", peer);
  peer.on("connection", (client: any) => {
    console.log("Peer Connected", client.id);
  });
  peer.on("disconnect", (client: any) => {
    console.log("client peer dis", client.id);
  });
};
