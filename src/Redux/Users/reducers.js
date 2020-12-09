import * as Actions from "./actions";
import initialState from "../Store/initialState";

export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.SIGN_OUT:
      return {
        ...action.payload,
      };
    case Actions.FETCH_USER_TASK:
      return {
        ...state,
        usertask: action.payload,
      };
    default:
      return state;
  }
};
