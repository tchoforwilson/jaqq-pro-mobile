import { io } from "socket.io-client";
import { Platform } from "react-native";
import * as Device from "expo-device";
import storage from "../context/storage";

const handshakeToken = await storage.getToken(); // If getToken is async, use await
let SOCKET_SERVER_URL;

if (Platform.OS === "ios") {
  SOCKET_SERVER_URL = "http://localhost:9000";
} else if (Platform.OS === "android" && !Device.isDevice) {
  SOCKET_SERVER_URL = "http://10.0.2.2:9000";
} else {
  SOCKET_SERVER_URL = "http://192.168.1.153:9000";
}

console.log(SOCKET_SERVER_URL);

const socket = io.connect(SOCKET_SERVER_URL, {
  transports: ["websocket"],
  auth: {
    token: handshakeToken,
  },
  autoConnect: false,
});

export default socket;
