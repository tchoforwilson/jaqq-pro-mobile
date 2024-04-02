import createQuery from "../utility/createQuery";
import api from "./http.services";

const endpoint = "/reviews/";

const getMyReviews = (data) => {
  const query = createQuery(data);
  return api.get(endpoint + "?" + query);
};

const getReview = (reviewId) => {
  api.get(endpoint + reviewId);
};

export default {
  getMyReviews,
  getReview,
};
