import { create } from "apisauce";
import { authStorage } from "../context";
import cache from "../utility/cache";

// Define the API
const api = create({
  baseURL: "http://192.168.1.153:9000/api",
  headers: {
    Accept: "application/json",
  },
});

// Function to set the authorization header with the token
const setAuthHeader = async () => {
  const token = await authStorage.getToken();
  if (token) {
    api.defaults.headers.common["authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["authorization"];
  }
};

// Call setAuthHeader before making API requests
setAuthHeader();

// api.addAsyncRequestTransform(async (request) => {
//   const authToken = await authStorage.getToken();
//   if (!authToken) return;
//   request.headers.common["authorization"] = `Bearer ${authToken}`;
// });

const get = api.get;

api.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default api;
