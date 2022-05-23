import { SIGNUP, SIGNIN, LOGOUT } from "../Constants/actionTypes";

const reducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case SIGNIN:
      localStorage.setItem("webtoken", action?.payload);
      return { ...state, authData: action?.payload };
    case LOGOUT:
      localStorage.removeItem("webtoken");
      return state;
    default:
      return state;
  }
};
export default reducer;
