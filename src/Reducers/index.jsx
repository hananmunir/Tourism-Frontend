import { combineReducers } from "redux";
import Packages from "./packages";
import Auth from "./auth";
import Payment from "./payment";
export default combineReducers({
  Packages,
  Auth,
  Payment,
});
