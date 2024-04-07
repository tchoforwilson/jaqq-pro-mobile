import { useState, useCallback } from "react";
import useAuth from "./useAuth";
import useAlert from "./useAlert";

const useApi = (apiFunc) => {
  const auth = useAuth();
  const { setAlert } = useAlert();
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
            setAlert({
              status: response.data.status,
              message: response.data.message,
              visible: true,
            });
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
    [auth]
  );

  return { data, error, loading, request };
};

export default useApi;
