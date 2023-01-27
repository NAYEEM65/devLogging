import axiosInstance from "../utils/axiosInstace";
import setAuthToken from "../utils/setAuthToken";
import {
  AUTH_ERROR,
  CLEAR_PROFILE,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  USER_LOADED,
} from "./types";

// Load User
export const loadUser = () => async (dispatch: any) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axiosInstance.get("/get-user");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
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
      const res = await axiosInstance.post("/register", body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
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
// Login User

export const login =
  (email: string, password: string) => async (dispatch: any) => {
    const body = { email, password };

    try {
      const res = await axiosInstance.post("/login", body);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      dispatch(loadUser());
    } catch (err: any) {
      const errors = err.response.data.errors;

      console.log(errors);

      dispatch({
        type: LOGIN_FAILED,
      });
    }
  };

export const logout = () => (dispatch: any) => {
  dispatch({ type: LOGOUT });
  dispatch({ type: CLEAR_PROFILE });
};
