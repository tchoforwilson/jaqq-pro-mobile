import api from "./http.services";

const endpoint = "/tasks/";

const getAllTasks = () => {
  return api.get(endpoint);
};

const getTaskById = (taskId) => {
  return api.get(endpoint + taskId);
};

export default {
  getAllTasks,
  getTaskById,
};
