import { useContext, useState, useCallback } from "react";
import { ErrorContext } from "../context";
import useAuth from "./useAuth";

const useApi = (apiFunc) => {
  const auth = useAuth();
  const { setMessage, setVisible, status, setStatus } =
    useContext(ErrorContext);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = useCallback(
    async (...args) => {
      setLoading(true);
      setError(false);
      setData([]);

      try {
        const response = await apiFunc(...args);

        if (!response.ok) {
          if (response.data) {
            const { data } = response;
            if (
              data.message.includes("jwt") ||
              data.message.includes("token")
            ) {
              // User token has expired, and logout user
              // TODO: Implement refresh token
              return auth.logOut();
            }

            setMessage(response.data.message);
            setStatus(response.data.status);
            setVisible(true);
          }
        } else {
          setData(response.data.data);
          setError(!response.ok);
        }

        return response;
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    },
    [auth, setMessage, setStatus, setVisible]
  );

  return { data, error, status, loading, request };
};

export default useApi;
