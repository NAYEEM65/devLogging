import axiosInstance from "../utils/axiosInstace";
import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  ACCOUNT_DELETED,
  GET_REPOS,
  NO_REPOS,
} from "./types";

/*
  NOTE: we don't need a config object for axios as the
 default headers in axios are already Content-Type: application/json
 also axios stringifies and parses JSON for you, so no need for 
 JSON.stringify or JSON.parse
*/

// Get current users profile
export const getCurrentProfile =
  () => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
      const res = await axiosInstance.get("/profile/me");

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    } catch (err) {
      // dispatch({
      //   type: PROFILE_ERROR,
      //   payload: { msg: err.response.statusText, status: err.response.status }
      // });
    }
  };

// Get all profiles
export const getProfiles =
  () => async (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    dispatch({ type: CLEAR_PROFILE });

    try {
      const res = await axiosInstance.get("/profile");

      dispatch({
        type: GET_PROFILES,
        payload: res.data,
      });
    } catch (err) {
      // dispatch({
      //   type: PROFILE_ERROR,
      //   payload: { msg: err.response.statusText, status: err.response.status }
      // });
    }
  };

// Get profile by ID
export const getProfileById =
  (userId: any) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
      const res = await axiosInstance.get(`/profile/user/${userId}`);

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    } catch (err) {
      // dispatch({
      //   type: PROFILE_ERROR,
      //   payload: { msg: err.response.statusText, status: err.response.status }
      // });
    }
  };

// Get Github repos
export const getGithubRepos =
  (username: any) =>
  async (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    try {
      const res = await axiosInstance.get(`/profile/github/${username}`);

      dispatch({
        type: GET_REPOS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: NO_REPOS,
      });
    }
  };

// Create or update profile
export const createProfile =
  (formData: any, navigate: (arg0: string) => void, edit = false) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
      const res = await axiosInstance.post("/profile", formData);

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });

      if (!edit) {
        navigate("/dashboard");
      }
    } catch (err) {
      // const errors = err.response.data.errors;
      // if (errors) {
      //   errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      // }
      // dispatch({
      //   type: PROFILE_ERROR,
      //   payload: { msg: err.response.statusText, status: err.response.status }
      // });
    }
  };

// Add Experience
export const addExperience =
  (formData: any) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
      const res = await axiosInstance.put("/profile/experience", formData);

      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data,
      });

      return res.data;
    } catch (err: any) {
      const errors = err.response.data.errors;
      console.log(errors);

      // dispatch({
      //   type: PROFILE_ERROR,
      //   payload: { msg: err.response.statusText, status: err.response.status }
      // });
    }
  };

// Add Education
export const addEducation =
  (formData: any) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
      const res = await axiosInstance.put("/profile/education", formData);

      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data,
      });

      // dispatch(setAlert('Education Added', 'success'));
      return res.data;
    } catch (err: any) {
      const errors = err.response.data.errors;

      console.log(errors);
      // dispatch({
      //   type: PROFILE_ERROR,
      //   payload: { msg: err.response.statusText, status: err.response.status }
      // });
    }
  };

// Delete experience
export const deleteExperience =
  (id: any) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
      const res = await axiosInstance.delete(`/profile/experience/${id}`);

      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data,
      });
    } catch (err) {
      // dispatch({
      //   type: PROFILE_ERROR,
      //   payload: { msg: err.response.statusText, status: err.response.status }
      // });
    }
  };

// Delete education
export const deleteEducation =
  (id: any) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
      const res = await axiosInstance.delete(`/profile/education/${id}`);

      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data,
      });

      // dispatch(setAlert('Education Removed', 'success'));
    } catch (err) {
      // dispatch({
      //   type: PROFILE_ERROR,
      //   payload: { msg: err.response.statusText, status: err.response.status }
      // });
    }
  };

// Delete account & profile
export const deleteAccount =
  () =>
  async (
    dispatch: (arg0: {
      type: string;
      payload?: { msg: any; status: any };
    }) => void
  ) => {
    if (window.confirm("Are you sure? This can NOT be undone!")) {
      try {
        await axiosInstance.delete("/profile");

        dispatch({ type: CLEAR_PROFILE });
        dispatch({ type: ACCOUNT_DELETED });

        //   dispatch(setAlert('Your account has been permanently deleted'));
      } catch (err) {
        //   dispatch({
        //     type: PROFILE_ERROR,
        //     payload: { msg: err.response.statusText, status: err.response.status }
        //   });
      }
    }
  };
