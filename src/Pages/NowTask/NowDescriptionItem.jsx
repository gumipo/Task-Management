import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { chageStatusTask } from "../../Redux/Users/operations";

const NowDescriptionItem = ({ title, descriptions, time, text, id, index }) => {
  const dispatch = useDispatch();

  const changeCompleteTask = (index) => {
    const newDescriptions = descriptions;
    const description = newDescriptions[index];
    if (description.isCompleted) {
      description.isCompleted = false;
    } else {
      description.isCompleted = true;
    }
    dispatch(chageStatusTask(id, title, descriptions));
  };

  return (
    <div>
      <p>{text}</p>
      <p>{time}</p>
      <button onClick={() => changeCompleteTask(index)}>完了</button>
    </div>
  );
};

export default NowDescriptionItem;
