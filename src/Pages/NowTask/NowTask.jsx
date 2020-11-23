import React, { useEffect, useState } from "react";
import { push } from "connected-react-router";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getUserTask } from "../../Redux/Users/selector";
import NowTaskItem from "./NowTaskItem";

const NowTask = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const usertask = getUserTask(selector);

  return (
    <StyledSection>
      {usertask.length > 0 ? (
        usertask.map((task) => (
          <NowTaskItem
            usertask={usertask}
            title={task.title}
            descriptions={task.descriptions}
            key={task.title}
            id={task.usertaskId}
          />
        ))
      ) : (
        <div>
          <p>まだ登録されているタスクがありません</p>
          <button onClick={() => dispatch(push("/task/create"))}>
            タスクを作成する
          </button>
        </div>
      )}
    </StyledSection>
  );
};

export default NowTask;

const StyledSection = styled.section`
  width: 1000px;
  margin: 70px auto;
  transform: translateX(150px);
  button {
    width: 200px;
    height: 30px;
  }
`;
