import axiosInstance from "../../utils/axiosInstace";

export const register = async (
  fullName: string,
  email: string,
  password: string
) => {
  return axiosInstance.post("/api/register", {
    name: fullName,
    email,
    password,
  });
};
