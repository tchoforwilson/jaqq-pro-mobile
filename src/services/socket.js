import { io } from "socket.io-client";
import storage from "../context/storage";

const handshakeToken = storage.getToken();

const socket = io("http://192.168.1.153:9000", {
  transports: ["websocket"],
  auth: {
    token: handshakeToken,
  },
  autoConnect: true,
});

export default socket;
