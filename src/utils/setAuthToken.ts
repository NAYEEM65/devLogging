import axiosInstance from "./axiosInstace";

const setAuthToken = (token: string) => {
  if (token) {
    axiosInstance.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axiosInstance.defaults.headers.common["x-auth-token"];
  }
};
export default setAuthToken;
