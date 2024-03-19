import { create } from "apisauce";

// Define the API
const api = create({
  baseURL: "http://localhost:9000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
