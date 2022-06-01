import { PAYMENT } from "../Constants/actionTypes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case PAYMENT:
      return state;
    default:
      return state;
  }
};
export default reducer;
