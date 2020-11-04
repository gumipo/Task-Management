import * as Actions from "./actions";
import initialState from "../Store/initialState";

export const TasksReducer = (state = initialState.tasks, action) => {
  switch (action.type) {
    case Actions.FETCH_TASKS:
      return {
        ...state,
        list: [...action.payload],
      };
    case Actions.DELETE_TASK:
      return {
        ...state,
        list: [...action.payload],
      };
    default:
      return state;
  }
};
