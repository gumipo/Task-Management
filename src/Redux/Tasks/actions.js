export const FETCH_TASKS = "FETCH_TASKS";
export const fetchTasksAction = (tasks) => {
  return {
    type: "FETCH_TASKS",
    payload: tasks,
  };
};

export const DELETE_TASK = "DELETE_TASK";
export const deleteTaskAction = (tasks) => {
  return {
    type: "DELETE_TASK",
    payload: tasks,
  };
};
