import { SIGNIN, SIGNUP, LOGOUT } from "../Constants/actionTypes";
import * as api from "../api/index";

export const signIn = (email, password) => async (dispatch) => {
  try {
    const { data } = await api.signIn(email, password);

    dispatch({ type: SIGNIN, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const signUp = (user) => async (dispatch) => {
  try {
    const { data } = await api.signUp(user);
  } catch (error) {
    console.log(error);
  }
};
export const logout = () =>async (dispatch) => {
  try {
    dispatch({ type: LOGOUT, payload: [] });
  } catch (error) {
    console.log(error);
  }
};
