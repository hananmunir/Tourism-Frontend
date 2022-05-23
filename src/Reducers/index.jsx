import { combineReducers } from "redux";
import Packages from "./packages";
import Auth from "./auth";

export default combineReducers({
  Packages,
  Auth,
});
