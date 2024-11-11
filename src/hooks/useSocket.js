import { useEffect } from "react";
import socket from "../services/socket";

const useSocket = () => {
  console.log(socket.id);
  socket.connect();
  console.log(socket.connected);
  useEffect(() => {
    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return { socket };
};

export default useSocket;
