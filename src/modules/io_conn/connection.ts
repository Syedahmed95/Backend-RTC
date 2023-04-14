import { io } from "../../www/www";
const peerID: any = [];
const socketID: any = [];
export const socketConn = () => {
  io.on("connect", (socket) => {
    socketID.push(socket.id);
    console.log("connect", socket.id);
    io.emit("id connected", socketID);
    socket.on("peerID", (data: any) => {
      if (data) {
        peerID.push(data);
      }
      if (peerID.length > 0) {
        socket.emit("webrtc", peerID);
      }
      console.log("Peer ID Socket", data);
    });

    socket.on("sendOffer", (data: any) => {
      console.log("offer", data);
      io.to(data.data.other).emit("receiveOffer", data.data.local);
    });

    socket.on("candidate", (data: any) => {
      console.log("candidate", data);
      io.to(data.other).emit("receiveCandidate", data.candidate);
    });

    socket.on("sendAnswer", (data: any) => {
      console.log("answer", data);
      io.to(data.other).emit("receiveAnswer", data.answer);
    });

    socket.on("disconnect", () => {
      const findIndex = socketID.indexOf(socket.id);
      if (findIndex !== -1) {
        socketID.splice(findIndex, 1);
      }
      console.log("Got disconnected", socket.id);
    });
  });
};
