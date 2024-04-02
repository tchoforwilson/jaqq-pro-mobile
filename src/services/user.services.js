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

const updateUserLocation = (data) => {
  return api.patch(endpoint + "update-user-location", data);
};

const updatePushToken = (pushToken) => {
  return api.patch(endpoint + "update-push-token", { pushToken });
};

const updateMyPhoto = (data) => {
  return api.patch(endpoint + "update-my-photo", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

const getMyServices = () => {
  return api.get(endpoint + "my-services");
};

const toggleMyServices = (data) => {
  return api.patch(endpoint + "update-my-services", data);
};

const deleteMe = () => {
  return api.delete(endpoint + "delete-me");
};

export default {
  getAllMyTasks,
  getAllMyReviews,
  getMe,
  updateMe,
  updateUserLocation,
  updatePushToken,
  updateMyPhoto,
  getMyServices,
  toggleMyServices,
  deleteMe,
};
