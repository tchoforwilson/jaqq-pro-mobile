import { create } from "apisauce";

// Define the API
const api = create({
  baseURL: "http://192.168.1.153:9000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
