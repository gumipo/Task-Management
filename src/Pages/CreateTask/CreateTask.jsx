import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TaskItem from "./TaskItem";

const CreateTask = () => {
  const inputEl = useRef(null);

  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const title = inputEl.current.value;
    if (title.length === 0) {
      return;
    }
    const newTask = {
      title: title,
      isCompleted: false,
    };
    setTasks((prevState) => {
      const newTasks = [...prevState, newTask];
      inputEl.current.value = "";
      return newTasks;
    });
  };

  return (
    <StyledSection>
      <StyledTitle>タスクの作成</StyledTitle>
      <input placeholder="タスクのタイトル" ref={inputEl} />
      <StyledButton onClick={() => addTask()}>
        {!tasks.lenght > 0 ? "タスクを作成" : "タスクを追加"}
      </StyledButton>
      <StyledTaskArea>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <TaskItem index={index} task={task} addTask={addTask} />
          ))
        ) : (
          <p>タスクがまだありません</p>
        )}
      </StyledTaskArea>
      {tasks.length > 0 && <button>保存する</button>}
    </StyledSection>
  );
};
export default CreateTask;

const StyledSection = styled.section`
  width: 1100px;
  margin: 100px auto;
  text-align: center;
  margin-bottom: 50px;
  input {
    width: 400px;
    height: 50px;
    border-radius: 5px;
    background-color: pink;
    outline: none;
  }
`;
const StyledTaskArea = styled.div`
  display: flex;
  flex-flow: row wrap;
  p {
    padding: 40px;
    width: 300px;
    margin: 0 auto;
  }
`;

const StyledTitle = styled.h1`
  font-size: 30px;
`;

const StyledButton = styled.button`
  width: 150px;
  height: 50px;
  margin-left: 20px;
  background-color: green;
  border-radius: 10px;
  outline: none;
`;
