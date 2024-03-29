import createQuery from "../utility/createQuery";
import api from "./http.services";

const endpoint = "/tasks/";

const getAllTasks = (data) => {
  const query = createQuery(data);
  return api.get(endpoint + "?" + query);
};

const getTaskById = (taskId) => {
  return api.get(endpoint + taskId);
};

export default {
  getAllTasks,
  getTaskById,
};
