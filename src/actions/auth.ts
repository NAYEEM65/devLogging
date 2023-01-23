import axiosInstance from "../utils/axiosInstace";
import { REGISTER_FAILED, REGISTER_SUCCESS } from "./types";

//register User

export const register: {} =
  ({ name, email, password }: any) =>
  async (dispatch: any) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ name, email, password });
    console.log(body);
    try {
      const res = await axiosInstance.post("/api/register", body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (error: any) {
      const errors = error.response.data.errors;
      if (errors) {
        console.log(errors);
      }
      dispatch({
        type: REGISTER_FAILED,
      });
    }
  };
