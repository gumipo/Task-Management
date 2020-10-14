import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TaskItem from "./TaskItem";

const CreateTask = () => {
  const inputEl = useRef(null);

  const [title, setTitle] = useState("");
  const [descriptions, setDescriptions] = useState([]);

  const addTask = () => {
    const newTitle = inputEl.current.value;
    if (newTitle.length === 0) {
      return;
    }
    setTitle(newTitle);
    inputEl.current.value = "";
  };

  return (
    <StyledSection>
      {title === "" ? (
        <div>
          <StyledTitle>
            <h1>今日の学習タスクを作成しよう</h1>
            <h2>タスクの作成</h2>
          </StyledTitle>
          <input placeholder="タスクのタイトル  例: HTMLの学習" ref={inputEl} />
          <StyledButton onClick={() => addTask()}>タスクの作成</StyledButton>
          <h2>タスクの作成で困ったとき</h2>
          <p>他の人のタスクを確認してみましょう</p>
          <button>みんなのタスクを確認する</button>
        </div>
      ) : (
        <StyledTaskArea>
          <TaskItem
            title={title}
            descriptions={descriptions}
            setDescriptions={setDescriptions}
          />
          <button>ぼぞんする</button>
        </StyledTaskArea>
      )}
    </StyledSection>
  );
};
export default CreateTask;

const StyledSection = styled.section`
  width: 1300px;
  margin: 100px auto;
  text-align: center;
  margin-bottom: 50px;
  input {
    width: 400px;
    height: 50px;
    border-radius: 5px;
    outline: none;
  }
`;
const StyledTaskArea = styled.div``;

const StyledTitle = styled.div`
  h1 {
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    ::before,
    ::after {
      content: "";
      width: 60px;
      height: 5px;
      background-color: green;
    }
    ::before {
      transform: rotate(60deg);
    }
    ::after {
      transform: rotate(-60deg);
    }
  }
  h2 {
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    ::before,
    ::after {
      content: "";
      width: 100px;
      height: 1px;
      background-color: #111;
    }
    ::before {
      margin-right: 10px;
    }
    ::after {
      margin-left: 10px;
    }
  }
`;

const StyledButton = styled.button`
  width: 150px;
  height: 50px;
  margin-left: 20px;
  background-color: green;
  border-radius: 10px;
  outline: none;
`;
