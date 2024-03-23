import { useContext, useState } from "react";
import { ErrorContext } from "../context";

const useApi = (apiFunc) => {
  const { setMessage, setVisible } = useContext(ErrorContext);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) {
      if (response.data) {
        setMessage(response.data.message);
        setVisible(true);
      }
    }

    setError(!response.ok);
    setData(response.data.data);

    return response;
  };

  return { data, error, loading, request };
};

export default useApi;
