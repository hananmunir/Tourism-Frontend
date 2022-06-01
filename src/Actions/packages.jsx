import { FETCH_ALL } from "../Constants/actionTypes.js";
import * as API from "../api";

export const getPackages = (page) => async (dispatch) => {
  try {
    const { data } = await API.fetchPackages(page);
    console.log("here");
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
