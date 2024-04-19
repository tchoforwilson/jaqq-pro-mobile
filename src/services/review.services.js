import createQuery from "../utility/createQuery";
import api from "./http.services";
import storage from "../context/storage";

const endpoint = "/reviews/";

const getMyReviews = (data) => {
  const userId = storage.getUserId();
  const query = createQuery(data);
  return api.get(String(userId) + endpoint + "?" + query);
};

const getReview = (reviewId) => {
  api.get(endpoint + reviewId);
};

export default {
  getMyReviews,
  getReview,
};
