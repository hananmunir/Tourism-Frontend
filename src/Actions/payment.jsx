import { PAYMENT } from "../Constants/actionTypes.js";
import * as API from "../api";

export const getPackages = (data) => async (dispatch) => {
  try {
    const { data } = await API.fetchPackages(data);

    dispatch({ type: PAYMENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
