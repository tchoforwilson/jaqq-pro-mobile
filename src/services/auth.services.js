import api from "./http.services";

const endpoint = "/auth/";

const getJwt = () => {
  return null;
};

const loginWithJwt = (jwt) => {
  console.log(jwt);
};

const setCurrentUser = (user) => {
  console.log(user);
};

const getCurrentUser = () => {};

const register = (data) => {
  return api.post(endpoint + "register", data);
};

const login = (data) => {
  return api.post(endpoint + "login", data);
};

const registerPhone = (data) => {
  return api.post(endpoint + "register-phone", data);
};

const resendSMSCode = (data) => {
  return api.post(endpoint + "resend-sms-code", data);
};

const verifySMSCode = (data) => {
  return api.post(endpoint + "verify-sms-code", data);
};

const updatePhoneNumber = (data) => {
  return api.patch(endpoint + "update-my-phone", data);
};

const updatePassword = (data) => {
  return api.patch(endpoint + "update-my-password", data);
};

export default {
  getJwt,
  loginWithJwt,
  setCurrentUser,
  getCurrentUser,
  register,
  login,
  registerPhone,
  resendSMSCode,
  verifySMSCode,
  updatePhoneNumber,
  updatePassword,
};
