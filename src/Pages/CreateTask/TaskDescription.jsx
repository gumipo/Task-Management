import React from "react";

const TaskDescription = ({ text, time, setDescription }) => {
  return (
    <div>
      <p>{text}</p>
      <p>{time + "時間"}</p>
      <button>編集する</button>
      <button>削除する</button>
    </div>
  );
};

export default TaskDescription;
