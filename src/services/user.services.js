import api from "./http.services";

const endpoint = "/users/";

const getAllMyTasks = (userId) => {
  return api.get(userId + endpoint + "tasks");
};

const getAllMyReviews = (userId) => {
  return api.get(userId + endpoint + "reviews");
};

const getMe = () => {
  return api.get(endpoint + "me");
};

const updateMe = (data) => {
  return api.patch(endpoint + "update-me", data);
};

const updateMyPhoto = (data) => {
  return api.patch(endpoint + "update-my-photo", data);
};

const toggleMyServices = (data) => {
  return api.patch(endpoint + "toggle-my-services", data);
};

const deleteMe = () => {
  return api.delete(endpoint + "delete-me");
};

export default {
  getAllMyTasks,
  getAllMyReviews,
  getMe,
  updateMe,
  updateMyPhoto,
  toggleMyServices,
  deleteMe,
};
