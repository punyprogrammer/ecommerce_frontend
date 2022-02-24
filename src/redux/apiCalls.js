import { publicRequest } from "../requestMethods";
import { loginFailure, loginSuccess, loginStart } from "./userRedux";
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data.data));
  } catch (error) {

    dispatch(loginFailure(error?.response?.data.msg));
  }
};
