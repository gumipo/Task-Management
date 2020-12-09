import React from "react";
import styled from "styled-components";
import { push } from "connected-react-router";
import { useSelector, useDispatch } from "react-redux";
import { getUserId, getUserTask } from "../../Redux/Users/selector";
import CreateTask from "./CreateTask";
import { db } from "../../Firebase/index";

const MainCreateTask = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch(selector);
  const usertask = getUserTask(selector);
  const uid = getUserId(selector);

  const removeUsertask = (id) => {
    return db
      .collection("users")
      .doc(uid)
      .collection("usertask")
      .doc(id)
      .delete();
  };

  return (
    <>
      {usertask.length > 0 ? (
        <StyledDiv>
          <p>すでにタスクが作成されています</p>
          <button onClick={() => dispatch(push("/now/task"))}>
            タスクを確認する
          </button>
          <button
            onClick={() => {
              removeUsertask(usertask[0].usertaskId);
            }}
          >
            タスクを作り直す
          </button>
          <p>
            ※現在のタスクは削除されます
            <br />
            すべて完了済みの場合は現在のタスク画面から完了させましょう
          </p>
        </StyledDiv>
      ) : (
        <CreateTask />
      )}
    </>
  );
};

export default MainCreateTask;

const StyledDiv = styled.div`
  width: 500px;
  margin: 70px auto 0 auto;
  display: flex;
  padding: 200px 0 200px 0;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transform: translateX(150px);
  p {
    font-size: 15px;
  }
  button {
    margin: 30px auto;
    width: 150px;
    height: 50px;
    :nth-child(2) {
      background-color: #fff;
    }
    :nth-child(3) {
      background-color: #333;
      color: white;
    }
  }
`;
