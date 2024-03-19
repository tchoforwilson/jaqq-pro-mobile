import api from "./http.services";

const endpoint = "/services/";

const getAllServices = () => {
  return api.get(endpoint);
};

export default {
  getAllServices,
};
