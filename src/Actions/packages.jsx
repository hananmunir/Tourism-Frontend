import { FETCH_ALL } from "../Constants/actionTypes.js";
import * as API from "../api";

export const getPackages = () => async (dispatch) => {
  try {
    const { data } = await API.fetchPackages();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
