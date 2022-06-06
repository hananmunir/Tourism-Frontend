import { SIGNIN, LOGOUT, ERROR } from "../Constants/actionTypes";

//configuring initial state
const token = localStorage.getItem("TourismSecurityToken");
const user = JSON.parse(localStorage.getItem("TourismAuthData"));
const initialState = token ? { token, user } : {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      localStorage.setItem("TourismSecurityToken", action?.payload.token); // for storing token in local storage
      localStorage.setItem(
        "TourismAuthData",
        JSON.stringify(action?.payload.user)
      ); // for storing user data in local storage
      window.location.reload(); // for reloading page
      return { ...state, user: action?.payload.user };
    case LOGOUT:
      localStorage.removeItem("TourismSecurityToken"); // for removing token from local storage
      localStorage.removeItem("TourismAuthData"); // for removing user data from local storage
      return state;
    case ERROR:
      return { ...state, error: action.payload }; // for storing error in state
    default:
      return state;
  }
};
export default reducer;
