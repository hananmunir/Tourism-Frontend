import { SIGNIN, LOGOUT, ERROR } from "../Constants/actionTypes";
import * as api from "../api/index";

// Action Creators

// Signin Action
export const signIn = (email, password) => async (dispatch) => {
  try {
    const { data } = await api.signIn(email, password);

    // dispatach the action
    dispatch({ type: SIGNIN, payload: data });
    window.location.href = "/";
  } catch (error) {
    if (
      error?.response.status === 401 ||
      error?.response.status === 403 ||
      error?.response.status === 404
    ) {
      // dispatach the error action
      dispatch({ type: ERROR, payload: "Email or Password Incorrect" });
    }
  }
};

// Signup Action
export const signUp = (user, setSignup) => async (dispatch) => {
  try {
    const { data } = await api.signUp(user);

    //navigate to login form
    setSignup(false);
  } catch (error) {
    console.log(error);
    // dispatach the error action
    if (error?.response.status === 400) {
      dispatch({ type: ERROR, payload: "Email Already Exists" });
    }
  }
};

// Logout Action
export const logout = (navigate) => async (dispatch) => {
  try {

    // dispatach the action
    dispatch({ type: LOGOUT, payload: [] });

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
