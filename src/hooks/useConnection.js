import socket from "../services/socket";
import { useEffect } from "react";
import useAuth from "./useAuth";
import storage from "../context/storage";
import { useState } from "react";

const useConnection = () => {
  const [socketId, setSocketId] = useState();
  const auth = useAuth();

  useEffect(() => {
    const handleConnect = (user) => {
      console.log("Connected to server");
      console.log("Socket ID:", socket.id);
      storage.storeSocketId(socket.id);
      auth.storeNewUser(user);
      setSocketId(socket.id);
    };

    socket.on("connected", handleConnect);

    return () => {
      socket.off("connected", handleConnect);
    };
  }, [auth, storage]);

  return socketId;
};

export default useConnection;
