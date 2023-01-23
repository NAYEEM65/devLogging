import { Reducer } from "redux";
import { REGISTER_FAILED, REGISTER_SUCCESS } from "../actions/types";
interface initState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
}

const initialState: initState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: true,
};

const reducer: Reducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAILED:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };

    default:
      return state;
  }
};
export { reducer as authReducer };
