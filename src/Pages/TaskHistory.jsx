import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const TaskHistory = () => {
  const dispatch = useDispatch();
  return (
    <section>
      <p>まだタスクがありません</p>
      <button onClick={() => dispatch(push("task/create"))}>
        タスクを作成する
      </button>
    </section>
  );
};
export default TaskHistory;
