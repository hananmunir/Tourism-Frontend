import { FETCH_ALL } from "../Constants/actionTypes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        packages: action.payload.packages,
        totalPackages: action.payload.totalPackages,
      }; //returning the packages
    default:
      return state;
  }
};
export default reducer;
