import React, { useState, useRef } from "react";
import styled from "styled-components";

const TaskItem = ({ task, index, addTask }) => {
  const inputEl = useRef(null);
  const [isEdit, setIsEdit] = useState(true);

  return (
    <StyledTaskItem>
      <StyledTaskTitle>{task.title}</StyledTaskTitle>
      <p>学習する言語</p>

      <p>学習の内容</p>

      <StyledTextArea ref={inputEl} placeholder="学習内容"></StyledTextArea>
      <button>編集する</button>
    </StyledTaskItem>
  );
};
export default TaskItem;

const StyledTaskItem = styled.div`
  width: 500px;
  padding: 30px;
  margin: 10px auto;
  border: 3px groove grey;
`;

const StyledTaskTitle = styled.h2`
  background-color: #79ea3f;
  border-radius: 40px;
  font-size: 30px;
  text-align: center;
`;

const StyledTextArea = styled.textarea`
  width: 400px;
  margin: 0 auto;
  height: 200px;
`;
