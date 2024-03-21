import { create } from "apisauce";
import { authStorage } from "../context";

// Define the API
const api = create({
  baseURL: "http://192.168.1.153:9000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${authStorage.getToken()}`,
  },
});

export default api;
