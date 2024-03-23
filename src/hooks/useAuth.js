import { useContext } from "react";
import { AuthContext, authStorage } from "../context";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken, newUser) => {
    setUser(newUser);
    if (authToken) authStorage.storeToken(authToken);
    authStorage.storeUser(newUser);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, logIn, logOut };
};
