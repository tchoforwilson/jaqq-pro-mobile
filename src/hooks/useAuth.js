import { useContext } from "react";
import { AuthContext, authStorage } from "../context";
import socket from "../services/socket";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  /**
   * @breif Log a new user in
   * @param {String} authToken Authentication token
   * @param {Object} newUser New user object
   */
  const logIn = (authToken) => {
    authStorage.storeToken(authToken);
  };

  /**
   * @breif Store a new user object
   * @param {Object} newUser New user objects
   */
  const storeNewUser = (newUser) => {
    setUser(newUser);
    authStorage.storeUser(newUser);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
    socket.emit("disconnect");
  };

  return { user, storeNewUser, logIn, logOut };
};
