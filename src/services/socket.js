import { io } from "socket.io-client";
import storage from "../context/storage";
import * as Device from "expo-device";
import { Platform } from "react-native";

const handshakeToken = storage.getToken();
let SOCKET_SERVER_URL = "http://10.0.2.2:9000";
if (Platform.OS === "ios") {
  SOCKET_SERVER_URL = "http://localhost:9000";
}
if (Device.isDevice) {
  SOCKET_SERVER_URL = "http://192.168.1.153:9000";
}

const socket = io(SOCKET_SERVER_URL, {
  transports: ["websocket"],
  auth: {
    token: handshakeToken,
  },
  autoConnect: true,
});

export default socket;
