import { useEffect, useState } from "react";
import socket from "../services/socket";
import useAuth from "./useAuth";
import storage from "../context/storage";

const useSocket = () => {
  const [socketId, setSocketId] = useState(null);
  const auth = useAuth();

  const connect = () => {
    socket.emit("connection");
    socket.connect();
    console.log(socket.id);
  };

  socket.on("connected", (socket) => {
    console.log("Connected to server");
    console.log("Socket ID:", socket.id);
    storage.storeSocketId(socket.id);
    auth.storeNewUser(user);
    setSocketId(socket.id);
  });

  useEffect(() => {
    connect();

    return () => {
      socket.disconnect();
    };
  }, [auth, storage]);

  return socketId;
};

export default useSocket;
